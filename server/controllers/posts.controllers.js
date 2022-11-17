// handlers for post
// import modules
import PostMessage from "../modules/posts.module.js";
export const getPosts = async (req, res, next) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json({
      message: postMessage,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

// create post

export const createPost = async (req, res, next) => {
  const { title, message, creator, tags, selectedFile, likeCount, createdAt } =
    req.body;
  try {
    const post = await PostMessage.create({
      title,
      message,
      creator,
      tags,
      selectedFile,
      likeCount,
      createdAt,
    });
    res.status(200).json({
      message: post,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
