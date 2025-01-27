import React from 'react';
import '../../src/css/Member.css';


const Member = (props) => {
	return (
		<div className='member-wrapper'>
			<img src={props.url} alt="" />
			<div className='content name'>{props.name}</div>
			<div className='content position'>{props.position}</div>
			<div className='content intro'>{props.intro}</div>
		</div>
	);
}


export default Member;
