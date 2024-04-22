import React from 'react'

const TableTask = () => {
    let array = [
        {"id":1,"fname":"1234","lname":"1234","email":"s@s.com","age":"44","date":"1997-11-21","gender":"Female", action: "x.email == 's@s.com'", color: "red"},
        {"id":2,"fname":"Carlos Sears","lname":"Aspen Talley","email":"cudizoz@mailinator.com","age":"41","date":"1980-12-23","gender":"Male", action: "x.age > 18", color: "green"},
        {"id":3,"fname":"Idola Gordon","lname":"Maisie Snow","email":"narydaqub@mailinator.com","age":"38","date":"2000-07-25","gender":"Female", action: "x.gender == 'Female'", color: "pink"},
        {"id":4,"fname":"Ronak","lname":"Alec Valdez","email":"puti@mailinator.com","age":"82","date":"1987-07-10","gender":"Female", action: "x.fname == 'Ronak'", color: "yellow"}
    ]
  return (
    <>
      <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Date</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
            {
                array?.map((x,i) => {
                    return <tr key={i}>
                        <td>{x.id}</td>
                        <td style={{backgroundColor: x.action.includes("x.fname") ? eval(x.action) ? x.color : "" : ""}}>{x.fname}</td>
                        <td>{x.lname}</td>
                        <td style={{backgroundColor: x.action.includes("x.email") ? eval(x.action) ? x.color : "" : ""}}>{x.email}</td>
                        <td style={{backgroundColor: x.action.includes("x.age") ? eval(x.action) ? x.color : "" : ""}}>{x.age}</td>
                        <td>{x.date}</td>
                        <td style={{backgroundColor: x.action.includes("x.gender") ? eval(x.action) ? x.color : "" : ""}}>{x.gender}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </>
  )
}

export default TableTask
