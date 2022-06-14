import React from 'react'

export default function Todo(props) {
    const { id, text, done } = props

    const handleChange = (id) => {
        return (event) => props.updateTodo(id, event.target.checked)
    }

    const handleDelete = (id) => {
        if (window.confirm('确认要删除吗？')) {
            props.deleteTodo(id)
        }
    }

    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={done}
                    onChange={handleChange(id)} />
                <span>{text} </span>
            </label>
            <button onClick={() => handleDelete(id)}>删除</button>
        </li>
    )
}
