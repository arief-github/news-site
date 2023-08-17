import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Post } from '../shared/types';

const categories = require("./categories.json");
const posts = require("./posts.json");
const comments = require("./comments.json");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 4000;

// tampilkan semua data posts
app.get("/posts", (_, res) => {
    return res.json(posts);
});

// tampilkan semua data categories
app.get("/categories", (_, res) => {
    return res.json(categories);
});

// tampilkan single data post
app.get("/posts/:id", (req, res) => {
    const postId = String(req.params.id);
    const post = posts.find(({ id }: Post) => String(id) === postId);
    return res.json(post);
});

// API filter category by Id
app.get("/categories/:id", (req, res) => {
    const { id } = req.params;
    const foundCategory = posts.filter(({ category }: Post) => category === id);
    const categoryPosts = [...foundCategory, ...foundCategory, ...foundCategory];
    return res.json(categoryPosts);
});

// API for querying comment
app.get("/comments/:post", (req, res) => {
    const postId = Number(req.params.post);
    const foundComment = comments.filter(({ post }) => post === postId);
    return res.json(foundComment);
});

// API for mutating comment
app.post("/posts/:id/comments", (req, res) => {
    const postId = Number(req.params.id)
    comments.push({
        id: comments.length + 1,
        author: req.body.name,
        content: req.body.comment,
        post: postId,
        time: "Less than minute ago"
    });

    return res.json(comments.filter(({ post }) => post === postId))
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}!`));