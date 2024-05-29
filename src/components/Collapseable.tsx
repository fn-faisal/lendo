import React, { useState } from 'react';
import CaretDown from '../assets/icons/CaretDown.svg?react';
import styles from '../styles/Collapseable.module.scss';

type CollapseableProps = { 
    title: string;
    content: string;
}

export const Collapseable: React.FC<CollapseableProps> = ({
    title, content
}) => {
    const [shown, setShown] = useState(false);
    return <div className={styles.container}>
        <div onClick={() => setShown(s => !s)} className={styles.title}>
            <p className='link'>{title}</p>
            <CaretDown height={16} width={16} />
        </div>
        {
            shown &&
            <p className={['link-sm', styles.content].join(' ')}>{content}</p>
        }
    </div>
}