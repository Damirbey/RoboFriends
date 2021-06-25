import{ CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_ERROR 
}from "../constants/constants";

const initialStateSearchField={
    searchField:''
}

export const searchRobots = (state=initialStateSearchField,action={})=>{
    switch(action.type)
    {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state,{searchField:action.payload});
        default:
            return state;
    }
}

const initialStateRobots = {
    robots:[],
    isPending:true,
    error:''
}

export const getRobots = (state=initialStateRobots,action={})=>{
    switch(action.type)
    {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({},state,{isPending:true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({},state,{isPending:false,robots:action.payload});
        case REQUEST_ROBOTS_ERROR:
            return Object.assign({},state,{isPending:false,error:action.payload});
        default:
            return state;
    }
}