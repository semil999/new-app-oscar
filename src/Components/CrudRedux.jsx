import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, insertData, updateData } from './Redux/Action/crudAction';

const CrudRedux = () => {
    let blankObj = {id: 0, fname: '', lname: "", email: "", password: "", age: "", date: "", city: "", gender: "", hobby: []};
    const [obj, setObj] = useState({...blankObj});
    const [count, setCount] = useState(0);
    const ary = useSelector(state => state?.ary?.ary);
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        if(e.target.name == "hobby"){
            if(e.target.checked){
                // obj.hobby.push(e.target.value);
                obj.hobby = [...obj.hobby, e.target.value]
            }
            else{
                obj.hobby = obj.hobby.filter(x => x != e.target.value);
            }
        }
        else{
            obj[e.target.name] = e.target.value;
        }
        setObj({...obj});
    }

    const handleSubmit = () => {
      if(obj.id == 0){
        let num = count;
        num += 1;
        obj.id = num;
        setCount(num);
        dispatch(insertData(obj));
      }
      else{
        dispatch(updateData(obj))
      }
      setObj({...blankObj});
    }

    const handleDelete = (i) => {
        dispatch(deleteData(i))
    }

    const handleEdit = (x) => {
      setObj({...x})
    }

  return (
    <>
      <form action="" className='w-50 mx-auto mt-3 shadow-lg p-4'>
        <label className='w-100 pt-2'>First Name</label>
        <input type="text" name='fname' value={obj.fname} className='w-100' onChange={handleChange}/> <br />
        <label className='w-100 pt-2'>Last Name</label>
        <input type="text" name='lname' value={obj.lname} className='w-100' onChange={handleChange}/> <br />
        <label className='w-100 pt-2'>Email</label>
        <input type="email" name='email' value={obj.email} className='w-100' onChange={handleChange}/> <br />
        <label className='w-100 pt-2'>Password</label>
        <input type="password" name='password' value={obj.password} className='w-100' onChange={handleChange}/> <br />
        <label className='w-100 pt-2'>Date</label>
        <input type="date" name='date' className='w-100' value={obj.date} onChange={handleChange}/> <br />
        <label className='w-100 pt-2'>Age</label>
        <input type="number" name='age' className='w-100' value={obj.age} onChange={handleChange}/> <br />
        <label className='w-100 pt-2'>City</label>
        <input type="text" name='city' className='w-100' value={obj.city} onChange={handleChange}/> <br />

        <label className='w-100 pt-2'>Gender</label>
        <input type="radio" name='gender' value="Male" checked={obj.gender?.includes("Male")} className='' onChange={handleChange}/> Male
        <input type="radio" name='gender' value="Female" checked={obj.gender?.includes("Female")} className='ms-2' onChange={handleChange}/> Female <br />

        <label className='w-100 pt-2'>Hobbies</label>
        <input type="checkbox" name='hobby' value="Read" checked={obj.hobby?.includes("Read")} className='' onChange={handleChange}/> Read
        <input type="checkbox" name='hobby' value="Write" checked={obj.hobby?.includes("Write")} className='ms-2' onChange={handleChange}/> Write
        <input type="checkbox" name='hobby' value="Dance" checked={obj.hobby?.includes("Dance")} className='ms-2' onChange={handleChange}/> Dance <br />

        <button type='button' className='btn btn-success mt-3' onClick={handleSubmit}>Submit</button>
      </form>

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
                  <button className='btn btn-warning me-2' onClick={() => handleEdit(x)}>Edit</button>  
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

export default CrudRedux
