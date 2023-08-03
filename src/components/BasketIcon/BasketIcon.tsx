import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { RootState } from '../../store';
import { BasketIconProps } from '../../common/types-and-interfaces';

import './BasketIcon.scss';

export const BasketIcon: React.FC<BasketIconProps> = ({ setShow }) => {
  const basketCards = useSelector((state: RootState) => state.allCards.cards);
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);

  useEffect(() => {
    setCartItemsCount(basketCards.length);
  });

  return (
    <div className="cart-icon" onClick={() => setShow(true)}>
      <FontAwesomeIcon icon={faShoppingCart} />
      {cartItemsCount > 0 && <span className="cart-icon__count">{cartItemsCount}</span>}
    </div>
  );
};

