import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import './BasketIcon.scss';
import { RootState } from '../../store';

interface BasketIconProps {
  setShow:(value:boolean)=>void;
}

export const BasketIcon:React.FC <BasketIconProps> = ({setShow}) => {
  const basketCards = useSelector((state: RootState) => state.allCards.cards);
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);

  useEffect(()=>{
    setCartItemsCount(basketCards.length);
  });

  return (
    <div className="cart-icon" onClick={()=>setShow(true)}>
      <FontAwesomeIcon icon={faShoppingCart} />
      {cartItemsCount > 0 && <span className="cart-icon__count">{cartItemsCount}</span>}
    </div>
  );
};

