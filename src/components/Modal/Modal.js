import { Fragment } from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {
    return (
        <Fragment>
            <div className={classes.backdrop} onClick={props.onClose}/>
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h2>Theme</h2>
                    <p>Change theme</p>
                </header>
                <div className={classes.content}>
                    <ul>
                        <li className={classes.list}>
                            <p>Font Color</p>
                            <div className={classes.insideList}>#444444
                                <div className={classes.fontColor}></div>
                            </div>
                        </li>
                        <hr />
                        <li className={classes.list}>
                            <p>Background Color</p>
                            <div className={classes.insideList}>#FFFFFF
                                <div className={classes.backgroundColor}></div>
                            </div>
                        </li>
                        <hr />
                        <li className={classes.list}>
                            <p>Button Color</p>
                            <div className={classes.insideList}>#2072EF
                                <div className={classes.buttonColor}></div>
                            </div>
                        </li>
                        <hr />
                        <li className={classes.list}>
                            <p>Button Border Color</p>
                            <div className={classes.insideList}>#2072EF
                                <div className={classes.buttonColor}></div>
                            </div>
                        </li>
                        <hr />
                        <li className={classes.list}>
                            <p>Button Mouseover Color</p>
                            <div className={classes.insideList}>#0053D1
                                <div className={classes.buttonMouseoverColor}></div>
                            </div>
                        </li>
                        <hr />
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