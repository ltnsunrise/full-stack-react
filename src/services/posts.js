import { Post } from '../db/models/post'

export async function createPost(postModel) {
  const post = new Post(postModel)
  return await post.save()
}

export async function getPosts(postModel) {
  const posts = await postModel.find()
  return posts
}

export async function getPostById(postModel, id) {
  const post = await postModel.findById(id)
  return post
}

export async function updatePostById(postModel, id, update) {
  const updatedPost = await postModel.findByIdAndUpdate(id, update, {
    new: true,
  })
  return updatedPost
}

export async function deletePostById(postModel, id) {
  const deletedPost = await postModel.findByIdAndDelete(id)
  return deletedPost
}
