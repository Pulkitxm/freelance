import User from "../models/user.js";

export async function getUserByIdFromUsernameOrEmail(field) {
  return await User.findOne(
    { $or: [{ username: field }, { email: field }] },
    { _id: 1 }
  );
}

export async function createUser({ username, email, password }) {
  if (!username || !email || !password) {
    throw new Error("Please provide all fields");
  }
  const dbUser = await User.create({ username, email, password });
  return dbUser._id;
}

export async function getUserAnyByUsernameorEmail(field) {
  return await User.findOne(
    { $or: [{ username: field }, { email: field }] },
    { username: 1, email: 1, _id: 1, onBoarded: 1 }
  );
}

export async function getUserByUsernameorEmail(username, email) {
  return await User.findOne({ $or: [{ username }, { email }] }, { _id: 1 });
}

export async function getUserByUsernameAndEmail(username, email) {
  return await User.findOne({ $and: [{ username }, { email }] }, { _id: 1 });
}

export async function verifyUser(field, password) {
  const user = await User.findOne({
    $or: [{ username: field }, { email: field }],
  });
  return user.password === password ? user : null;
}

export async function getUserById(id) {
  return await User.findById(id, {
    username: 1,
    email: 1,
    _id: 0,
  });
}

export async function updateUserOnBoarded(id) {
  return await User.findByIdAndUpdate(id, { onBoarded: true });
}
