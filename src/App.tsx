import './App.css';
import cls from 'classnames';
import { Chip } from './model';

function App() {
	const chip1: Chip = {
		name: 'Player 1',
		walls: 10,
	};
	const chip2: Chip = {
		name: 'Player 2',
		walls: 6,
	};

	return (
		<div className="wrapper">
			<WallsContainer position="left" name={chip1.name} count={chip1.walls} />
			<Board />
			<WallsContainer position="right" name={chip1.name} count={chip2.walls} />
		</div>
	);
}

export default App;

const Board = () => {
	const cells1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const cells2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<div className={'table'}>
			{cells1.map((cell1) => {
				return cells2.map((cell2) => {
					return <Cell key={`${cell1}-${cell2}`} index={`${cell1}-${cell2}`} />;
				});
			})}
		</div>
	);
};



const Cell = ({ index }: { index: string }) => {
	return <div className={cls('cell')}>{index}</div>;
};

const Wall = ({}: {}) =>{
	return <div></div>
}

const WallsContainer = ({
	position,
	count,
	name,
}: {
	position: 'left' | 'right';
	name: string;
	count: number;
}) => {
	return (
		<div
			className={cls('wall-box', position, {
				empty: count === 0,
			})}
		>
			<div>{`Wall for player ${name}`}</div>
			<div>{count}</div>
		</div>
	);
};
