// CLASS COMPONENT

// import { Component } from 'react';
// import CardContainer from '../card-container/card-container.component';

// import './card-list.styles.css';

// class CardList extends Component {
// 	render() {
// 		// console.log('render');
// 		const { monsters } = this.props;

// 		return (
// 			<div className="card-list">
// 				{monsters.map((monster) => {
// 					return <CardContainer monster={monster} />;
// 				})}
// 			</div>
// 		);
// 	}
// }

// export default CardList;

// FUNCTIONAL COMPONENT

import CardContainer from '../card-container/card-container.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
	<div className="card-list">
		{monsters.map((monster) => {
			return <CardContainer monster={monster} />;
		})}
	</div>
);

export default CardList;
