let nextTodoId = 0;

export const addTodo = text =>{

    return {
        type:'Add_ToDo',
        id: nextTodoId++,
        text
    }
}
export function increment(){
    return {
        type:'increment'
    }
}



export function decrement(){
    return {
        type:'decrement'
    }
}
