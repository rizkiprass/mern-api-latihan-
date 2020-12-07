const { validationResult } = require("express-validator");

exports.createBlogPost = (req, res, next) => {
  const title = req.body.title;
  // const image = req.body.image
  const body = req.body.body;

  //cek error
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Input value tidak sesuai");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }
  //struktur response yang akan diberikan kepada client
  const result = {
    message: "create Blog Post Success",
    data: {
      post_id: 1,
      title: "Title Blog",
      //   image: "imagefile.png",
      body: "Lorem",
      created_at: "12/06/2020",
      author: {
        uid: 1,
        name: "testing",
      },
    },
  };
  res.status(201).json(result);
};
