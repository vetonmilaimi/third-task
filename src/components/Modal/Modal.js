import { Fragment } from 'react';
import classes from './Modal.module.css';

const DUMMY_COLORS = [
    {
        id: '1',
        name: 'Font Color',
        color: '#444444',
        colorClass: classes.fontColor
    },
    {
        id: '2',
        name: 'Background Color',
        color: '#FFFFFF',
        colorClass: classes.backgroundColor
    },
    {
        id: '3',
        name: 'Button Color',
        color: '#2072EF',
        colorClass: classes.buttonColor
    },
    {
        id: '4',
        name: 'Button Border Color',
        color: '#2072EF',
        colorClass: classes.buttonColor
    },
    {
        id: '5',
        name: 'Button Mouseover Color',
        color: '#0053D1',
        colorClass: classes.buttonMouseoverColor
    }
];

const colors = DUMMY_COLORS.map((color) => {
    return (
        <Fragment>
            <li className={classes.list} key={color.id}>
                <p>{color.name}</p>
                <div className={classes.insideList}>{color.color}
                    <div className={color.colorClass}></div>
                </div>
            </li>
            <hr />
        </Fragment>

    )
});

const Modal = (props) => {
    return (
        <Fragment>
            <div className={classes.backdrop} onClick={props.onClose} />
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h2>Theme</h2>
                    <p>Change theme</p>
                </header>
                <div className={classes.content}>
                    <ul>
                        {colors}
                    </ul>
                </div>
                <footer className={classes.actions}>
                    <button className={classes.btnClose} onClick={props.onClose}>Close</button>
                    <button className={classes.btnOk} onClick={props.onClose}>Okay</button>
                </footer>
            </div>
        </Fragment>
    );
};

export default Modal;