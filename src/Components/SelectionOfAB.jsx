import React, { useState } from 'react'

const SelectionOfAB = () => {
    const [ary, setAry] = useState([])
    const [value, setValue] = useState("")
    const [preValue, setPreValue] = useState("")

    const handleSubmit = () => {
        if(value && value != ""){
            if(value != preValue){
                ary.push([value])
            }
            else{
                ary[ary?.length - 1].push(value)
            }
        }
        setAry([...ary])
        setPreValue(value);
    }

  return (
    <>
        <div className='text-center pt-3'>
            <select value={value} onChange={(e) => setValue(e?.target?.value)} style={{width: "200px"}}>
                <option value="" selected>Select</option>
                <option value="A" selected>A</option>
                <option value="B" selected>B</option>
            </select>
            <button className='btn btn-success ms-2' onClick={handleSubmit}>Save</button>
            <div>
                <div className='w-25 mx-auto'>
                    <table className='table text-center'>
                        <thead></thead>
                        <tbody>
                            <tr>
                                {
                                    ary?.map(x => {
                                        return <td className='border-end'>
                                            {
                                                x?.map(e => {
                                                    return <tr className='mx-auto'>{e}</tr>
                                                })
                                            }
                                        </td>
                                    })
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default SelectionOfAB
