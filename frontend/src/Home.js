import { useState } from 'react'
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'First Blog', body: 'This is the first blog post.', author: 'mohamed', id: 1},
        {title: 'Second Blog', body: 'This is the second blog post.', author: 'seif', id: 2},
        {title: 'Third Blog', body: 'This is the third blog post.', author: 'islem', id: 3}
    ])
    return ( 
        <div className="home">
            <BlogList blogsBs7Mbdla={blogs} />
            <BlogList blogsBs7Mbdla={blogs.filter((blog3) => blog3.author === 'islem')} />
        </div>
    );
}
 
export default Home;