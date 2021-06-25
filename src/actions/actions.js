import{ CHANGE_SEARCH_FIELD, 
        REQUEST_ROBOTS_PENDING, 
        REQUEST_ROBOTS_SUCCESS, 
        REQUEST_ROBOTS_ERROR 
    }from "../constants/constants";

export const setSearchField = (text)=>({
    type:CHANGE_SEARCH_FIELD,
    payload:text
})

export const requestRobots = ()=>(dispatch)=>{
    dispatch({
        type:REQUEST_ROBOTS_PENDING
    })
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then((recievedRobots)=>dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:recievedRobots}))
        .catch(error=>dispatch({type:REQUEST_ROBOTS_ERROR, payload:error}))
}