const fs = require('fs');
const makeFolder = (dir) => {
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

makeFolder('./persons');