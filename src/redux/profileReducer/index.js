
import { UPDATE_PROFILE} from "./action";

const initialState={
    id:5,
    name:"",
    lastname:"",
}

const profileReducer =(state=initialState, action)=> {
    
    const {payload, type} =action;

    switch(type){
        case UPDATE_PROFILE :return{
            ...state,
            name:payload.name,
            lastname:payload.lastname
        }
        default : 
           return state;
    }
}

export default profileReducer;