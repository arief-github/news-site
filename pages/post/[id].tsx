import { useRouter } from "next/router";
import { Post as PostType } from "../../shared/types";
import { postPaths as paths } from "../../shared/staticPaths";
import {GetStaticProps} from "next";
import { fetchPost } from "../../api/post";
import Loading from "../../components/Loading/Loading";
import {PostBody} from "../../components/Post/PostBody";

type PostProps  = {
    post: PostType
}

// membuat SSG dengan export function getStaticProps
export const getStaticProps: GetStaticProps<PostProps> = async ({
    params
}) => {
    //jika id bukan bertipe string, maka tampilkan error "unexpected id"
    if(typeof params.id !== "string") throw new Error("Unexpected id");

    // simpan data post by id dengan melakukan fetch spesifik berdasarkan id
    const post = await fetchPost(params.id)

    // mengembalikan nilai sebuah post
    return { props: { post } }
};

export async function getStaticPaths() {
    return { paths, fallback: true }
}

const Post = ({ post }: PostProps) => {
  const router = useRouter();

  if(router.isFallback) return <Loading/>

   return <PostBody post={post}/>
}

export default Post