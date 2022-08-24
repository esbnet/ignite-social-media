import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src='https://github.com/esbnet.png' alt='' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Edmilson Soares</strong>
                            <time dateTime='2022-05-11 08:13:00'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Apagar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p> Muito bom Devon, parabéns!!</p>
                </div>
                <footer>
                <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                </button>
                </footer>
            </div>
        </div>
    )
}