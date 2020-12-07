exports.register = (req, res, next) => {
  //membuat dummy response ketika orang masuk ke register
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  //struktur response yang akan diberikan kepada client
  const result = {
    message: "Register Success",
    data: {
      uid: 1,
      name: name,
      email: email,
    },
  };
  res.status(201).json(result);
};
