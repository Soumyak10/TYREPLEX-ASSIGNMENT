// babel.config.js
module.exports = {
    presets: [
        "react-app", // This is the default preset for Create React App
    ],
    plugins: [
        "@babel/plugin-proposal-private-property-in-object", // Add this line
    ],
};
