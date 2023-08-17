import Link from "next/link";
import {Post} from "../../shared/types";
import {Title, Figure, Content, Meta} from "./PostBodyStyle";
import {Breadcrumbs} from "../Breadcrumbs/Breadcrumbs";

type PostBodyProps = {
    post: Post
};

export const PostBody = ({post}: PostBodyProps) => {
    return (
        <>
            <Title> {post.title} </Title>
            <Breadcrumbs post={post}/>
            <Figure>
                <img src={post.image} alt={post.title}/>
            </Figure>
            <Content dangerouslySetInnerHTML={{__html: post.content}}/>
            <Meta>
                <span>{post.date}</span>
                <span>&middot;</span>
                <Link href={`/category/${post.category}`}>
                    <a>{post.category}</a>
                </Link>
                <span>&middot;</span>
                <a href={post.source}>Source</a>
            </Meta>
        </>
    )
}