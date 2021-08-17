export default (state = false, action)=>{
    if (action.type === "selectMovieUpdate"){
        return action.payload.value;
    }
    return state;
}