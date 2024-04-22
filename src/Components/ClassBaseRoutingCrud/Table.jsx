import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Table extends Component {
    constructor(){
        super();
        this.state = {
            ary: JSON.parse(localStorage.getItem("ary")) || []
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(i){
        this.state.ary?.splice(i, 1);
        this.setState({ary: [...this.state.ary]})
        localStorage.setItem("ary", JSON.stringify(this.state.ary))
    }

  render() {
    return (
      <>
        <div className='text-center'>
          <Link className='btn btn-warning' to={"/form"}>Form</Link>  
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
                this.state.ary?.map((x,i) => {
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
                        <Link className='btn btn-warning me-2' to={`/form/${x?.id}`}>Edit</Link>  
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

export default Table
