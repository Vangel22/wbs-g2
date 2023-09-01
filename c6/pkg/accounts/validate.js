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

const validate = async (data, schema) => {
  // data = { "email": "test@gmail.com", "password": "test" }
  // schema = {
  //   email: "required|email", //test@gmail.com
  //   password: "required|string",
  // };
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
