const { User } = require("../models");
const delateUser = async (req, res) => {
  const { params } = req;
  const delateUser = await User.destroy({ where: { id: params.id } });
  res.json({ content: delateUser });
};
const createUsers = async (req, res) => {
  console.log(req);
  const { body } = req;
  const users = await User.create({ ...body });
  res.json({ content: users });
};
const editUsers = async (req, res) => {
  console.log(req);
  const { body, params } = req;
  const user = await User.findOne({ where: { id: params.id } });
  const updateUser = await User.update(
    { ...user, ...body },
    { where: { id: params.id } }
  );
  res.json({ content: updateUser });
};
const getUser = async (req, res) => {
  const users = await User.findAll();
  res.json({ content: users });
};
module.exports = { getUser, createUsers, delateUser, editUsers };
