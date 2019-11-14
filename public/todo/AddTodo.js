import Component from '../Component.js';


class AddTodo extends Component {

    onRender(form) {
        const onAdd = this.props.onAdd;
        
        form.addEventListener('submit', async event => {
            event.preventDefault();
            const formData = new FormData(form);

            const todo = {
                task: formData.get('task-title'),
                complete: false
            };
            console.log(todo);
            try {
                await onAdd(todo);
                // this only runs if no error:
                form.reset();
                document.activeElement.blur();
            }
            catch (err) {
                // nothing to do as App will show error,
                // but will keep form from clearing...
            }
            document.location.reload(false);
        });
    }

    renderHTML() {
        return /*html*/`
            <form>
            <input id='task-title' name='task-title'>
            <button id='submit-button'>Submit</button>
                
            </form>
        `;
    }
}

export default AddTodo;