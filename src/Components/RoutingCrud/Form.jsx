import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Form = () => {
    let blankObj = {id: 0, profile: "", fname: '', lname: "", email: "", password: "", age: "", date: "", city: "", gender: "", hobby: []};
    const [obj, setObj] = useState({...blankObj});
    const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")) || 0);
    const [ary, setAry] = useState(JSON.parse(localStorage.getItem("ary")) || []);

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        if(id != undefined){
            let editObj = ary?.find(x => x.id == id);
            if(editObj != undefined){
                setObj({...editObj});
            }
        }
    }, [id])
    
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
        ary.push(obj);
        localStorage.setItem("count", JSON.stringify(num))
      }
      else{
        let index = ary?.findIndex(x => x.id == obj.id);
        ary?.splice(index, 1, obj);
      }
      localStorage.setItem("ary", JSON.stringify(ary))
      setAry([...ary]);
      setObj({...blankObj});
      navigate("/table")
    }

  return (
    <>
        <div className='text-center'>
            <Link className='btn btn-success' to={"/table"}>Table</Link>
        </div>
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
    </>
  )
}

export default Form
