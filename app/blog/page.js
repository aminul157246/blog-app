import React from 'react';

import Link from 'next/link';

const BlogPage = () => {


    const blogs = [
        {
            id: 1,
            title: 'blog-1',
            description: 'blog-1 description'
        },
        {
            id: 2,
            title: 'blog-2',
            description: 'blog-2 description'
        },
    ]


    return (
        <div>
            {
                blogs.map(blog => <div key={blog.id}>
                    <Link href={`blog/${blog.id}`}><h3>{blog.title}</h3></Link>

                </div>)
            }
        </div>
    );
};

export default BlogPage;