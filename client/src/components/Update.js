import React,{useEffect,useState} from 'react'
import{Link,navigate,Navigate} from '@reach/router';
import axios from 'axios'

const Update = (props) => {
  
        const [name, setName] = useState("");
        
        console.log(props);
        
        useEffect(() => {
            axios.get("http://localhost:8000/api/author/" + props.id)
                .then(res =>{
                   console.log(res.data)
                   setName(res.data.name);
                } )
        }, [])
    
      const  onSubmitHandler = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + props.id, {
            name
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        }
    
        return(
            <div>
                 <Link to ="/">
                <p>Home</p>
             </Link>
             <p>Edit this author</p>
            <form onSubmit = {onSubmitHandler}>
                <div>
                    <label>Name</label>
                    <input type = "text"  value = {name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <button type = "Submit" >Submit</button> 
                    <button onClick={() => navigate("/")}>Cancel</button>

                </div>
            </form>
            
            </div>
            )
    
}
export default Update;