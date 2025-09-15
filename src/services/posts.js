import { Post } from '../db/models/post.js'

export async function createPost(postModel) {
  const post = new Post(postModel)
  return await post.save()
}

export async function getPosts(postModel) {
  const posts = await postModel.find()
  return posts
}
export async function getPostById(postId) {
  return await Post.findById(postId)
}

async function listPosts(
  query = {},
  { sortBy = 'createdAt', sortOrder = 'descending' } = {},
) {
  return await Post.find(query).sort({ [sortBy]: sortOrder })
}

export async function listAllPosts(options) {
  return await listPosts({}, options)
}
export async function listPostsByAuthor(author, options) {
  return await listPosts({ author }, options)
}

export async function listPostsByTag(tags, options) {
  return await listPosts({ tags }, options)
}
