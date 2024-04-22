import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from './withRouter';

export class Form extends Component {
    constructor(){
        super();
        this.state = {
            obj: {id: 0, profile: "", fname: '', lname: "", email: "", password: "", age: "", date: "", city: "", gender: "", hobby: []},
            blankObj: {id: 0, profile: "", fname: '', lname: "", email: "", password: "", age: "", date: "", city: "", gender: "", hobby: []},
            count : JSON.parse(localStorage.getItem("count")) || 0,
            ary: JSON.parse(localStorage.getItem("ary")) || []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);
    }

    static getDerivedStateFromProps (props, state){
        const id = props?.router?.params?.id;
        if(id != undefined){
            let editObj = state?.ary?.find(x => x?.id == id)
            if(editObj != undefined){
                return { obj : editObj }
            }
        }
        return true
    }

    async handleChange(e){
        console.log(e?.target?.value, 'e')
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
        localStorage.setItem("count", JSON.stringify(num))
      }
      else{
        let index = this.state.ary?.findIndex(x => x.id == this.state.obj.id);
        this.state.ary?.splice(index, 1, this.state.obj);
      }
      localStorage.setItem("ary", JSON.stringify(this.state.ary))
      this.setState({ary: [...this.state.ary], obj: {...this.state.blankObj}})
    }

  render() {
    return (
      <>
        <div className='text-center'>
          <Link className='btn btn-success' to={"/table"}>Table</Link>  
        </div>
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

            <label className='w-100 pt-2'>Gender</label>
            <input type="radio" name='gender' value="Male" checked={this.state.obj.gender?.includes("Male")} className='' onChange={this.handleChange}/> Male
            <input type="radio" name='gender' value="Female" checked={this.state.obj.gender?.includes("Female")} className='ms-2' onChange={this.handleChange}/> Female <br />

            <label className='w-100 pt-2'>Hobbies</label>
            <input type="checkbox" name='hobby' value="Read" checked={this.state.obj.hobby?.includes("Read")} className='' onChange={this.handleChange}/> Read
            <input type="checkbox" name='hobby' value="Write" checked={this.state.obj.hobby?.includes("Write")} className='ms-2' onChange={this.handleChange}/> Write
            <input type="checkbox" name='hobby' value="Dance" checked={this.state.obj.hobby?.includes("Dance")} className='ms-2' onChange={this.handleChange}/> Dance <br />

            <button type='button' className='btn btn-success mt-3' onClick={this.handleSubmit}>Submit</button>
        </form>
      </>
    )
  }
}

export default withRouter(Form)
