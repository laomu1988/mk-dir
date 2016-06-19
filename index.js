var fs = require('fs');


function MakeFolder(folder) {
    try {
        if (!folder) {
            return;
        }
        if (fs.existsSync(folder)) {
            return;
        }
        var before = folder.substring(0, folder.lastIndexOf('/'));
        if (!fs.existsSync(before)) {
            MakeFolder(before);
        }
        fs.mkdirSync(folder);
    } catch (e) {
        console.log(e);
    }

    return;
}

module.exports = MakeFolder;