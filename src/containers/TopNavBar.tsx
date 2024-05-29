import React, { FC } from "react";
import styles from '../styles/TopNavBar.module.scss';
import BellIcon from '../assets/icons/Bell.svg?react';
import AvatarIcon from '../assets/icons/Avatar.svg?react';

type TopNavbarProps = {};

export const TopNavbar: FC<TopNavbarProps> = () => {
    return (
        <nav className={styles.container}>
            <ul>
                <li className="link">Overview</li>
                <li className="link">Invest</li>
                <li className={["link", styles.active].join(' ')}>Auto-Invest</li>
                <li className="link">My Portfolio</li>
            </ul>
            <div className={styles.menuActions}>
                <div className="link">
                    <small>En</small>
                </div>
                <div>
                    <BellIcon height={24} width={24} />
                </div>
                <div>
                    <AvatarIcon />
                </div>
            </div>
        </nav>
    );
}