import { useState } from 'react'


const Home = () => {
    // let name = 'mario'
    const [name, setName] = useState('mario')


    const handleClick = () => {
        setName('seif')
        
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;