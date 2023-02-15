import { useState, useEffect } from 'react'
import axios from 'axios';

import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

import './App.css'

function App() {
  
  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState();
  const [isOpen,setIsOpen] = useState(false);

  console.log(updateInfo);


  const getAllUsers = () =>{
    const url = 'http://users-crud.academlo.tech/users/'
    axios.get(url)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  /*useEffect( ( ) =>{
    getAllUsers()
  },[])*/

  const createNewUser = (data) =>{
    const url = 'http://users-crud.academlo.tech/users/'; 
    axios.post(url, data)
      .then(res => {
        //console.log(res.data)
        getAllUsers();
        })
      .catch()
  }

  const deleteUserById = (id) =>{
    const url = `http://users-crud.academlo.tech/users/${id}/`; 

    axios.delete(url)
      .then(res => {
        console.log(res.data);
        getAllUsers();
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) =>{
    const url = `http://users-crud.academlo.tech/users/${id}/`; 
    axios.put(url, data)
      .then ( res => {
        console.log(res.data);
        getAllUsers();
        setUpdateInfo();
      })
      .catch(err => console.log(err))
  }

  useEffect(()=>{
    getAllUsers()
    },[])


  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);


  return (
    <div className="App">
      <div className ="app__title-container">
        <h1 className ="app__title" >Users</h1>
        <button onClick = {handleOpen} className="app__btn-add btn"><i class="bi bi-person-plus app__btn-icon"></i>Add User</button>
      </div>
      <div className ={`app__form ${isOpen &&'app__form-visible'}`}>
        
      
      <FormUser
        createNewUser = {createNewUser}
        updateUserById = {updateUserById}
        updateInfo = {updateInfo}
        handleClose = {handleClose}
        setUpdateInfo = {setUpdateInfo}
      />
      </div>
      <div className="users__container">

        {

          users?.map(user =>(
            <UserCard
              setUpdateInfo = {setUpdateInfo}
              key = {user.id}
              user = {user}
              deleteUserById = {deleteUserById}
              handleOpen = {handleOpen}
              
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
