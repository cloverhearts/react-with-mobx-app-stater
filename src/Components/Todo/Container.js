import React, { useCallback, useRef } from 'react'
import { useObserver } from 'mobx-react-lite'
import { useStoreAction } from 'Store'

function RecentTodoName() {
  const GreetingModule = useStoreAction('Greeting')
  return useObserver(() => {
    return GreetingModule.state.todoName ? <div>RecentTodoName => {GreetingModule.state.todoName} </div> : null
  })
}

export default (props) => {
    const { children } = props
    const GreetingModule = useStoreAction('Greeting')
    const todoModule = useStoreAction('Todo')
    const inputEle = useRef()
    const onClickAddTodo = useCallback(() => {
        todoModule.actions.addTodo({name: inputEle.current.value})
        GreetingModule.actions.setMakeHello(inputEle.current.value)
     }, [])
    const onClickGetName = useCallback(() => {
        console.log(todoModule.actions.getName())
    }, [])


    return (
        <div className={`todo-container`}>
            <div className={`controllers`}>
                Title <input ref={inputEle} type="text" /> <button onClick={onClickAddTodo}>ADD TODO</button>
                <button onClick={onClickGetName}>GET NAME</button>
            </div>
            <RecentTodoName />
            <div className={`todos`}>
                {children}
            </div>
        </div>
    )
}
