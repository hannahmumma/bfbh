import classnames from "classnames";

const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorAdvancedControls } = wp.blockEditor;
const { ToggleControl } = wp.components;

const allowedBlocks = ["core/image"];

const addAttributes = (settings) => {
	if (
		typeof settings.attributes !== "undefined" &&
		allowedBlocks.includes(settings.name)
	) {
		settings.attributes = Object.assign(settings.attributes, {
			fullWidthImage: {
				type: "boolean",
				default: false,
			},
		});
	}

	return settings;
};

addFilter("blocks.registerBlockType", "bfbh/add-attributes", addAttributes);

const addToAdvancedControls = createHigherOrderComponent(
	(BlockEdit) => (props) => {
		const { attributes, isSelected, name, setAttributes } = props;

		const { fullWidthImage } = attributes;

		return (
			<Fragment>
				<BlockEdit {...props} />

				{isSelected && allowedBlocks.includes(name) && (
					<InspectorAdvancedControls>
						<ToggleControl
							label={__("Full Width Image")}
							checked={fullWidthImage}
							onChange={() =>
								setAttributes({
									fullWidthImage: !fullWidthImage,
								})
							}
							help={
								fullWidthImage
									? __("Image expands to width of screen")
									: __("Image is contained")
							}
						/>
					</InspectorAdvancedControls>
				)}
			</Fragment>
		);
	},
	"addToAdvancedControls"
);

addFilter("editor.BlockEdit", "bfbh/advanced-controls", addToAdvancedControls);

const addExtraClass = (extraProps, blockType, attributes) => {
	const { fullWidthImage } = attributes;

	if (
		typeof fullWidthImage !== "undefined" &&
		fullWidthImage &&
		allowedBlocks.includes(blockType.name)
	) {
		extraProps.className = classnames(extraProps.className, "full-width");
	}

	return extraProps;
};

addFilter(
	"blocks.getSaveContent.extraProps",
	"bfbh/add-extra-class",
	addExtraClass
);

export default { addAttributes, addToAdvancedControls, addExtraClass };
