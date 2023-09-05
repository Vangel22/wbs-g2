const { Validator } = require("node-input-validator");

const AccountSignUp = {
  email: "required|email", //test@gmail.com
  password: "required|string",
  fullname: "required|string",
};

const AccountLogin = {
  email: "required|email",
  password: "required|string",
};

const AccountReset = {
  new_password: "required|string",
  old_password: "required|string",
  email: "required|email",
};

// validate(Account, req.body)

// const testObj = {
//   // ovoj objekt e vraten koga go povikuvame new Validator(data, schema)
//   data: {}, //req.body
//   schema: {}, // AccountSignUp, AccountLogin, AccountReset
//   check: function () {
//     if (error) {
//       return error;
//     }
//     //ako nema ne pravi nisto
//   },
//   // errors: this.check()
// };

const validate = async (data, schema) => {
  //Dokolku data i schema imaat isti klucevi funkcijata nema da vrati greska,
  //vo sprotivno ke vrati greska -> primer greska: Email field is mandotory -> field is required
  // data = { "email": "test@gmail.com", "password": "test" } -> req.body
  // schema = {
  //   email: "required|email", //test@gmail.com
  //   password: "required|string",
  // }; -> AccountSignUp, AccountLogin, AccountReset
  let v = new Validator(data, schema);
  let e = v.check(); // funkcijata v.check ke gi sporedi dvete polinja dali imaat isti klucevi
  if (!e) {
    throw {
      code: 400,
      error: v.errors,
    };
  }
};

module.exports = {
  AccountSignUp,
  AccountLogin,
  AccountReset,
  validate,
};
