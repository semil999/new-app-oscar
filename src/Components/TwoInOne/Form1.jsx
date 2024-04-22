import React, { useState } from 'react'
import Table from './Table';

const Form1 = () => {
    let blankObj = {id: 0, fname: '', lname: "", city: "", gender: ""};
    const [obj, setObj] = useState({...blankObj});
    const [count, setCount] = useState(0);
    const [ary, setAry] = useState([]);
    
    const handleChange = (e) => {
        obj[e.target.name] = e.target.value;
        setObj({...obj});
    }

    const handleSubmit = () => {
      if(obj.id == 0){
        let num = count;
        num += 1;
        obj.id = num;
        setCount(num);
        ary.push(obj);
      }
      else{
        let index = ary?.findIndex(x => x.id == obj.id);
        ary?.splice(index, 1, obj);
      }
      setAry([...ary]);
      setObj({...blankObj});
    }

    const handleDelete = (id) => {
      const newAry = ary?.filter(x => x.id != id);
      setAry([...newAry])
    }

    const handleEdit = (x) => {
      setObj({...x})
    }
  return (
    <>
      <form action="" className='w-100 mx-auto mt-3 shadow-lg p-4'>
        <label className='w-100 pt-2'>First Name</label>
        <input type="text" name='fname' value={obj.fname} className='w-100' onChange={handleChange}/> <br />
        <label className='w-100 pt-2'>Last Name</label>
        <input type="text" name='lname' value={obj.lname} className='w-100' onChange={handleChange}/> <br />
        <label className='w-100 pt-2'>City</label>
        <input type="text" name='city' className='w-100' value={obj.city} onChange={handleChange}/> <br />

        <label className='w-100 pt-2'>Gender</label>
        <input type="radio" name='gender' value="Male" checked={obj.gender?.includes("Male")} className='' onChange={handleChange}/> Male
        <input type="radio" name='gender' value="Female" checked={obj.gender?.includes("Female")} className='ms-2' onChange={handleChange}/> Female <br />

        <button type='button' className='btn btn-success mt-3' onClick={handleSubmit}>Submit</button>
      </form>

      <Table ary={ary} heading={['id', 'fname', 'lname', 'city', 'gender']} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  )
}

export default Form1
