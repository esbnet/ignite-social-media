import { Avatar } from './Avatar';
import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment({ content, onDeleteComment }) {

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/esbnet.png' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Edmilson Soares</strong>
                            <time dateTime='2022-05-11 08:13:00'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Apagar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p> {content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}