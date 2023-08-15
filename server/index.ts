import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Post } from '../shared/types';

const categories = require("./categories.json");
const posts = require("./posts.json");
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

app.listen(port, () => console.log(`Server is running on http://localhost:${port}!`));