export default (state = "none", action)=>{
    if (action.type === "sortbyUpdate"){
        return action.payload.value;
    }
    return state;
}