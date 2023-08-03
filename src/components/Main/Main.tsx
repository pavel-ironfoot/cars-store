import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { OneCard } from '../OneCard';

import './Main.scss';

export const Main = () => {
    const cars = useSelector((state: RootState) => state.allCards.searchCars);
    const showCars = cars.map(elem => <OneCard key={elem.id} id={elem.id} picture={elem.picture} price={elem.price} title={elem.title} />);

    return (
        <div className='main'>
            {showCars}
        </div>
    );
}