import getAllPost from '@/lib/getAllPost';
import Link from 'next/link'

const Pages = async () => {

    const posts = await getAllPost()

    return (
        <div>
            <h3>All posts</h3>
            {
                posts.map(post => <div key={post.id}>
                    <Link href={`/posts/${post.id}`} >
                    <h3>- {post.title}</h3>
                    </Link>
                </div>)
            }
        </div>
    );
};

export default Pages;