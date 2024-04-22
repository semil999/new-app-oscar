import { DELETE, INSERT, UPDATE } from "../type"

export const insertData = (obj) => {
    return (dispatch) => {
        dispatch({
            type: INSERT,
            obj: obj
        })
    }
}

export const deleteData = (i) => {
    return (dispatch) => {
        dispatch({
            type: DELETE,
            i: i
        })
    }
}

export const updateData = (obj) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE,
            obj: obj
        })
    }
}