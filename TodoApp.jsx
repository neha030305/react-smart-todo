import {useState} from "react";

function TodoApp(){
	const [tasks, setTasks]=useState("");
	const [todos, setTodos]=useState([]);
	
	function addTask(){
		console.log(tasks);
		if(tasks.trim()==="") return;
		
		const newTodo ={
			id: Date.now(),
			text: tasks,
			completed: false	
		};
		
		setTodos(prev => [...prev, newTodo]);
		setTasks("");
	}
	
	
	function deleteTask(id){
		setTodos(prev =>prev.filter(todo => todo.id!==id));
	}
	
	
	function toggleTask(id){
		setTodos(prev=> prev.map(todo=> todo.id===id ? {...todo, completed: !todo.completed} : todo ) );
	}
	
	function markAllDone(){
		setTodos(prev=> prev.map(todo => ({...todo, completed: true}))
		);
	}
	
	return (
		<div style={{ padding: "20px", backgroundColor:"skyBlue"}}>
		
		    <h2> Complete To-Do App </h2>
			
			<div>
			   <input type="text" value={tasks} placeholder="Enter the task" onChange={(e) => setTasks(e.target.value)}  />
				<button onClick={addTask}>Add Task </button>
		   </div>
			
			
			<div style= {{marginTop: "20px" }}>
			
			{todos.map(task => (
				<div key={task.id} style={{ marginBottom: "10px" }}>
				<span style={{
				              textDecoration: task.completed  ? "line-through"   : "none",  marginRight: "10px"
                            }}>
				   {task.text}
				 </span>
				 
				 <button onClick={()=>deleteTask(task.id)}>Delete Task </button>
				 
				 <button onClick={() => toggleTask(task.id)}>
				              {task.completed ? "Undo" : "Done"}
				            </button>
				 
				 </div>
			))}
			</div>
			
			<button onClick={markAllDone} > Mark as Done </button>
		</div>
	)
}

export default TodoApp;