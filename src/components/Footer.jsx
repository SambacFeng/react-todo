import React from 'react'

export default function Footer(props) {
    const { todos, clearDone, checkAll } = props
    
    // 统计已完成个数
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)

    const handleCheckAll = () => {
        checkAll()
    }

    const handleClear = () => {
        clearDone()
    }

    return (
        <div>
            <span>{doneCount} / {todos.length} 已完成 </span>
            <button onClick={handleCheckAll}>全选</button>
            <button onClick={handleClear}>删除全部已完成</button>
        </div>
    )
}
