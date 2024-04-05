import getAllPost from '@/lib/getAllPost';
import React from 'react';

const Pages = async () => {

    const posts = await getAllPost()
    console.log(posts);

    return (
        <div>
            <h3>All posts</h3>
            {
                posts.map(post => <div key={post.id}>
                    <h3>- {post.title}</h3>
                </div>)
            }
        </div>
    );
};

export default Pages;