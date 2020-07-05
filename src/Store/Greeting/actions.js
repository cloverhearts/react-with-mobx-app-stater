export default (store) => {
    const state = store.state
    return {
        setMakeHello(todoName) {
            console.log('aaa ', state)
            state.todoName = todoName
        }
    }
}
