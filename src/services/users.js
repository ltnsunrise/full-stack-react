import { User } from '../db/models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function createUser({ username, password }) {
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = new User({ username, password: hashedPassword })
  return await user.save()
}

export async function loginUser({ username, password }) {
  const user = await User.findOne({ username })
  if (!user) {
    throw new Error('User not found')
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    throw new Error('Invalid password')
  }

  // eslint-disable-next-line no-undef
  const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  })

  return token
}

export async function getUsers(userModel) {
  const users = await userModel.find()
  return users
}
export async function getUserById(userId) {
  return await User.findById(userId)
}

async function listUsers(
  query = {},
  { sortBy = 'createdAt', sortOrder = 'descending' } = {},
) {
  return await User.find(query).sort({ [sortBy]: sortOrder })
}

export async function listAllUsers(options) {
  return await listUsers({}, options)
}
export async function listUsersByAuthor(author, options) {
  return await listUsers({ author }, options)
}

export async function listUsersByTag(tags, options) {
  return await listUsers({ tags }, options)
}

export async function updateUser(userId, { username, password }) {
  return await User.findOneAndUpdate(
    { _id: userId },
    { $set: { username, password } },
    { new: true },
  )
}

export async function deleteUser(userId) {
  return await User.deleteOne({ _id: userId })
}
