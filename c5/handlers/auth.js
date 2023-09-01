const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
  validate,
  AccountSignUp,
  AccountLogin,
} = require("../pkg/accounts/validate");
const accounts = require("../pkg/accounts");
const config = require("../pkg/config");

const login = async (req, res) => {
  try {
    await validate(req.body, AccountLogin);
    // await validate(req.body, { "email": "required|email" })
    const { email, password } = req.body;

    const account = await accounts.getByEmail(email);

    if (!account) {
      return res.status(400).send("Account not found!");
    }
    //new123 - ova e mojot password
    // $2a$10$nkIHp8doTPioAZuUnF7cx.6YJ3MxjLIMhpUUfdsSGwFfQJ5zDkfgK - ova e mojot password so pomos na bcrypt,
    // mi ovozmozuva da ne bide razbirliv za lugjeto, me zastituva od hakiranje

    //bcrypt.compareSync("new123", $2a$10$nkIHp8doTPioAZuUnF7cx.6YJ3MxjLIMhpUUfdsSGwFfQJ5zDkfgK)
    // new123 ke proba so hash funkcija da go napravi nerazbirlivo za nas lugjeto
    // new123 = $2a$10$nkIHp8doTPioAZuUnF7cx.6YJ3MxjLIMhpUUfdsSGwFfQJ5zDkfgK , I ako se sovpaga so vtoriot argument
    // vo ovoj slucaj account.password togas ke vrati true
    if (!bcrypt.compareSync(password, account.password)) {
      return res.status(400).send("Incorrect password!");
    }
    const payload = {
      fullname: account.fullname,
      email: account.email,
      id: account._id,
      exp: new Date().getTime() / 1000 + 7 * 24 * 60 * 60, //7 days in the future
    };
    // Pocnuva od 1 Januari 1970 - vo milisekundi
    // deleno so 1000 - znaci pretvarame vo sekundi
    // 7 * 24 * 60 * 60 - sekundi vo 7 denovi - 86400sek vo den * 7

    const token = jwt.sign(payload, config.getSection("development").jwt);
    return res.status(200).send(token);
  } catch (err) {
    console.error(err);
    return res.status(err.status).send(err.error);
  }
};

const register = async (req, res) => {
  try {
    await validate(req.body, AccountSignUp);
    const exists = await account.getByEmail(req.body.email);
    if (exists) {
      return res.status(400).send("Account with this email already exists!");
    }
    req.body.password = bcrypt.hashSync(req.body.password);
    const acc = await account.create(req.body);
    return res.status(201).send(acc);
  } catch (err) {
    console.log(err);
    return res.status(err.status).send(err.error);
  }
};

const refreshToken = async (req, res) => {};

const forgotPassword = async (req, res) => {};

const resetPassword = async (req, res) => {
  // korisnikot si go znae svojot password i pobaruva da bide promenet
  // proverete go stariot password dali e ist so noviot
  // old password - req.body.old_password
  // new password - req.body.new_password
  // Incorrect password
  // New password cannot be old password
  // ako prethodnite proverki se uspesni povikaj ja setNewPassword
};

module.exports = {
  login,
  register,
  forgotPassword,
  resetPassword,
  refreshToken,
};
