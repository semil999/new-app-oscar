import React, { useState } from 'react'
import Table from './Table';

const Form2 = () => {
    let blankObj = {id: 0, email: "", password: "", age: "", date: "", hobby: []};
    const [obj, setObj] = useState({...blankObj});
    const [count, setCount] = useState(0);
    const [ary, setAry] = useState([]);
    
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
      }
      else{
        let index = ary?.findIndex(x => x.id == obj.id);
        ary?.splice(index, 1, obj);
      }
      setAry([...ary]);
      setObj({...blankObj});
    }

    const handleDelete = (id) => {
      // ary?.splice(i, 1);
      const newAry = ary?.filter(x => x.id != id);
      setAry([...newAry])
    }

    const handleEdit = (x) => {
      setObj({...x})
    }
  return (
    <>
      <form action="" className='w-100 mx-auto mt-3 shadow-lg p-4'>
        <label className='w-100 pt-2'>Email</label>
        <input type="email" name='email' value={obj.email} className='w-100' onChange={handleChange}/> <br />
        <label className='w-100 pt-2'>Password</label>
        <input type="password" name='password' value={obj.password} className='w-100' onChange={handleChange}/> <br />
        <label className='w-100 pt-2'>Date</label>
        <input type="date" name='date' className='w-100' value={obj.date} onChange={handleChange}/> <br />
        <label className='w-100 pt-2'>Age</label>
        <input type="number" name='age' className='w-100' value={obj.age} onChange={handleChange}/> <br />

        <label className='w-100 pt-2'>Hobbies</label>
        <input type="checkbox" name='hobby' value="Read" checked={obj.hobby?.includes("Read")} className='' onChange={handleChange}/> Read
        <input type="checkbox" name='hobby' value="Write" checked={obj.hobby?.includes("Write")} className='ms-2' onChange={handleChange}/> Write
        <input type="checkbox" name='hobby' value="Dance" checked={obj.hobby?.includes("Dance")} className='ms-2' onChange={handleChange}/> Dance <br />

        <button type='button' className='btn btn-success mt-3' onClick={handleSubmit}>Submit</button>
      </form>

      <Table ary={ary} heading={['id', 'email', 'password', 'date', 'age', 'hobby']} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  )
}

export default Form2
