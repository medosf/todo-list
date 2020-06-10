import React from 'react';

class Todos extends React.Component{

    state = {
        todos: ["break fast", "morning exercise", "readying", "studying"],
        del: [],
      
    }

    action = (index) => {
      const arr = [...this.state.todos];
      const delarr = [...this.state.del];
        /*save deleted item on del state*/
      delarr.push(arr[index]);
      this.setState({
          ...this.state,
          del: delarr
      })
      /*update todos state*/
      arr.splice(index,1);
      this.setState({todos: arr})

      console.log(this.state.del)
    }

    
    addtodo = (e) =>{
        e.preventDefault()
        if(e.target.elements.option.value === ""){
            alert('add value inside the input filed')

        
        
        }else{
            let newarr = [...this.state.todos];
            newarr.push(e.target.elements.option.value.trim())
        
            this.setState({todos: newarr})
            e.target.elements.option.value = "";
        }
      
    }

    reset = () =>{
        this.setState({todos: []})
    }

    randomTodo = () =>{
        const random = Math.floor(Math.random()*this.state.todos.length) 
        alert(this.state.todos[random])
    }

    render(){
        return(
            <div className="myapp">
                <h1>Todo App</h1>
                <button className="top-buttons" onClick={this.reset} disabled={this.state.todos.length > 0 ? false : true}>restet</button>
                <button className="top-buttons" onClick={this.randomTodo} disabled={this.state.todos.length > 0 ? false : true}>what should i do today?</button>
                <ul className="myapp-ul">
                  
                {this.state.todos.map((todo,index)=>

                    <li key={index} className="todo-item">
                    {todo}
                    <button onClick={()=>this.action(index)}>Done</button>
                    </li>
                )
                
                }
              </ul>
            <form onSubmit={this.addtodo} className="myform">
                <input type="text" placeholder="add new task" name="option"/>
                <button>Add</button>
            </form>

            </div>
        );
    }
}

export default Todos;