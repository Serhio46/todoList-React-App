import React, { useState } from 'react';

function TaskInput(props) {

	const [input, setInput] = useState('');

	const addTasks = () => {
		if (input) {
			props.addTasks(input);
			setInput('');
		}
	}

	const inputChange = (event) => {
		setInput(event.target.value);
	}

	return (
		<div className='task-input'>
			<input onChange={inputChange} value={input} />
			<button onClick={addTasks}>ADD</button>

		</div>
	);
}

export default TaskInput;