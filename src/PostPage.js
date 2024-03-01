import {useParams,Link} from 'react-router-dom';
import {useContext} from 'react';
import DataContext from "./Context/DataContext";
import api from './api/posts';
import { useHistory } from 'react-router-dom/';

const PostPage = () => {
  const {posts,setPosts}=useContext(DataContext);
  const {id}=useParams();
  const history=useHistory();
  const post=posts.find(post=>(post.id).toString()===id);
  
  const handleDelete=async(id)=>{
    try{
      console.log(typeof(id))
      await api.delete(`/posts/${id}.json`);
      const postsList=posts.filter(post=>post.id!==id);
      setPosts(postsList);
      history.push('/');
    }
    catch(err){
      console.log(`Error: ${err.message}`)
    }
  }
    return (
      <main className='PostPage'>
          <article className="post">
            {post && 
              <>
                <h2>{post.title}</h2>
                <p className="postDate">{post.datetime}</p>
                <p className='postBody'>{post.body}</p>
                <Link to={`/edit/${post.id}`}>
                  <button className='editButton'>Edit Post</button>
                </Link>
                
                <button className="deleteButton" onClick={()=>handleDelete(post.id)}>
                  Delete Post
                </button>
              </>
            }
            {!post && <>
              <h2>Post not Found</h2>
              <p>Well,thats disappointing</p>
              <p>
                <Link to="/">
                  Visit our Home Page 
                </Link>
              </p>
            </>}
          </article>
      </main>
    )
  }
  
  export default PostPage