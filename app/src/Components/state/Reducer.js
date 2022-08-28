
const initialState={
    List:[]
}
export const ListReducer=(state=initialState,action)=>{
    //const id=0;
    switch(action.type){
        case "AddList":return {
            ...state,
            List:[...state.List,{title:action.payload.title,id:state.List.length,description:action.payload.description}]
        };
        case "DelList":
            const delitem=state.List.filter((i)=>i.id !== action.payload)  
            console.log(delitem)
        return{
            ...state,
          List:delitem
    }
        default:
            return state
    }

}