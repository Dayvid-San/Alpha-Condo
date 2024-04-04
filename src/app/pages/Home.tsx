import React from 'react';
import Styles from '../page.module.scss';


interface user {
    name: string;
}

const HomePage: React.FC<user> = ({ name }) => {
    return (
        <div className={Styles.container}>
            <h1>Olá {name}</h1>
        </div>
    );
};

export default HomePage;