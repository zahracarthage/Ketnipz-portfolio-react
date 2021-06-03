import React from 'react';
import Title from '../Components/Title';
import allBlogs from '../Components/allBlogs';

export default function Blogs() {

    return (

        <div >
         <div className="b-title">
         <Title title={'Blog ov Ketznip'} span={'Mi blog'} />

         </div>

         <div className="BlogsPage">

         {
        allBlogs.map((blog)=>{

            return  <div className="blog" key={blog.id}>
                <div className="blog-content">
                    <img src={blog.image} alt="blogimg"/>
                    <a href={blog.link} className="blog-link">
                        {blog.title}
                    </a>
                    
                </div>

            </div>

            })
            }
            
         </div>
         </div>
    )
}
