/** @type {import("jest").Config} **/
export default {
    testEnvironment: "jsdom",
    preset: "ts-jest",
    testPathIgnorePatterns: [`<rootDir>/testSite/`],
    // moduleNameMapper: {
    //     "^@pages/(.*)": "<rootDir>/src/js/pages/$1",
    //     "^@components/(.*)": "<rootDir>/src/js/components/$1",
    //     "^@utils": "<rootDir>/src/js/utils",
    // },
    moduleNameMapper: {
        "^@pages/(.*)\\.js$": "<rootDir>/src/js/pages/$1",
        "^@pages/(.*)$": "<rootDir>/src/js/pages/$1",
        "^@components/(.*)\\.js$": "<rootDir>/src/js/components/$1",
        "^@components/(.*)$": "<rootDir>/src/js/components/$1", //to strip .js extension
        "^@utils": "<rootDir>/src/js/utils",
        "(.+)\\.js": "$1",
    },
};
