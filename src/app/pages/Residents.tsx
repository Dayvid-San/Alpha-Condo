import Card from '../components/residents/card';
import Styles from '../page.module.scss';


const ResidentPage = () => {
    return (
        <main className={Styles.container}>
            <Card nameResident={'Dayvid'} apartament={202} />
        </main>
    );
};

export default ResidentPage;