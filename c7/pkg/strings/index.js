// user_myidinMongo1234/66662222.jpg

//makeId(6)

// 3.6 => floor => 3
// 3.6 => ceil => 4

const makeId = (length) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; //52 karakteri
  let charLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charLength));
  }

  return result;
};

module.exports = makeId;
