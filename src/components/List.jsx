import React from 'react'
import Todo from './Todo'


export default function List(props) {
    const { todos, updateTodo, deleteTodo } = props
    return (
        <ul>
            {
                todos.map(todoObj => {
                    return (
                        <Todo
                            key={todoObj.id}
                            {...todoObj}
                            updateTodo={updateTodo}
                            deleteTodo={deleteTodo}
                        />
                    )
                })
            }
        </ul>
    )
}
