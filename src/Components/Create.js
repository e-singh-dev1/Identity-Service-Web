import React from 'react';
import axios from 'axios';
import './Create.css'
import {useState,useEffect} from 'react';   

export default function Create() {
  const[uname,setUname] = useState("");
  const[rname,setRname] = useState("");
  const[rId,setRoleId] = useState("");
  const[aplId,setAplId] = useState("");
  const[hasActiveState,sethasActiveState] = useState(false);

  const header = {"Access-Control-Allow-Origin":"*"};
  
  const handleSubmit = async() =>{
  
   console.log('click');
    await axios({
     method:'post',
     url:"https://localhost:7197/api/Users/create_new_user",
     data:{
       userName:uname,
       roleName:rname,
       roleId:rId,
       aplId:aplId,
      hasActiveRole:hasActiveState
    },
      header:header
   }
   );
  };
  useEffect(()=> {
   handleSubmit();
  },[]);
  return (
    <>
    <h1 className='create-header'>
      Create a new entry
    </h1>
    <div className='create-form-container'>
    <div className='create-form'>
    <form>
      <label>User Name :</label>
      <input 
      type='text' 
      placeholder='Enter your username'  
      onChange={(e) => setUname(e.target.value)}
      required
      />
      </form>

      <form>
      <label>Role Name :</label>
      <input 
      type='text' 
      placeholder='Enter your role name' 
      onChange={(e) => setRname(e.target.value)}
      required
      />
      </form>

      <form>
      <label>Role Id :</label>
      <input  
      type='text' 
      placeholder='Enter your role id'    
      onChange={(e) => setRoleId(e.target.value)}
      required
      />
    </form>

    <form>
      <label>Apl Id :</label>
      <input 
      type='text'
       placeholder='Enter your apl id'    
       onChange={(e) => setAplId(e.target.value)} 
       required
       />
    </form>

    <form>
      <label>Has Active Role :</label>
      <input 
      type='text'
       placeholder='Enter true/false'    
       onChange={(e) => sethasActiveState((e.target.value).toLowerCase())}
       required 
       />
    </form>
    </div>
    </div>
    <div className='create-submit-button-container'>
     <button className='create-submit-button' onClick={handleSubmit} >
      Submit
     </button>
    </div>
    </>
  )
}
