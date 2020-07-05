import React, { useContext, useEffect } from 'react'
import { useObserver, observer } from 'mobx-react-lite'

import { useStoreAction } from 'Store'

import Todo from 'Components/Todo'
import TodoContainer from 'Components/Todo/Container'


const TodoList = () => {
    const todoModule = useStoreAction('Todo')
    return useObserver((e) => { 
        return (
            <div>
                {todoModule.state.todos.map((todoInfo, index) => <Todo key={index} {...todoInfo} />)}
            </div>
        )
    })
}

export default (props) => {
    return (
        <TodoContainer>
            <TodoList />
        </TodoContainer>
    )
}