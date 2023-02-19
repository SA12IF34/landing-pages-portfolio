import Head from 'next/head';
import styles from '@/styles/About.module.css';


const About = () => {

    // 

    return (
        <>
            <Head>
                <title>About Page</title>
            </Head>
            <div className={styles.Root}>
                <header className={styles.Header}>
                    <h2>SteelMind</h2>
                    <nav>
                        <ul>
                            <li>counseling & therapy</li>
                            <li>self-help</li>
                            <li>Monitoring</li>
                            <li>immediat crisis</li>
                        </ul>
                    </nav>
                </header>
                <main className={styles.Main}>
                    <h1>Hello and welcome to SteelMind!</h1>
                    <p></p>
                </main>
            </div>
        </>
    )
}

export default About;