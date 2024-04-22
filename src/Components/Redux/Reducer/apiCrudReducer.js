import { SUCCESS } from "../type"

const initialState = {
    student: []
}

export const apiCrudReducer = (state = initialState, action) => {
    switch(action.type){
        case SUCCESS:
            return {
                student: action.data
            }

        default:
            return state
    }
}