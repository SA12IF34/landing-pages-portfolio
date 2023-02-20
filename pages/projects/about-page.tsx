import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/About.module.css';

import img from '@/public/mentalHealth.jpg';

const About = () => {

    // 

    return (
        <>
            <Head>
                <title>About Page</title>
            </Head>
            <style jsx global>{`
                :root {
                    --color: rgb(95, 44, 24);
                }
                body::-webkit-scrollbar {
                    
                   width: 7px;
                    background-color: white;
                }

                body::-webkit-scrollbar-thumb {
                    background-color: rgba(58, 58, 58, 0.5);
                    border-radius: 999px;
                    width: 5px;
                }
            `}</style>
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
                        <br />
                        <p>
                            take a look at <span style={{textDecoration: "underline"}}>our services</span> or 
                            if you want <span style={{textDecoration: "underline"}}>here is some reviews about us</span>, 
                            feel free to do what you want ;).
                        </p>
                        <br />
                        <br />
                        <div id={styles.Img} style={{width: "72%", height: "max-content", margin: "auto"}}>
                            <Image  style={{width: "100%", height: "auto"}} src={img} alt="mental health support, about, page, example" />
                        </div>
                        <br />
                        <br />
                        <div>
                            <p>please share this to help people strengthen their minds and make them steely.</p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default About;