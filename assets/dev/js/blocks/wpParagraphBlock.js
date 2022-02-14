/* eslint-disable */

const { __ } = wp.i18n;
const { addFilter } = wp.hooks;

const addExtraClassToCoreBlocks = (props, blockType, attributes) => {
    const notDefined = !!(
        typeof props.className === "undefined" || !props.className
    );

    if (blockType.name === "core/paragraph") {
        return Object.assign(props, {
            className: notDefined
                ? "wp-block-paragraph"
                : `wp-block-paragraph ${props.className}`,
        });
    }

    return props;
};

addFilter(
    "blocks.getSaveContent.extraProps",
    "bfbh/add-extra-class-to-paragraph-block",
    addExtraClassToCoreBlocks
);

export default { addExtraClassToCoreBlocks };
