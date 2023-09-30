import React from 'react'
import { Todo } from '../../../../typings'

type PageParams ={
    params:{
        todoid:string
    }
}
const fetchTodos= async (todoid:string)=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/${todoid}",
     {next:{revalidate:60}})
    const todo : Todo = await res.json();
    return todo
}

 async function TodoPage({params:{todoid}}:PageParams) {
    const todo= await fetchTodos(todoid)
  return (
    <main className='min-h-screen'>
        <div className='p-10 bg-yellow-200 border-2  m-2 shadow-lg'>
            <p>
                #{todo.id}:{todo.title}
            </p>
            <p>Completed: {todo.completed ?"Yes":"No"}</p>
            <p className='border-t border-black mt-2 text-right'>By User:{todo.userId}</p>
        </div>
    </main>
  )
}

export default TodoPage

export async function generateStaticParams(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todos : Todo[] = await res.json();

    const trimmedTodo=todos.splice(0,10)
   return trimmedTodo.map((todos) => ({todoid:todos.id.toString()}))
}
