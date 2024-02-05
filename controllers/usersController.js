const getUsers = (req, res) => {
  res.render("users", {
    title: "Users - chat app",
  });
};

module.exports = { getUsers };
