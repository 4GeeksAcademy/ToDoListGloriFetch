import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [todo, setTodo] = useState("")
	const [todolist, setTodolist] = useState([])
	const [removeshow, setremoveshow] = useState(false);

	const todoApi = 'https://fake-todo-list-52f9a4ed80ce.herokuapp.com/todos/user/GlorianaZelaya'

	useEffect(() => {
		fetch(todoApi).then(result => response => response.json()).then(data => console.log(data)).catch(error => error)
	}, [])

	//Put
	function addTodo(todos) {
		let arrayTodo = [
			{ label: "Conquistar el mundo", done: false },
			{ label: "Que mi perro me saque a pasear", done: false },
			{ label: "Terminarme la ensalada", done: false },
			{ label: "Lavar", done: true }
		]
		let options = {
			method: 'PUT',
			body: JSON.stringify([arrayTodo]),
			headers: {
				"Content-Type": "application/json",
			}
		}
		fetch(todoApi).then(result => response => response.json()).then(data => console.log(data)).catch(error => error)
	}
	function addTodo(todos) {
		fetch(
			"https://fake-todo-list-52f9a4ed80ce.herokuapp.com/todos/user/GlorianaZelaya",
			{
				method: "PUT",
				body: JSON.stringify(todos),
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then((resp) => {
				console.log(resp.ok);
				console.log(resp.status);
				console.log(resp.text());
				return resp.json();
			})
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	//Delete b
	function deleteTask(todos) {
		fetch(todoApi, {
			method: 'PUT',
			body: JSON.stringify(tasks.filter((_, i) => i !== todos)),
			headers: {
				'Content-Type': 'application/json'
			}
		}).catch(error => error);
		setTodolist(todolist.filter((_, i) => i !== todos));
	}

	//Delete All Tasks
	function MegaDelete(todos) {
		fetch(todoApi, {
			method: 'PUT',
			body: JSON.stringify([]),
			headers: {
				'Content-Type': 'application/json'
			}
		}).catch(todo => error);
		setTodolist([]);
	}

	return (
		<div className="container">
			<h1 className="text-center mt-4">♥ To Do ♥</h1>
			<input type="text" placeholder=" What needs to be done?" value={todo}
				onChange={(e) => {
					setTodo(e.target.value)
				}
				}
				onKeyDown={(e) => {
					e.key === "Enter" ? setTodolist(todolist.concat(todo))
						: null;
					e.key === "Enter" ? setTodo("")
						: null;
				}
				}></input>
			{todolist.map((task, index) => (
				<li
					key={index}
					onMouseEnter={() => setremoveshow(index)}
					onMouseLeave={() => setremoveshow(null)}>
					{task}{""}
					{removeshow == index && (
						<img
							src="https://play-lh.googleusercontent.com/clvbyNWTT8fYSfdTvrZM4M68R-9JRtFfIQmt3YZr90pkph4WJ6C2JUfjDL1CnQVRHkQZ"
							onClick={() => {
								setTodolist(
									todolist.filter(
										(a, id) => id !== index
									)
								);
							}}></img>
					)}</li>
			))}
			<li className="TaskLeft">
				{todolist.length} tasks pending
			</li>
			<button className="btn btn-outline-dark" onClick={MegaDelete}>Clear All</button>
		</div>
	);
};

export default Home;
