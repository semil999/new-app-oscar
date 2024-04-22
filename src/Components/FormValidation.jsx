import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
// import data from "./../data.json"

const FormValidation = () => {
    let blankObj = {id: 0, fname: '', lname: "", email: "", password: "", age: "", date: "", city: "", gender: "", hobby: []};
    const [obj, setObj] = useState({...blankObj});
    const [error, setError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
      if(isSubmit && Object.keys(error)?.length == 0){
        finalSubmit();
      }
    }, [error])
    
    const handleChange = (e) => {
        if(e.target.name == "hobby"){
            if(e.target.checked){
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

    const validation = (inputValue) => {
        let err = {};
        if(inputValue.fname == ""){
            err.fname = "This Field is Required"
        }
        if(inputValue.lname == ""){
            err.lname = "This Field is Required"
        }
        if(inputValue.email == ""){
            err.email = "This Field is Required"
        }

        if(inputValue.password == ""){
            err.password = "This Field is Required"
        }
        else if(inputValue.password?.length <= 8){
            err.password = "Password must be greater than 8 characters"
        }

        if(inputValue.age == ""){
            err.age = "This Field is Required"
        }
        else if(inputValue.age < 18){
            err.age = "Only 18 or above age is Required"
        }

        return err
    }

    const handleSubmit = () => {
      setError(validation(obj));
      setIsSubmit(true);
    }

    const finalSubmit = () => {
        console.log(obj, "finalSubmit")
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
        setIsSubmit(false);
    }

  return (
    <div>
      <form action="" className='w-50 mx-auto mt-3 shadow-lg p-4'>
        <div>
            <label className='w-100 pt-2'>First Name</label>
            <input type="text" name='fname' value={obj.fname} className='w-100' onChange={handleChange}/> <br />
            <div>
                {error?.fname && (
                    <span className='text-danger'>{error?.fname}</span>
                )}
            </div>
        </div>
        <label className='w-100 pt-2'>Last Name</label>
        <input type="text" name='lname' value={obj.lname} className='w-100' onChange={handleChange}/> <br />
            <div>
                {error?.lname && (
                    <span className='text-danger'>{error?.lname}</span>
                )}
            </div>
        <label className='w-100 pt-2'>Email</label>
        <input type="email" name='email' value={obj.email} className='w-100' onChange={handleChange}/> <br />
        <div>
                {error?.email && (
                    <span className='text-danger'>{error?.email}</span>
                )}
            </div>
        <label className='w-100 pt-2'>Password</label>
        <input type="password" name='password' value={obj.password} className='w-100' onChange={handleChange}/> <br />
        <div>
                {error?.password && (
                    <span className='text-danger'>{error?.password}</span>
                )}
            </div>
        <label className='w-100 pt-2'>Date</label>
        <input type="date" name='date' className='w-100' value={obj.date} onChange={handleChange}/> <br />
        <label className='w-100 pt-2'>Age</label>
        <input type="number" name='age' className='w-100' value={obj.age} onChange={handleChange}/> <br />
        <div>
                {error?.age && (
                    <span className='text-danger'>{error?.age}</span>
                )}
            </div>
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
    </div>
  )
}

export default FormValidation
