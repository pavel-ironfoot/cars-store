import { useSelector,useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { RootState } from '../../store';
import { BasketCard } from '../BasketCard';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, } from 'react';
import { deleteAllCars, updateCars } from '../../store/cardsSlice';
import './ModalBasket.scss';

interface ModalBasketProps {
    show:boolean;
    setShow:(value:boolean)=>void;
}

export const ModalBasket:React.FC<ModalBasketProps> = ({show,setShow}) =>{
    const basketCards = useSelector((state: RootState) => state.allCards.cards);
    const price = useMemo(()=>{return basketCards.reduce((accum,elem)=>{return accum + elem.price},0) },[basketCards]) ;
    
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const storedCards = localStorage.getItem('basketCars');
        if (storedCards) {
            dispatch(updateCars(JSON.parse(storedCards)));
        }
    }, []);

    const deleteAll = () =>{
        localStorage.setItem('basketCars', JSON.stringify([]));
       dispatch(deleteAllCars());
    }

    return (
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          {t("basket")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3>
          {basketCards.length>0?<>{t("amount")} {basketCards.length}</>:<>{t("isempty")}</>}
          </h3>
          <h3>
            {t("totalprice")} {price} $
          </h3>
          <button onClick={deleteAll} className="delete-car__button" type="submit">
                    <span className="delete-car__button-border__top delete-car__button-border"></span>
                    <span className="delete-car__button-border__right delete-car__button-border"></span>
                    <span className="delete-car__button-border__bottom delete-car__button-border"></span>
                    <span className="delete-car__button-border__left delete-car__button-border"></span>
                    {t("deleteall")}
                </button>
            {basketCards.length>0?<>
            {basketCards.map((elem,index)=><BasketCard key={elem.title+index} index={index} id={elem.id} price={elem.price} title={elem.title}/>)}
            </>:<></>}
        </Modal.Body>
      </Modal>
    );
}