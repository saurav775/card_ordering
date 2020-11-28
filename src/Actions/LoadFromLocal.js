import  { LOAD_FROM_LOCAL } from './actionTypes'

const loadFromLocalAC = (data) => {
    return {
        type: LOAD_FROM_LOCAL,
        localData: data
    }
}

const loadFromLocal = () => dispatch => {
    const items = JSON.parse(localStorage.getItem("items"));
    dispatch(loadFromLocalAC(items))
}

export default loadFromLocal