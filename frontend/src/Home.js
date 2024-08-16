import { useState, useEffect } from 'react'
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'First Blog', body: 'This is the first blog post.', author: 'mohamed', id: 1},
        {title: 'Second Blog', body: 'This is the second blog post.', author: 'seif', id: 2},
        {title: 'Third Blog', body: 'This is the third blog post.', author: 'islem', id: 3}
    ])

    
    
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs) 
    }

    // useEffect(() => {
    //     console.log('use effect')
    //     console.log(blogs)
    // },) // run in every render
    
    // useEffect(() => {
        //     console.log('use effect')
        //     console.log(blogs)
        // }, []) //only run in the first render 
        
        
    const [name, setName] = useState('it me mariooooooooooooooooo')

    useEffect(() => {
        console.log('use effect')
        console.log(name)
    }, [name]) //run every time the name changes

    return ( 
        <div className="home">
            <BlogList blogsBs7Mbdla={blogs} handleDelete={handleDelete} />
            {/* <BlogList blogsBs7Mbdla={blogs.filter((blog3) => blog3.author === 'islem')} handleDelete={handleDelete} /> */}
            <button onClick={() => setName('oh noooooo')}>change name</button>
        </div>
    );
}
 
export default Home;