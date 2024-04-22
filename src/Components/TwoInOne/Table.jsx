import React from 'react'

const Table = (props) => {
  return (
    <>
      <table className='table mt-3'>
        <thead>
            <tr>
                {
                    props?.heading?.map((x, i) => {
                        return <th key={"heading" + i}>{x}</th>
                    })
                }
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                props?.ary?.map((x,i) => {
                    return <tr>
                        {
                            props?.heading?.map((e) => {
                                return <td>{x[e]}</td>
                            })
                        }
                        <td>
                            <button className='btn btn-warning me-2' onClick={() => props?.handleEdit(x)}>Edit</button>
                            <button className='btn btn-danger' onClick={() => props?.handleDelete(x?.id)}>Delete</button>
                        </td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </>
  )
}

export default Table
