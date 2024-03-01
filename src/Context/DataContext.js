import { createContext,useState,useEffect } from "react";
import useAxiosFetch from '../hooks/useAxiosFetch';
const DataContext=createContext({});
export const DataProvider=({children})=>{
    const [posts,setPosts]=useState([])
    const [search,setSearch]=useState('');
    const [searchResults,setSearchResults]=useState([]);
    const {data,fetchError,isLoading}=useAxiosFetch('https://s1v4h3r3-default-rtdb.firebaseio.com/posts.json')
    useEffect(()=>{
        setPosts(data);
    },[data])
    useEffect(()=>{
        const filteredResults=posts.filter(post=>((post.body).toLowerCase()).includes(search.toLowerCase())
        || ((post.title).toLowerCase()).includes(search.toLowerCase())
        );
        setSearchResults(filteredResults);

    },[posts,search])
    
    return(  
        <DataContext.Provider value={{
           search,setSearch,
            searchResults,fetchError,isLoading,
            posts,setPosts
        }}>
                {children}
        </DataContext.Provider>
    )
}
export default DataContext;