import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { DropDownMenu } from '../DropDown';
import { useTranslation } from 'react-i18next';
import { BasketIcon } from '../BasketIcon';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalBasket } from '../ModalBasket';
import { searchInCards } from '../../common/helpfulFunction';
import { RootState } from '../../store';

import './Header.scss';
import { updateSearchCars } from '../../store/cardsSlice';

export const Header = () => {
    const cars = useSelector((state: RootState) => state.allCards.cars);
    const dispatch = useDispatch();
    const [searchValue,setSearchValue] = useState();

    const handleChange = (e:any) =>{
        setSearchValue(e.target.value);
        const newCars = searchInCards(e.target.value,cars);
        dispatch(updateSearchCars(newCars));
    }

    const { t, i18n } = useTranslation();
    const [show, setShow] = useState<boolean>(false);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">{t("header")}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">{t("home")}</Nav.Link>

                        <DropDownMenu />
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        onChange={handleChange}
                            type="search"
                            placeholder={t("search")}
                            className="me-2"
                            aria-label="Search"
                            value={searchValue}
                        />
                        <Button variant="secondary">{t("search")}</Button>
                    </Form>
                </Navbar.Collapse>
                <BasketIcon setShow={setShow}/>
            </Container>

            <ModalBasket
                show={show}
                setShow={setShow}
            />
        </Navbar>
    );
}