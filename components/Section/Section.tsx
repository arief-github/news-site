import { PostCard } from "../Post";
import { Grid, Title, MoreLink } from "./style";
import {Post} from "../../shared/types";
import Link from "next/link";

type SectionProps = {
    title: String,
    posts: Post[],
    isCompact?: boolean
};

export const Section = ({ title, posts, isCompact = false }: SectionProps) => {
    return (
        <section>
            <Title>{title}</Title>
            <Grid>
                {
                    posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))
                }
            </Grid>
            {
                isCompact && (
                    <Link href={`category/${title}`} passHref>
                        <MoreLink>More in { title }</MoreLink>
                    </Link>
                )
            }
        </section>
    )
};