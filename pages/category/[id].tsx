import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import {Post} from "../../shared/types";
import {fetchPosts} from "../../api/category";
import {Section} from "../../components/Section";
import Loading from "../../components/Loading/Loading";
import {categoryPaths as paths} from "../../shared/staticPaths";

type CategoryProps = {
    posts: Post[]
}

export const getStaticProps: GetStaticProps<CategoryProps> = async ({ params}) => {
    if (typeof params.id !== "string") throw new Error("Unexpected id")
    const posts = await fetchPosts(params.id)
    return {props: {posts}}
}

export async function getStaticPaths() {
    return {paths, fallback: true}
}

const Category = ({posts}: CategoryProps) => {
    const router = useRouter();

    if (router.isFallback) return <Loading/>
    return <Section title={String(router.query.id)} posts={posts}/>
};

export default Category;