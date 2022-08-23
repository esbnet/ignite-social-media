import { Header } from './components/Header'
import { Post } from './Post'

import styles from './App.module.css'
import './global.css'

import { Sidebar } from './components/Sidebar'

export function App() {

    return (
        <>
            <Header />

            <div className={styles.wrapper}>

                <Sidebar />
                <main>
                    <Post
                        author="Edmilson"
                        content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud export"
                    />
                </main>
            </div>

        </>
    )
}


