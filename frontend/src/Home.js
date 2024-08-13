import { useState } from 'react'


const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'First Blog', body: 'This is the first blog post.', author: 'mohamed', id: 1},
        {title: 'Second Blog', body: 'This is the second blog post.', author: 'seif', id: 2},
        {title: 'Third Blog', body: 'This is the third blog post.', author: 'islem', id: 3}
    ])
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>

                </div>
            ))}
        </div>
     );
}
 
export default Home;