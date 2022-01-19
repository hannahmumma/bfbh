const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload } =
	wp.blockEditor;
const { PanelBody, Button, RangeControl } = wp.components;

// namespace/block-slug

export default registerBlockType("bfbh/hero-block", {
	title: "Hero",
	icon: "smiley",
	category: "bfbh-blocks",
	attributes: {
		title: {
			type: "string",
			source: "html",
			selector: "h2",
		},
		titleColor: {
			type: "string",
			default: "black",
		},
		body: {
			type: "string",
			source: "html",
			selector: "p",
		},
		bodyColor: {
			type: "string",
			default: "black",
		},
		backgroundImage: {
			type: "string",
			default: null,
		},
		overlayColor: {
			type: "string",
			default: "black",
		},
		overlayOpacity: {
			type: "number",
			default: 0.3,
		},
	},
	edit: ({ attributes, setAttributes }) => {
		const {
			title,
			titleColor,
			body,
			bodyColor,
			backgroundImage,
			overlayColor,
			overlayOpacity,
		} = attributes;

		const onChangeTitle = (newTitle) => {
			setAttributes({ title: newTitle });
		};

		const onChangeTitleColor = (newTitleColor) => {
			setAttributes({ titleColor: newTitleColor });
		};

		const onChangeBody = (newBody) => {
			setAttributes({ body: newBody });
		};

		const onChangeBodyColor = (newBodyColor) => {
			setAttributes({ bodyColor: newBodyColor });
		};

		const onSelectImage = (newImage) => {
			setAttributes({ backgroundImage: newImage.sizes.full.url });
		};

		const onOverlayColorChange = (newColor) => {
			setAttributes({ overlayColor: newColor });
		};

		const onOverlayOpacityChange = (newOpacity) => {
			setAttributes({ overlayOpacity: newOpacity });
		};

		return [
			<InspectorControls style={{ marginBottom: "40px" }}>
				<PanelBody title={"Font Color Settings"}>
					<p>
						<strong>Select a title color:</strong>
					</p>
					<ColorPalette
						value={titleColor}
						onChange={onChangeTitleColor}
					/>
				</PanelBody>

				<PanelBody title={"Font Color Settings"}>
					<p>
						<strong>Select a body color:</strong>
					</p>
					<ColorPalette
						value={bodyColor}
						onChange={onChangeBodyColor}
					/>
				</PanelBody>

				<PanelBody title={"Background Image Settings"}>
					<p>
						<strong>Select a background image:</strong>
					</p>
					<MediaUpload
						onSelect={onSelectImage}
						type="image"
						value={backgroundImage}
						render={({ open }) => (
							<Button
								onClick={open}
								icon="upload"
								className="editor-media-placeholder__button is-button is-default is-large"
							>
								Background Image
							</Button>
						)}
					/>

					<div style={{ marginTop: "20px", marginBottom: "40px" }}>
						<p>
							<strong>Overlay color:</strong>
						</p>
						<ColorPalette
							value={overlayColor}
							onChange={onOverlayColorChange}
						/>
					</div>
					<RangeControl
						label={"Overlay opacity"}
						value={overlayOpacity}
						onChange={onOverlayOpacityChange}
						min={0}
						max={1}
						step={0.01}
					/>
				</PanelBody>
			</InspectorControls>,

			<div
				className="container"
				style={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: "cover",
					bakckgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<RichText
					key="editable"
					tagName="h2"
					placeholder="title"
					value={title}
					onChange={onChangeTitle}
					style={{ color: titleColor }}
				/>

				<RichText
					key="editable"
					tagName="p"
					placeholder="description"
					value={body}
					onChange={onChangeBody}
					style={{ color: bodyColor }}
				/>
			</div>,
		];
	},
	save: ({ attributes }) => {
		const {
			title,
			titleColor,
			body,
			bodyColor,
			backgroundImage,
			overlayColor,
			overlayOpacity,
		} = attributes;

		return (
			<div
				className="container"
				style={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: "cover",
					bakckgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<h2 style={{ color: titleColor }}>{title}</h2>
				<RichText.Content
					tagName="p"
					value={body}
					style={{ color: bodyColor }}
				/>
			</div>
		);
	},
});
