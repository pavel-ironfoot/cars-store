import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import { deleteCurrentCard } from '../../store/cardsSlice';
import { RootState } from '../../store';
import { BasketCardProps } from '../../common/types-and-interfaces';

import './BasketCard.scss';


export const BasketCard: React.FC<BasketCardProps> = ({ index, id, title, price }) => {
    const basketCards = useSelector((state: RootState) => state.allCards.cards);
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const deleteFromBasket = (id: number) => {
        dispatch(deleteCurrentCard(id));
        const newBasketCards = basketCards.filter((elem, ind) => ind !== id);
        localStorage.setItem('basketCars', JSON.stringify(newBasketCards));
    }

    return (
        <Card bg={"secondary"} text={'white'} style={{ width: '18rem', marginBottom: '10px' }}>
            <Card.Body>
                <Card.Title> {title}</Card.Title>
                <Card.Text>
                    {price} $
                </Card.Text>
                <Button variant="dark" onClick={() => deleteFromBasket(index)}>{t("delete")}</Button>
            </Card.Body>
        </Card>
    );
}