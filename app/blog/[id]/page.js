import React from 'react';

import {notFound} from  'next/navigation'

const BlogDetails = ({ params }) => {

    const { id } = params;

    if(id === '3'){
        notFound()
    }

    return (
        <div>
            <h3>blog id : {id} </h3>
            {/* <h3>blog title : {title} </h3>
            <h3>blog des : {description} </h3> */}
        </div>
    );
};

export default BlogDetails;