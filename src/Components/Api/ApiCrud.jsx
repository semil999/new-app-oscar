import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiCrud = () => {
    let blankObj = {_id: 0, firstName: "", lastName: '', hobbies: [], gender: "", city: "", age: ""};
    const [obj, setObj] = useState({...blankObj});
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        getStudentData();
    }, [])
    
    const getStudentData = () => {
        axios.get('https://student-api.mycodelibraries.com/api/student/get').then((res) => {
            setStudentData([...res?.data?.data]);
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
        if(obj._id == 0){
            axios.post('https://student-api.mycodelibraries.com/api/student/add', obj).then((res) => {
              getStudentData();
            })
        }
        else{
            obj.id = obj._id;
            axios.post('https://student-api.mycodelibraries.com/api/student/update', obj).then((res) => {
              getStudentData();
            })
        }

      setObj({...blankObj})
    }

    const handleDelete = (id) => {
        axios.delete(`https://student-api.mycodelibraries.com/api/student/delete?id=${id}`).then(() => {
            getStudentData();
        })
    }
  
    const handleEdit = (x) => {
        let editObj = {...x};
        editObj.hobbies = editObj?.hobbies?.split(",")
        setObj({...editObj})
    }

  return (
    <>
      <form action="" className='w-50 mx-auto mt-3 shadow-lg p-4'>
        <label className='w-100 pt-2'>First Name</label>
        <input type="text" name='firstName' value={obj.firstName} className='w-100' onChange={handleChange}/> <br />
        <label className='w-100 pt-2'>Last Name</label>
        <input type="text" name='lastName' value={obj.lastName} className='w-100' onChange={handleChange}/> <br />
        <label className='w-100 pt-2'>Age</label>
        <input type="number" name='age' className='w-100' value={obj.age} onChange={handleChange}/> <br />
        <label className='w-100 pt-2'>City</label>
        <input type="text" name='city' className='w-100' value={obj.city} onChange={handleChange}/> <br />

        <label className='w-100 pt-2'>Gender</label>
        <input type="radio" name='gender' value="Male" checked={obj.gender?.includes("Male")} className='' onChange={handleChange}/> Male
        <input type="radio" name='gender' value="Female" checked={obj.gender?.includes("Female")} className='ms-2' onChange={handleChange}/> Female <br />

        <label className='w-100 pt-2'>Hobbies</label>
        <input type="checkbox" name='hobbies' value="Read" checked={obj.hobbies?.includes("Read")} className='' onChange={handleChange}/> Read
        <input type="checkbox" name='hobbies' value="Write" checked={obj.hobbies?.includes("Write")} className='ms-2' onChange={handleChange}/> Write
        <input type="checkbox" name='hobbies' value="Dance" checked={obj.hobbies?.includes("Dance")} className='ms-2' onChange={handleChange}/> Dance <br />

        <button type='button' className='btn btn-success mt-3' onClick={handleSubmit}>Submit</button>
      </form>

      <table className='table mt-3'>
            <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>City</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Hobbies</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                studentData?.map((x,i) => {
                return <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{x.firstName}</td>
                    <td>{x.lastName}</td>
                    <td>{x.city}</td>
                    <td>{x.age}</td>
                    <td>{x.gender}</td>
                    <td>{x.hobbies}</td>
                    <td>
                        <button className='btn btn-warning me-2' onClick={() => handleEdit(x)}>Edit</button>  
                        <button className='btn btn-danger' onClick={() => handleDelete(x._id)}>Delete</button>  
                    </td>
                </tr>
                })
            }
            </tbody>
        </table>
    </>
  )
}

export default ApiCrud
