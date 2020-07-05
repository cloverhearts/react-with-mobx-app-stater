export default (store) => {
    const state = store.state
    return {
        async addTodo(todo) {
            state.todos.push({ ...todo, createdAt: new Date() })
        },
        async removeTodo(todo) {
            state.todos.filter(oTodo => oTodo === todo)
        },
        getName() {
            return state.name
        }
    }
}
