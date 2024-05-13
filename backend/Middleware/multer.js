const multer = require("multer");
const path = require("path");

const createMulterInstance = (folderName) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `public/images/${folderName}`);
    },
    filename: (req, file, cb) => {
      
      const originalname = path.parse(file.originalname);
      cb(null, `${originalname.name}_${Date.now()}${originalname.ext}`);
    },
  });
  return multer({ storage: storage });
};

module.exports = createMulterInstance;






// const multer = require("multer");
// const path = require("path");
// const sharp = require("sharp");

// const createMulterInstance = (folderName) => {
//   const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, `public/images/${folderName}`);
//     },
//     filename: (req, file, cb) => {
//       const originalname = path.parse(file.originalname);
//       cb(null, `${originalname.name}_${Date.now()}${originalname.ext}`);
//     },
//   });

//   const upload = multer({
//     storage: storage,
//     limits: { fileSize: 50 * 1024 * 1024 }, // Limit to 50 MB
//   });

  
//   const compressIfNeeded = (req, res, next) => {
//     if (!req.file) {
//       return next(); 
//     }

//     if (req.file.fieldname === 'appFile' && req.file.size > 50 * 1024 * 1024) {
//       // If file is appFile and size > 50 MB, compress
//       const filePath = path.join(req.file.destination, req.file.filename);
//       sharp(filePath)
//         .resize({ width: 1024 }) 
//         .toFile(filePath, (err, info) => {
//           if (err) {
            
//             console.error("Error compressing file:", err);
//             return res.status(500).send("Error compressing file.");
//           }
//           console.log("File compressed successfully.");
//           next(); 
//         });
//     } else {
//       next(); // If file is not appFile or size is within limit, continue with next middleware
//     }
//   };

//   return { upload, compressIfNeeded };
// };

// module.exports = createMulterInstance;
