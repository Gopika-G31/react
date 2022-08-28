
export const addList = (title,description) =>({

    type:'AddList',
   payload:{title,description}
})

export const DelList = (input) =>({

    type:'DelList',
    payload:input

})