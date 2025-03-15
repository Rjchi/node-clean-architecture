const users = [
  {
    id: 1,
    name: "Jee",
  },
  {
    id: 4,
    name: "Je333e",
  },
];

function getUser(id, callback) {
  const user = users.find((user) => user.id === id);

  if (!user) {
    return callback("USER NOT FOUNT WITH ID ", id);
  }

  return callback(null, user);
}

module.exports = {
  getUser,
};
