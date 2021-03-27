import React,{useEffect,useState} from 'react'
import{Link,navigate,Navigate} from '@reach/router';
import axios from 'axios'

const New = (props) => {
  
        const [name, setName] = useState("");
        const [errs, setErrs] = useState({});
     
    
      const  onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', {
            name
        })
        .then((res)=>{
            
            if(res.data.errors){
                console.log(res.data.errors)
                setErrs(res.data.errors);
            }
            else{
                console.log(res.data)
                navigate("/author");
            }
        })
        .catch(err=>console.log(err))
        }
    
        return(
            <div>
            <Link to ="/">
                <p>Home</p>
             </Link>
             <p>Add a new author</p>
            <form onSubmit = {onSubmitHandler}>
                <div>
                    <label>Name</label>
                    <input type = "text"  onChange={(e) => setName(e.target.value)}/>
                    {
                    errs.name ? 
                    <span>{errs.name.message}</span> :
                    null
                }
                </div>
                <div>
                    <button type = "Submit" >Submit</button>
                    <button onClick={() => navigate("/")}>Cancel</button>
                </div>
            </form>
            </div>
            )
    
}
export default New;

