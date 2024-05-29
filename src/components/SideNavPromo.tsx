import React from 'react';
import Promo from '../assets/icons/Promo.svg?react'
import styles from '../styles/SideNavPromo.module.scss';

export const SideNavPromo = () => {
    return <div className={styles.constainer}>
        <Promo height={150} width={150} />
        <h3>Why should you trust it?</h3>
        <p style={{ color: 'grey', textAlign: 'center' }}>
            Because of this and that, anyways investing is very good.
        </p>
    </div>
}