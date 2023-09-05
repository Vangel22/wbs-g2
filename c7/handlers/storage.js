const fs = require("fs");

const makeId = require("../pkg/strings");

// 1 byte = 8 bits
// 1 KB = 1024 bytes
// 1 MB = 1024 KB
// 1 GB = 1024 MB

const MAX_FILESIZE = 1048576; // 1024 * 1024 = 1MB
const ALLOWED_FILETYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/pjpeg",
];

const upload = (req, res) => {
  //req.files -> contains files
  if (MAX_FILESIZE < req.files.document.size) {
    return res.status(400).send("File exceeds max file size!");
  }
  if (!ALLOWED_FILETYPES.includes(req.files.document.mimetype)) {
    return res.status(400).send("File type is not allowed");
  }

  const userDir = `user_${req.auth.id}`; // vnatre vo uploads folderot
  const userDirPath = `${__dirname}/../uploads/${userDir}`; // patekata do toj folder na korisnikot

  if (!fs.existsSync(userDirPath)) {
    //dokolku ne postoi toj folder na korisnikot
    fs.mkdirSync(userDirPath); // kreiraj go
  }

  const fileName = `${makeId(6)}_${req.files.document.name}`;
  const filePath = `${userDirPath}/${fileName}`;
  // filePath = uploads/user_12345/Random_me.jpeg

  req.files.document.mv(filePath, (err) => {
    if (err) {
      return res.status(500).send("Internal Server Error!");
    }
    return res.status(200).send({ file_name: fileName });
  });
};

const download = async (req, res) => {
  const userDir = `user_${req.auth.id}`;
  const userDirPath = `${__dirname}/../uploads/${userDir}`;
  const filePath = `${userDirPath}/${req.params.filename}`;

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found!");
  }

  res.download(filePath);
};

// listFiles
const listFiles = async (req, res) => {
  // Od koj direktorium sakam da procitam
  // Ako direktorium ima fajlovi izlistaj gi
  // Dali userDir postoi
  // Dali userDirPath postoi -> dokolku ne korisnikot nema uploads
  // fs.readdirSync(userDirPath)
  //   res.status(200).send({ msg: "Uploaded files", files })

  const userDir = `user_${req.auth.id}`;
  const userDirPath = `${__dirname}/../uploads/${userDir}`;

  if (!fs.existsSync(userDirPath)) {
    return res.status(400).send("You don't have any uploads yet!");
  }

  const files = fs.readdirSync(userDirPath);
  return res.status(200).send(files);
};

// removeFiles
const removeFiles = async (req, res) => {
  // Proverka dali postoi nekoj direktorium vo uploads
  // Dokolku postoi daj mi ja patekata
  // Dali ima fajlovi vo toj direktorium
  // Bonus -> dokolku nema fajlovi posle brisenjeto na fajlot izbrisi go i direktoriumot
  // Hint: filename kako req.param
  // rezultat treba da bide imeto na izbrisaniot fajl, i dokolku se izbrise direktoriumot i negovoto ime
};

module.exports = {
  upload,
  download,
  listFiles,
};

// req.files -> body
// document: {
//     name: 'me.jpeg',
//     data: <Buffer ff d8 ff db 00 84 00 08 06 06 07 06 05 08 07 07 07 09 09 08 0a 0c 14 0d 0c 0b 0b 0c 19 12 13 0f 14 1d 1a 1f 1e 1d 1a 1c 1c 20 24 2e 27 20 22 2c 23 1c ... 17997 more bytes>,
//     size: 18047,
//     encoding: '7bit',
//     tempFilePath: '',
//     truncated: false,
//     mimetype: 'image/jpeg',
//     md5: '70403f7f48e9ab6c945e9705a84a9ba8',
//     mv: [Function: mv]
//   }
