import Styles from './styles.module.scss';
import React from 'react';


type ButtonProps = {
    label: string;
    onClick?: () => void;
};


const Button: React.FC <ButtonProps> = ({label}) => {
    return (
        <div className={Styles.container}>
            <button className={Styles.btn}>
                {label}
            </button>
        </div>
    );
};

export default Button;