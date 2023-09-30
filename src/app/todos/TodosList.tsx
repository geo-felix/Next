import React, { Component } from 'react'
import { Todo } from '../../../typings';
import Link from 'next/link';

const fetchTodos= async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todos : Todo[] = await res.json();
    return todos
}

async function TodosList () {

    const todos= await fetchTodos()

    return (
      <>
        {
            todos.map((todos) =>
                <p key={(todos.id)}>

                    <Link href={`/todos/${todos.id}`}> Todo: {todos.id}</Link>
                </p>
            )
        }
      </>
    )

}
export default TodosList
