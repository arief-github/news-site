import { useRouter } from "next/router";
import {Comment, Post as PostType} from "../../shared/types";
import { GetServerSideProps } from "next";
import { fetchPost } from "../../api/post";
import { fetchComments } from "../../api/comment";
import Loading from "../../components/Loading/Loading";
import {PostBody} from "../../components/Post/PostBody";
import {Comments} from "../../components/Comments";

type PostProps  = {
    post: PostType,
    comments: Comment[]
}

export const getServerSideProps: GetServerSideProps<PostProps> = async ({ params }) => {
    if(typeof params.id !== "string") throw new Error("Unexpected Id")
    const post = await fetchPost(params.id);
    const comments = await fetchComments(params.id);
    return { props: { post, comments } }
}

const Post = ({ post, comments }: PostProps) => {
  const router = useRouter();

  if(router.isFallback) return <Loading/>

   return (
       <>
        <PostBody post={post}/>
        <Comments post={post.id} comments={comments}/>
       </>
   )
}

export default Post