const fse = require("fs-extra");
const path = require("path");
async function copyAssets() {
    try{
        const sourceFile = path.join(__dirname, "src/assets");
        const destPath = path.join(__dirname, "assets/");
        await fse.copy(sourceFile, destPath);
        console.log("Assets file have been copied.");
    }
    catch(err) {
        console.error(err);
    }
}
copyAssets();