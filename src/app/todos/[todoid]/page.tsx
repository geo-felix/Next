import React from 'react'

type PageParams ={
    params:{
        todoid:string
    }
}

function TodoPage({params:{todoid}}:PageParams) {
  return (
    <div className='min-h-screen'>TodoPage: {todoid}</div>
  )
}

export default TodoPage