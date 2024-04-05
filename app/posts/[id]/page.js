import getPost from '@/lib/getPost';
import React from 'react';


export const generateMetadata = async ({ params }) => {

    const { id } = params;
    const post = await getPost(id)
    return {
        title: 'Posts || ' + post.title,
        description: post.description
    }
};

const PostPage = async ({ params }) => {

    const { id } = params;
    const post = await getPost(id)



    return (
        <div>
            <h3>title : {post.title}</h3>
            <h3>body : {post.body}</h3>
        </div>
    );
};

export default PostPage;