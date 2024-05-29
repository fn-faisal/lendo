import React, { FC } from 'react';
import styles from '../styles/Card.module.scss';

type CardProps = {
    children?: React.ReactNode;
    propStyles?: any;
}

export const Card: FC<CardProps> = ({ children, propStyles }) => {
    return (
        <div className={[styles.container, propStyles].join(' ')}>{children}</div>
    );
}
