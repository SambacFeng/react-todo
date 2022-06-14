import React from 'react'

export default function Header(props) {
    //键盘事件的回调
    const handleKeyUp = (event) => {
        const { key, target } = event
        if (key === 'Enter') {
            const text = target.value.trim()
            if (text === '') {
                alert('输入不能为空')
                return
            }
            const newTodo = {
                id: Date.now(),
                text,
                done: false
            }
            props.addTodo(newTodo)
            target.value = ''
        }
    }

    return (
        <div className="todo-header">
            <input onKeyUp={handleKeyUp} type="text" placeholder="输入待办内容，按回车确认" />
        </div>
    )
}
