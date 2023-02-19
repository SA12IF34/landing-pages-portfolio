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
                    <div className={styles.Container}>
                        <h1>Hello and welcome to SteelMind!</h1>
                        <br />
                        <br />

                        <p>
                            We are a mental health support company. Our brand name doesn't mean the rigidity or inflexibility,
                            But our brand name means resilience, strength, and durability.
                        </p>
                        <br />
                        <p>
                            Our work is to solve relationships problems (serious ones), stress and tension, disquiet, depression, and sorrow problems.
                        </p>
                    </div>
                </main>
            </div>
        </>
    )
}

export default About;