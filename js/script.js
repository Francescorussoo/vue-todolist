const app = Vue.createApp({
    data() {
        return {
            newTodoText: '',
            todos: [
                { text: 'Alzarsi dal letto', done: true },
                { text: 'Fare colazione', done: true },
                { text: 'Lavarsi', done: false },
                { text: 'Vestirsi', done: true },
                { text: 'Pulire la casa', done: true },
                { text: 'Uscire', done: false },
                { text: 'Fare una passeggiata', done: false },
                { text: 'Rientrare a casa', done: false }
            ]
        };
    },
    methods: {
        addTodo() {
            if (this.newTodoText.trim() === '') return;
            this.todos.push({ text: this.newTodoText, done: false });
            this.newTodoText = '';
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        }
    }
});

app.mount('#app');
