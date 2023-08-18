import type {NextApiRequest, NextApiResponse} from "next";
import type {Post} from "../../../shared/types";
import postsSource from '../../../server/posts.json';

export default function postHandler(
    req: NextApiRequest,
    res: NextApiResponse<Post>
) {
    const posts = postsSource as Post[];
    const postId = String(req.query.id);
    const post = posts.find(({id}: Post) => String(id) === postId)
    return res.status(200).json(post)
}