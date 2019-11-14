1) Fix the get route
    a) spin up a Postgres
    b) point .env to it (don't forget PGSSLMODE=require)
    c) run our db scripts (npm run setup-db)
    d) add SQL query to client.query call (SELECT * FROM todos;)

2) Add a fetch() call to our get route from the front end 
    a) Add call to onRender of TodoApp
    b) Data is now on the front end! Put todos data in TodoList as props (update)
    
3) Render these Todos in a list
    a) In TodoList, we forEach this.props.todos, and make/append a new ListItem for each todo

4) Add todo
    a) Fix the post route (add some SQL query, `INSERT INTO todos (stuff, stuff) VALUES ($1, $2)`)
    b) Add fetch call to post route on submit. Send along the todo to the post route
    c) Render the new todo by passing new props to TodoList.update({ todos: allOfTheTodos }) — inside a callback (this.props.onAdd) in TodoForm!
    d) how do we hold onto global state?

5) remove todo — add event listener to TodoItem on click, which calls this.props.onRemove.