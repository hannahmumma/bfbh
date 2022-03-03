const getParam = (param) => {
    const searchParams = new URLSearchParams(window.location.search);
    let item;

    if (searchParams.has(param)) {
        searchParams.forEach((value, key) => {
            if (key === param) {
                item = value;
            }
        });
    }

    return item;
};

/**
 * @method delay
 * @desc sets a timer
 * @param {integer}
 * @return {object}
 */
const delay = (ms) =>
    new Promise((resolve) => {
        setTimeout(resolve, ms);
    });

export { getParam, delay };
