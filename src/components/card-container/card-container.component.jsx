// CLASS COMPONENT

// import { Component } from 'react';
// import './card-container.styles.css';

// class CardContainer extends Component {
// 	render() {
// 		const { name, email, id } = this.props.monster;
// 		return (
// 			<div className="card-container" key={id}>
// 				<img
// 					alt={`monster ${name}`}
// 					src={`https://robohash.org/${id}/?set=set2`}
// 				/>
// 				<h2>{name}</h2>
// 				<p>{email}</p>
// 			</div>
// 		);
// 	}
// }

// export default CardContainer;

// FUNCTIONAL COMPONENT

import './card-container.styles.css';

const CardContainer = ({ monster }) => {
	const { name, email, id } = monster;
	return (
		<div key={id} className="card-container">
			<img
				alt={`monster ${name}`}
				src={`https://robohash.org/${id}/?set=set2`}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

export default CardContainer;
