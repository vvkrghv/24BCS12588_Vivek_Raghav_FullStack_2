import React, { useContext } from 'react'
import UserContext from '../hooks/UserContext';
import useUser from '../hooks/useUser';

function StudentProfile() {

    const {user} = useUser();

  return (
    <>
    {user && 
    <div>
    <div>StudentProfile</div>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <h2>{user.program}</h2>
    </div>
    }
         
    </>
   
  )
}

export default StudentProfile