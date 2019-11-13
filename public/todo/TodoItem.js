import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        const todo = this.props.todo;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;
        // const completedButton = document.querySelector('complete');
        // if (todo.complete) {
        //     completedButton.textContent = 'Completed';
        //     dom.style.textDecoration = 'line-through';
        // } else {
        //     completedButton.textContent = 'Mark Complete';
        //     dom.style.textDecoration = 'none';
        // }

        // completedButton.addEventListener('click', async () => {
        //     todo.complete = !todo.complete;
        //     onUpdate(todo);
        // });
        
        



        
    }

    renderHTML() {
        const todo = this.props.todo;

        return /*html*/`
            <li>${todo.task}<button id="complete"></button></li>
        `;
    }
}

export default TodoItem;