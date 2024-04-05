import React from 'react';

export const metadata = {
    title: "Blog App || Blog Page",
    description: "This is blog page",
  };

const BlogLayout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default BlogLayout;