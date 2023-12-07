const userList = require("../models/UserListModel");

module.exports.getUser = async (req, res) => {
  const user = await userList.find();
  res.send(user);
};

module.exports.saveUser = async (req, res) => {
  const { name, type, email, phone, alternatPhone } = req.body;
  const user = await userList
    .create({ name, type, email, phone, alternatPhone })
    .then((data) => {
      console.log(data);
      res.send(data);
    });
  res.send(user);
};

module.exports.updateUser = async (req, res) => {
  console.log(req.body);

  const { _id, name, type, email, phone, alternatPhone } = req.body;
  console.log(name);

  const user = await userList
    .findByIdAndUpdate(_id, { name, type, email, phone, alternatPhone })
    .then(() => res.send("Updated Successfully..."))
    .catch((error) => console.log(error));
};

module.exports.deleteUser = async (req, res) => {
  const { _id } = req.body;
  const user = await userList
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((error) => console.log(error));
};
