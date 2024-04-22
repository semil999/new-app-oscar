import { MINUS, PLUS } from "../type"

export const countPlus = () => {
    return (dispatch) => {
        dispatch({
            type: PLUS
        })
    }
}

export const countMinus = () => {
    return (dispatch) => {
        dispatch({
            type: MINUS
        })
    }
}