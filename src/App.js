import React, { useState } from 'react'
import Header from './components/Header'
import './App.css'
import List from './components/List'
import Footer from './components/Footer'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'coding', done: false },
    { id: 2, text: 'studying', done: false },
    { id: 3, text: 'sleeping', done: true }
  ])

  // 添加一个todo
  const addTodo = (todoObj) => {
    setTodos([todoObj, ...todos])
  }

  // 更新一个todo对象
  const updateTodo = (id, done) => {
    setTodos(todos.map((todoObj) => {
      return todoObj.id === id ? { ...todoObj, done } : todoObj
    }))
  }

  // 删除一个todo对象
  const deleteTodo = (id) => {
    setTodos(todos.filter((todoObj) => {
      return todoObj.id !== id
    }))
  }

  // 全选todo
  const checkAll = () => {
    setTodos(todos.map((todoObj) => {
      return { ...todoObj, done: true }
    }))
  }

  // 清除已完成todo
  const clearDone = () => {
    setTodos(todos.filter((todoObj) => {
      return !todoObj.done
    }))
  }

  return (
    <div className="App">
      <Header addTodo={addTodo}></Header>
      <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}></List>
      <Footer todos={todos} clearDone={clearDone} checkAll={checkAll}></Footer>
    </div>
  )
}

export default App
