import {useSelector} from "react-redux";
import {NextPage} from "next";
import { fetchPost, fetchComments } from "../../request";
import Loading from "../../components/Loading/Loading";
import {PostBody} from "../../components/Post/PostBody";
import {Comments} from "../../components/Comments";

import {
    PostState,
    UPDATE_POST_ACTION
} from "../../store/post";

import {
    CommentState,
    UPDATE_COMMENTS_ACTION
} from "../../store/comments";
import {State, store} from "../../store";

export const getServerSideProps = store.getServerSideProps(
    (store) => async ({params}) => {
        if (typeof params.id !== "string") {
            throw new Error("Unexpected Id")
        }

        const comments = await fetchComments(params.id);
        const post = await fetchPost(params.id);

        store.dispatch({type: UPDATE_POST_ACTION, post});
        store.dispatch({type: UPDATE_COMMENTS_ACTION, comments});

        return null
    }
)

const Post: NextPage = () => {
    const post = useSelector<State, PostState>(({post}) => post)
    const comments = useSelector<State, CommentState>(({comments}) => comments)

    if(!post) return <Loading/>

    return (
        <>
            <PostBody post={post}/>
            <Comments post={post.id} comments={comments}/>
        </>
    )
}

export default Post