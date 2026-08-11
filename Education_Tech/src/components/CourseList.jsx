import React, { useState } from 'react'
import StudentProfile from './StudentProfile'


function CourseList() {


    const courseData = [
        {
            name: "Reactjs",
            price: 199,
            status : false 
        },{
            name: "NodeJs",
            price: 200,
            status: false
        },{
            name: "UI/UX",
            price: 500,
            status: false
        }
    ]

    

  return (

   <>
   <div>CourseList</div>

    {
       courseData.map((data) => {

        const [isDone , setDone] = useState(data.status);

        const handleClick = () => {
            setDone(true);
        }

        return (
        <div style={{border : "1px solid black"}}>
            <h4>{data.name}</h4>
            <h5>{data.price}</h5>
            <button onClick={handleClick}>{!isDone ? "Not Enrolled" : "Enrolled"}</button>
        </div>
)
       }) 
    }
    <StudentProfile/>
   </> 
  )
}

export default CourseList