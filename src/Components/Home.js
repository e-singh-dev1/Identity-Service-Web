import {React,  useState,useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () =>{
    const[userData ,setUserData] = useState([]);
    const[err,setError] = useState("");
    const getData =  async() =>{
        try{
        const response = await axios.get('https://localhost:7197/api/Users/Get_All_Users');
        setUserData(response.data);
        }
        catch(err){
            setError(err.message);
        }
    }

    useEffect(() =>{
        getData();
    },[])
   
    return(
        <>
        <h1 className='home-title'>Identity Service Web</h1>
        <div className='home-container'>
        <h2> User Data</h2>
         </div>
         <div className='home-table'>
         <table>
            <thead>
            <tr>
                <th>UserGuid</th>
                <th>UserName</th>
                <th>RoleName</th>
                <th>RoleId</th>
                <th>AplId</th>
                
            </tr>
            </thead>
            
            {userData.map((userDatas) => 
                
                   <tbody>
             <tr key={userDatas.userGuid}>
              <td>{userDatas.userGuid}</td>
              <td>{userDatas.userName}</td>
              <td>{userDatas.roleName}</td>
              <td>{userDatas.roleId}</td>
              <td>{userDatas.aplId}</td>
              <td><button className='update-button'><b>Update</b></button></td>
              <td><button className='delete-button'><b>Delete</b></button></td>

              
             </tr>
             </tbody>)
            } 
         </table>
         </div>
        <Link to='/Create'>
         <div className='button-container'>
         <button className='create-button'>
          Add User
         </button>
         </div>
         </Link>
         </>
    );
};
export default Home;
