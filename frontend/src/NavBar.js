const NavBar = () => {
    return ( 
        <nav className='navbar'>
            <h1>My Website</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    marginLeft: '10px',
                    textDecoration: 'none'
                }}>New blog</a>
            </div>
        </nav>
     );
}
 
export default NavBar;