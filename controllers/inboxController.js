const getInbox = (req, res) => {
  res.render("inbox", {
    title: "Inbox - chat app",
  });
};

module.exports = { getInbox };
