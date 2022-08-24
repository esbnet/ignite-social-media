import styles from './Avatar.module.css';

export function Avatar(props) {

    return (
        <img className={styles.avatar} src="https://github.com/esbnet.png" alt="avatar" />
    )
}