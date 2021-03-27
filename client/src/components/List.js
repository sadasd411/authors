import React,{useEffect,useState} from 'react'
import{Link,navigate, Router} from '@reach/router';
import axios from 'axios'

const ListAll = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);
    useEffect(() =>{
        axios.get("http://localhost:8000/api/author")
        .then((res) =>{
            console.log(res.data);
            setAllAuthors(res.data);
        })
        .catch((err) =>
        console.log(err));
    },[]);
    const deleteAuthor = (authorId) =>{
        axios.delete("http://localhost:8000/api/author/" + authorId)
        .then((res) => {
            console.log(res.data);
            const remaining = allAuthors.filter((author) => author._id !== authorId);
            setAllAuthors(remaining);
        })
        .catch((err) => console.log(err) )
    }
    return(
        
        <div>
            <p><Link to ={"/author"}>Add an author</Link></p>
            <p>We have quotes by:</p>
            <div>
                <table>
                    <thead>
                    <th>Author </th>
                    <th>Actions avaiable</th>
                    </thead>
                    <tbody>
                    { allAuthors.map((author,index) => (
                        <tr>
                            <td>
                             {/* <Link to ={`/author/${author._id}`}>{author.name}</Link> */}
                             {author.name}
                             </td>
                            <td>
                            <button><Link to ={`/author/${author._id}`}>Edit</Link></button>
                            <button onClick ={() => deleteAuthor(author._id)}>Delete</button>
                            </td>
                        </tr>
                ))}
                            
                    </tbody>
               
                
                  </table>
            </div>
        </div>)
}
export default ListAll;