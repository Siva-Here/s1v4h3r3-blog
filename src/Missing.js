import {Link} from 'react-router-dom';
const Missing = () => {
    return (
      <main className='Missing'>
        <h2>Post not Found</h2>
      <p>Well,thats disappointing</p>
      <p>
        <Link to="/">
          Visit our Home Page 
        </Link>
      </p>

      </main>
      
    )
  }
  
  export default Missing