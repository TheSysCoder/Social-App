// all post routes here
import express from "express";

// import controller
import { getPosts, createPost } from "../controllers/posts.controllers.js";

const router = express.Router();

// get request
router.get("/", getPosts);

// get request
router.post("/", createPost);
export default router;
