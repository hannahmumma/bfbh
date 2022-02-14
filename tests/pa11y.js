const pa11y = require("pa11y");
const urlConfig = require("../pa11y.json");

const config = {
    chromeLaunchConfig: {
        ignoreHTTPSErrors: true,
    },
    hideElements: "#wpadminbar",
    includeWarnings: true,
    ignore: ["notice"],
    log: {
        debug: console.log,
        error: console.error,
        info: console.info,
    },
    rootElement: "body",
    standard: "WCAG2AAA",
    threshold: 2,
    timeout: 20000,
    userAgent: "pa11y",
    width: 1280,
};

const setupURLs = () => {
    let url;
    
    if (process.argv[2]) {
        Object.entries(process.argv).forEach(([key]) => {
            if (key === process.argv[2]) {
                if (urlConfig.urls[key] !== "") {
                    url = urlConfig.urls[key];
                } else {
                    console.log(`✘ Error: Please add a URL for ${key}`);
                    process.exit(1);
                }
            }
        });
    } else {
        url = urlConfig.urls.local;
    }

    return url;
};

const runPa11y = async () => {
    const url = setupURLs();

    try {
        const results = await pa11y(url, config);
        if (results.issues.length) {
            console.log(results);
        } else {
            console.log("✔ All accessibility tests have passed.");
        }

    } catch (error) {
        console.log(error);
    }
};

runPa11y();
