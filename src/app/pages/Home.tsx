import Styles from '../page.module.scss';


interface userConfig {
    name: string;
}

const HomePage = (config: userConfig) => {
    return (
        <div className={Styles.container}>
            <h1>Olá {config.name}</h1>
        </div>
    );
};

export default HomePage;