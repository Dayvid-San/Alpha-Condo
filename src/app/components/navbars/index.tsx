import Styles from './styles.module.scss';
import Logo from '../../../../public/logo_G8.png';
import Image from 'next/image';
import Button from '../button';


const Navbars = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.container_LogoTipo}>
                <Image
                    src={Logo}
                    className={Styles.logoTipo}
                    alt={''}
                />
            </div>
            <nav className={Styles.menu_btn}>
                <Button label={'Fórum'} />
                <Button label={'Moradores'} />
                <Button label={'Projetos'} />
            </nav>
            <div className={Styles.container_Profile}>
                
            </div>
        </div>
    );
};

export default Navbars;