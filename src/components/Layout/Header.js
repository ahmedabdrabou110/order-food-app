import React from 'react'
import img  from "../assets/meals.jpg";
import CardButton from './CardButton';
import styles from "./Header.module.css" ;
const Header = props => {
    return (
        <>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <CardButton />
            </header>
            <div className={styles["main-image"]}>
                <img src={img} />
            </div>
        </>
    );
}

export default Header ;