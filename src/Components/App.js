import {useState} from "react";
import axios from "axios";


function App() {

  const [posts,setPosts] = useState([]);
  const getAllPosts = () =>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>
    setPosts(response.data)
    )
  
  }
  return <div>
      <button 
      onClick={getAllPosts}>Get Data</button>
    {
     posts.map((posts,index) =>(
      <div className="item-parent">
        <div className="item">
          <p>{posts.title}</p>
          <h4>{posts.body}</h4>
         
        
           </div>

      </div>
     ))
    }

    </div>

}

export default App;
