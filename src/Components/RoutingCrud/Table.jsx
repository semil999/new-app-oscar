import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Table = () => {
    const [ary, setAry] = useState(JSON.parse(localStorage.getItem("ary")) || []);

    const handleDelete = (i) => {
        ary?.splice(i, 1);
        localStorage.setItem("ary", JSON.stringify(ary))
        setAry([...ary])
      }
  return (
    <>
        <div className='text-center'>
            <Link className='btn btn-danger' to={"/form"}>Form</Link>
        </div>
        <table className='table mt-3'>
            <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Date</th>
                <th>City</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Hobbies</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                ary?.map((x,i) => {
                return <tr key={i}>
                    <td>{x.id}</td>
                    <td>{x.fname}</td>
                    <td>{x.lname}</td>
                    <td>{x.email}</td>
                    <td>{x.password}</td>
                    <td>{x.date}</td>
                    <td>{x.city}</td>
                    <td>{x.age}</td>
                    <td>{x.gender}</td>
                    <td>{x.hobby?.join(", ")}</td>
                    <td>
                    <Link className='btn btn-warning me-2' to={`/form/${x.id}`}>Edit</Link>  
                    <button className='btn btn-danger' onClick={() => handleDelete(i)}>Delete</button>  
                    </td>
                </tr>
                })
            }
            </tbody>
        </table> 
    </>
  )
}

export default Table
