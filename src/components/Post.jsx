import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://github.com/esbnet.png'/>
                    <div className={styles.authorInfo}>
                        <strong>Edmilson Soares</strong>
                        <span>Full Stack Developer</span>
                    </div>
                </div>
                <time dateTime='2022-05-11 08:13:00'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{'  '}
                    <a href="#">#nlw</a>{'  '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <stron>Deixe seu comentário</stron>
                <textarea
                    className={styles.comment}
                    placeholder="Deixe seu comentário..."
                />
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}