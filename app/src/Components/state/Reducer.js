
const initialState={
    List:[
        {
            title: 'Sample Notes 1',
            id: 0,
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'
          },
          {
            title: 'Sample Notes 2',
            id: 1,
            description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
          },
          {
            title: 'Sample Notes 3 ',
            id: 2,
            description: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
          },
          {
            title: 'Sample Notes 4',
            id: 1,
            description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
          },
          {
            title: 'Sample Notes 5',
            id: 1,
            description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
          },
          
    ]
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