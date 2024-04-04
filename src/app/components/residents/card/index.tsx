import Styles from './styles.module.scss';
import React from 'react';


interface cardInterface {
    nameResident: string;
    apartament: number;
};

const Card: React.FC<cardInterface> = ({ nameResident, apartament }) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.card}>
                <div className={Styles.resident}>
                    {/** Coloque a imagem aqui */}
                    <h2 className={Styles.nameResident}>
                        {nameResident}
                    </h2>
                </div>
                <div className={Styles.data}>
                    <div>
                        Apartamento: {apartament}
                    </div>
                    <div>
                        Fóruns: 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;