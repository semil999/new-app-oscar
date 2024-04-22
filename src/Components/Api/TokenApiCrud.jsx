import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TokenApiCrud = () => {
    let token = "10f1bd21ab3f1308ca20b95bc6c40b1ced5668791322cfdc2133ea929a6be255";

    let header = {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    }

    let blankObj = {id: 0, name: "", email: '', gender: "", status: ""};
    const [obj, setObj] = useState({...blankObj});
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        getStudentData();
    }, [])
    
    const getStudentData = () => {
        axios.get('https://gorest.co.in/public/v2/users', header).then((res) => {
            setStudentData([...res?.data]);
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleChange = (e) => {
        if(e.target.name == "hobbies"){
            if(e.target.checked){
                obj.hobbies = [...obj.hobbies, e.target.value]
            }
            else{
                obj.hobbies = obj.hobbies.filter(x => x != e.target.value);
            }
        }
        else{
            obj[e.target.name] = e.target.value;
        }
        setObj({...obj});
    }

    const handleSubmit = () => {
        if(obj.id == 0){
            axios.post('https://gorest.co.in/public/v2/users', obj , header).then((res) => {
              getStudentData();
            }).catch((err) => {
                console.log(err)
            })
        }
        else{
            axios.patch(`https://gorest.co.in/public/v2/users/${obj.id}`, obj, header).then((res) => {
              getStudentData();
            })
        }

      setObj({...blankObj})
    }

    const handleDelete = (id) => {
        axios.delete(`https://gorest.co.in/public/v2/users/${id}`, header).then(() => {
            getStudentData();
        })
    }
  
    const handleEdit = (x) => {
        setObj({...x})
    }

  return (
    <>
      <form action="" className='w-50 mx-auto mt-3 shadow-lg p-4'>
        <label className='w-100 pt-2'>First Name</label>
        <input type="text" name='name' value={obj.name} className='w-100' onChange={handleChange}/> <br />
        <label className='w-100 pt-2'>Email</label>
        <input type="email" name='email' value={obj.email} className='w-100' onChange={handleChange}/> <br />

        <label className='w-100 pt-2'>Gender</label>
        <input type="radio" name='gender' value="male" checked={obj.gender == "male" ? true : false} className='' onChange={handleChange}/> Male
        <input type="radio" name='gender' value="female" checked={obj.gender == "female" ? true : false} className='ms-2' onChange={handleChange}/> Female <br />

        <label className='w-100 pt-2'>Status</label>
        <input type="radio" name='status' value="active" checked={obj.status == "active" ? true : false} className='' onChange={handleChange}/> Active
        <input type="radio" name='status' value="inactive" checked={obj.status == "inactive" ? true : false} className='ms-2' onChange={handleChange}/> Inactive <br />

        <button type='button' className='btn btn-success mt-3' onClick={handleSubmit}>Submit</button>
      </form>

      <table className='table mt-3'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Gender</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                studentData?.map((x,i) => {
                return <tr key={i}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                    <td>{x.status}</td>
                    <td>{x.gender}</td>
                    <td>
                        <button className='btn btn-warning me-2' onClick={() => handleEdit(x)}>Edit</button>  
                        <button className='btn btn-danger' onClick={() => handleDelete(x.id)}>Delete</button>  
                    </td>
                </tr>
                })
            }
            </tbody>
        </table>
    </>
  )
}

export default TokenApiCrud
