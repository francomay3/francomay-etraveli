export default (state = "", action)=>{
    if (action.type === "queryUpdate"){
        return action.payload.value;
    }
    return state;
}