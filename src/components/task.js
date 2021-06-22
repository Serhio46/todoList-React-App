import React from 'react';

function Task({ task, ...props }) {

	console.log(task);

	const ActionBtn = () =>(
		<div className='action-btn'>
			{!task.done ?
				<p onClick={props.doneTask}>Ok</p>
				:
				<p onClick={props.deleteTask}>No</p>}</div>);

	const className = 'task ' + (task.done ? 'task-done' : '');

	return (
		<div className={className}>
			<p>{task.title}</p>
			<ActionBtn />
		</div>
	)
}

export default Task;