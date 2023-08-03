import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../store';
import { addCard } from '../../store/cardsSlice';
import { OneCardProps } from '../../common/types-and-interfaces';

import './OneCard.scss';


export const OneCard: React.FC<OneCardProps> = ({ id, title, picture, price }) => {
    const allCars = useSelector((state: RootState) => state.allCards.cars);
    const basketCards = useSelector((state: RootState) => state.allCards.cards);
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const addToBasket = (id: number) => {
        const addCardToBasket = allCars.filter(elem => elem.id === id);
        dispatch(addCard(addCardToBasket[0]));

        const newBasketCards = [...basketCards];
        newBasketCards.unshift(addCardToBasket[0]);
        localStorage.setItem('basketCars', JSON.stringify(newBasketCards));
    }

    return (
        <Card bg={"light"} style={{ width: '18rem', boxShadow: '4px 4px 10px black' }}>
            <Card.Img style={{ height: '10rem' }} variant="top" src={picture} className="bg-secondary" />
            <Card.Body>
                <Card.Title>{t("brand")} {title}</Card.Title>
                <Card.Text>
                    {t("price")} {price} $
                </Card.Text>

                <button onClick={() => addToBasket(id)} className='button-add'>
                    <span>
                        {t("addto")}
                    </span>
                    <i></i>
                </button>

            </Card.Body>
        </Card>
    );
}