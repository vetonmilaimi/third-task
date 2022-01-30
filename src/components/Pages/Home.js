import { useState } from 'react';

import Modal from '../Modal/Modal';
import classes from './Home.module.css';

const Home = () => {
    const [modal, setModal] = useState(false);

    const modalHandler = () => {
        setModal(!modal);
    }

    return (
        <div className={classes.home}>
            <button className={classes.btn} onClick={modalHandler}>Show popup</button>
            {modal && <Modal onClose={() => setModal(false)}/>}
        </div>
    );
};

export default Home;