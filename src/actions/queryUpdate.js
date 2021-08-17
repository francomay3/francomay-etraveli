export default (value)=>{
    return {
        type: "queryUpdate",
        payload: {value}
    }
}