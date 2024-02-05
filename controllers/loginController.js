const getLogin = (req, res) => {
  res.render("index", {
    title: "Login - chat app",
  });
};

module.exports = { getLogin };
