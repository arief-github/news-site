import Link from "next/link";
import { Card, Figure, Title, Excerpt } from "./PostCardStyle";
import {Post} from "../../shared/types";

interface PostCardProps {
    post: Post
}

export const PostCard = ({post}: PostCardProps) => {
    return (
        <Link href={`/post/${post.id}`} passHref>
            <Card>
                <Figure>
                    <img alt={post.title} src={post.image}/>
                </Figure>
                <Title>
                    {post.title}
                </Title>
                <Excerpt>
                    <p>
                        {post.lead}
                    </p>
                </Excerpt>
            </Card>
        </Link>
    )
}