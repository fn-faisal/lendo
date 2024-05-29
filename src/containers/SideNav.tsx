import React, { FC } from "react";
import Logo from '../assets/icons/Logo.svg?react';
import styles from '../styles/SideNav.module.scss';

type SideNavProps = {
    items?: React.ReactNode[];
}

export const SideNav: FC<SideNavProps> = ({ items = [] }) => {
    return (
        <div className={styles.container}>
            <div>
                <Logo height={100} width={130} />
            </div>

            {
                items?.map( (i, idx) => (
                    <div key={idx}>
                        {i}
                        {idx !== items.length - 1 && <hr className={styles.seperator}/>}
                    </div>) 
                )
            }            
        </div>
    );
}