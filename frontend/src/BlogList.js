const BlogList = ({blogsBs7Mbdla, handleDelete}) => {

    return ( 
        <div className="blog-list">
            {blogsBs7Mbdla.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
