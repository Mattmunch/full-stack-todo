import Component from '../Component.js';
import TodoItem from './TodoItem.js';

class TodoList extends Component {
    
    onRender(list) {
        const todos = this.props.todos;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        
        todos.forEach(todo => {
            let todoItem = new TodoItem({ todo });
            const todoItemDOM = todoItem.renderDOM();
            list.appendChild(todoItemDOM);

        });
    }
    renderHTML() {
        return /*html*/ `
            <ul class="todo-list"></ul>
        `;
    }
}

export default TodoList;
