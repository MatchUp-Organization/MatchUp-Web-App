import React from 'react';
import styles from './joinUs.module.css';

const JoinUsToday: React.FC = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Join us today!</h2>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.downloadButton}`}>Download app</button>
                <button className={`${styles.button} ${styles.openButton}`}>Open in browser</button>
            </div>
        </div>
    );
};

export default JoinUsToday;