import React, { Component } from 'react'

export class ClassBaseComp extends Component {
    constructor(){
        super();
        this.state = {
            obj: {id: 0, profile: "", fname: '', lname: "", email: "", password: "", age: "", date: "", city: "", gender: "", hobby: []},
            blankObj: {id: 0, profile: "", fname: '', lname: "", email: "", password: "", age: "", date: "", city: "", gender: "", hobby: []},
            count : 0,
            ary: []
        }
        console.log("constructor")

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.toBase64 = this.toBase64.bind(this);
    }

    async handleChange(e){
        if(e.target.name == "hobby"){
            if(e.target.checked){
                // obj.hobby.push(e.target.value);
                this.state.obj.hobby = [...this.state.obj.hobby, e.target.value]
            }
            else{
                this.state.obj.hobby = this.state.obj.hobby.filter(x => x != e.target.value);
            }
        }
        else if(e.target.name == "profile"){
            const file  = await this.toBase64(e.target.files[0])
            this.state.obj.profile = file;
        }
        else{
            this.state.obj[e.target.name] = e.target.value;
        }
        this.setState({obj: this.state.obj});
    }

    handleSubmit(){
      if(this.state.obj.id == 0){
        let num = this.state.count;
        num += 1;
        this.state.obj.id = num;
        this.setState({count: num});
        this.state.ary.push(this.state.obj);
      }
      else{
        let index = this.state.ary?.findIndex(x => x.id == this.state.obj.id);
        this.state.ary?.splice(index, 1, this.state.obj);
      }
      this.setState({ary: [...this.state.ary], obj: {...this.state.blankObj}})
    }

    handleDelete(i){
      this.state.ary?.splice(i, 1);
      this.setState({ary: [...this.state.ary]})
    }

    handleEdit(x){
        this.setState({obj: {...x}})
    }

    toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
    
    render() {
        console.log("render")
        return (
            <>
                <form action="" className='w-50 mx-auto mt-3 shadow-lg p-4'>
                    <label className='w-100 pt-2'>First Name</label>
                    <input type="text" name='fname' value={this.state.obj.fname} className='w-100' onChange={this.handleChange}/> <br />
                    <label className='w-100 pt-2'>Last Name</label>
                    <input type="text" name='lname' value={this.state.obj.lname} className='w-100' onChange={this.handleChange}/> <br />
                    <label className='w-100 pt-2'>Email</label>
                    <input type="email" name='email' value={this.state.obj.email} className='w-100' onChange={this.handleChange}/> <br />
                    <label className='w-100 pt-2'>Password</label>
                    <input type="password" name='password' value={this.state.obj.password} className='w-100' onChange={this.handleChange}/> <br />
                    <label className='w-100 pt-2'>Date</label>
                    <input type="date" name='date' className='w-100' value={this.state.obj.date} onChange={this.handleChange}/> <br />
                    <label className='w-100 pt-2'>Age</label>
                    <input type="number" name='age' className='w-100' value={this.state.obj.age} onChange={this.handleChange}/> <br />
                    <label className='w-100 pt-2'>City</label>
                    <input type="text" name='city' className='w-100' value={this.state.obj.city} onChange={this.handleChange}/> <br />
                    <label className='w-100 pt-2'>Profile</label>
                    <input type="file" name='profile' className='' onChange={this.handleChange}/> <br />

                    <label className='w-100 pt-2'>Gender</label>
                    <input type="radio" name='gender' value="Male" checked={this.state.obj.gender?.includes("Male")} className='' onChange={this.handleChange}/> Male
                    <input type="radio" name='gender' value="Female" checked={this.state.obj.gender?.includes("Female")} className='ms-2' onChange={this.handleChange}/> Female <br />

                    <label className='w-100 pt-2'>Hobbies</label>
                    <input type="checkbox" name='hobby' value="Read" checked={this.state.obj.hobby?.includes("Read")} className='' onChange={this.handleChange}/> Read
                    <input type="checkbox" name='hobby' value="Write" checked={this.state.obj.hobby?.includes("Write")} className='ms-2' onChange={this.handleChange}/> Write
                    <input type="checkbox" name='hobby' value="Dance" checked={this.state.obj.hobby?.includes("Dance")} className='ms-2' onChange={this.handleChange}/> Dance <br />

                    <button type='button' className='btn btn-success mt-3' onClick={this.handleSubmit}>Submit</button>
                </form>

                <table className='table mt-3'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Profile</th>
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
                        this.state.ary?.map((x,i) => {
                        return <tr key={i}>
                            <td>{x.id}</td>
                            <td><img src={x.profile} width={50} /></td>
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
                                <button className='btn btn-warning me-2' onClick={() => this.handleEdit(x)}>Edit</button>  
                                <button className='btn btn-danger' onClick={() => this.handleDelete(i)}>Delete</button>  
                            </td>
                        </tr>
                        })
                    }
                    </tbody>
                </table>
            </>
        )
    }
}

export default ClassBaseComp
