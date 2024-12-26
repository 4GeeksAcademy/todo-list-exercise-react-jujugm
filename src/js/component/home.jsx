import React, {useState} from "react";
                                                        // 1er paso para declarar estados

//create your first component
const Home = () => {
	
// Los estados son espacios de memoria que van a cambiar
		    //  Aqui se guarda la tarea 
			 const [task,setTask]=useState("")          //  2do paso para declarar estados (decarar espacio de memoria y funcion a declarar SIEMPRE COLOCAR SET (DE SETTER))

			// Aqui se guarda la lista de tareas
			const [taskList,setTaskList]=useState([])   
	

 function handleTask(event) {

	if(event.keyCode === 13){
		// despues de pulsar enter quiero que agregue una nueva tarea (task) a la lista (TaskList) 
		let nuevoArray = taskList.concat(task);
		// concat es una funcion por lo que le añado parentesis
		setTaskList(nuevoArray)
	}
	// setTask(event.target.value);
	// setTaskList([TaskList, task]);
 }


function deleteTask (deleteIndex) {
// // Cuando pulse la X se elimina un elemento
setTaskList(taskList.filter((_, index) => index !== deleteIndex)); // Actualiza el estado
}
// // En la funcion debe llegar la informacion del elemento que queremos eliminar
// let deleteTask = task.concat (span)



return (
<div className= "container">
	<h1>To-Do List</h1>
		
		<div className="input-group input-group-lg">
  <input type="text" 
  className="form-control" 
  aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
  onChange={(event)=>setTask(event.target.value)} 
  onKeyDown={handleTask}
  
  />
		</div>
			<div className="listgroup">
		<ul className="list-group ">
				{/* Mapear taskList para que se generen nuevos li uno debajo de otro */}
				{taskList.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
            <span
              className="delete-click"
              onClick={() => deleteTask(index)}
            >
              X
            </span>
          </li>
        ))}
		

		
		</ul>
		<p>{taskList.length} items left</p>
			</div>
		</div>
	);
};

export default Home;
