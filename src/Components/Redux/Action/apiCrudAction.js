import axios from "axios"
import { SUCCESS } from "../type"

export const getStudentData = () => {
    return (dispatch) => {
        axios.get('https://student-api.mycodelibraries.com/api/student/get').then((res) => {
            dispatch({
                type: SUCCESS,
                data: res?.data?.data
            })
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const addStudentData = (obj) => {
    return (dispatch) => {
        axios.post('https://student-api.mycodelibraries.com/api/student/add', obj).then((res) => {
            dispatch(getStudentData());
        })
    }
}
export const deleteStudentData = (id) => {
    return (dispatch) => {
        axios.delete(`https://student-api.mycodelibraries.com/api/student/delete?id=${id}`).then(() => {
            dispatch(getStudentData());
        })
    }
}
export const updateStudentData = (obj) => {
    return (dispatch) => {
        axios.post('https://student-api.mycodelibraries.com/api/student/update', obj).then((res) => {
            dispatch(getStudentData());
        })
    }
}