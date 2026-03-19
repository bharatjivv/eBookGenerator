const multer = require('multer');
const path = require('path');
const fs = require('fs');


// Create Upload Directory if it doesn't exists
const uploadDir = "uploads";
if(!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, {recursive: true })
}

// Set up storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(
            null,
            `${file.filename}-${Date.now()}${path.extname(fileoriginalname)}`
        );
    },
});


// Check file type
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname) {
        return cb(null, true);
    } else {
        cb("Error: Images Only!")
    }
}


// Initialize Upload
const upload = multer({
    storage: storage,
    limits : {fileSize: 2* 1024 * 1024 },
    fileFilter : function (req, file, cb) {
        checkFileType(file, cb);
    },
}).single("coverImage"); // Field name for the uploaded file

module.exports = upload;


