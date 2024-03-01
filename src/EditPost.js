import {useEffect,useContext,useState} from 'react';
import {useParams,Link} from 'react-router-dom';
import DataContext from "./Context/DataContext";
import { useHistory } from 'react-router-dom';
import api from './api/posts';
import {format} from 'date-fns';

const EditPost = () => {
    const [editTitle,setEditTitle]=useState('');
    const [editBody,setEditBody]=useState('');
    const history=useHistory();

    const {
        posts,setPosts}=useContext(DataContext);

    const {id}=useParams();
    const post=posts.find(post=>(post.id).toString()===id);
    useEffect(()=>{
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
        }

    },[post,setEditTitle,setEditBody])
    const handleEdit=async(id)=>{
        const datetime=format(new Date(),'MMMM dd,yyyy pp');
        const updatedPost={id,title:editTitle,datetime,body:editBody};
        try{
          const response=await api.put(`/posts/${id}.json`,updatedPost);
        //   const fetchedData=[];
        // for(let key in response.data){
        //     fetchedData.unshift({
        //         ...response.data[key],
        //         id:key
        //     })
        // }
        //   setPosts(posts.map(post=> post.id===id ? {fetchedData }:post));
          setEditTitle('');
          setEditBody('');
          history.push('/');
          window.location.reload();
        }catch(err){
          console.log(`Error: ${err.message}`);
        }
    
      }

  return (
    <main className="NewPost">
        {editTitle &&
            <>
                        <h2>Edit Post</h2>
                <form className="newPostForm" onSubmit={(e)=> e.preventDefault()}>
                    <label htmlFor="postTitle">Title:</label>
                    <input
                        id="postTitle"
                        type="text"
                        required
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <label htmlFor="postBody">Post:</label>
                    <textarea
                        id="postBody"
                        required 
                        value={editBody}
                        onChange={(e) => setEditBody(e.target.value)}
                    />
                    <button type="submit" onClick={()=>handleEdit(post.id)}>Submit</button>
                </form>
            </>
        }
        {!editTitle &&
            <>
                <h2>Post Not Found</h2>
                <p>Well Thats dissappointing.</p>
                <p>
                    <Link to="/">Visit Our Homepage</Link>
                </p>

            </>

        }
      </main>
  )
}

export default EditPost