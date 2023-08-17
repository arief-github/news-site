import Link from "next/link";
import Image from "next/image";
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
                    <Image
                        alt={post.title}
                        src={post.image}
                        loading="lazy"
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="center"
                        width={320}
                        height={180}
                        sizes="(min-width: 1000px) 320px, 100vw"
                    />
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