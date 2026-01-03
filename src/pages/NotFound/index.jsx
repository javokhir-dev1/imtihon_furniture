import React from 'react';
import { NotFound } from './NotFound.styled';
import { useAppNavigation } from '../../hooks/useAppNavigation';

function NotFoundPage(props) {
    const { goToHome } = useAppNavigation()
    return (
        <NotFound className='container'>
            <h2>404</h2>
            <p>Похоже, ничего не нашлось :(</p>
            <button onClick={goToHome}>На главную</button>

        </NotFound>
    );
}

export default NotFoundPage;