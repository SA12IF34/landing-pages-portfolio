import styles from '@/styles/GetStarted.module.css';
import '@/styles/GetStarted.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import img from '@/public/online-academy.png';
import sciences from '@/public/sciences.png';
import science from '@/public/science.png';
import Spacer from '@/components/Spacer';

const GetStarted = () => {


    // An Academy Get Started Page

    return (
        <>  
            <Head>
                <title>Get Started</title>
                
            
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
                    background-color: var(--color);
                    border-radius: 999px;
                    width: 5px;
                }
            `}</style>
            <div id={styles.Root}>
                <header>
                    <Link className={styles.Title} href={'/projects/get-started-page'} passHref>
                        <h2 >Saif Academy</h2>
                    </Link>
                    <nav className={styles.Nav}>
                        <ul className={styles.Academy}>
                            <li>about</li> 
                            <li>why saif academy</li>
                            <li>pricing</li>
                        </ul>
                        <ul className={styles.Account}>
                            <li>
                                Create Account
                            </li>
                            <li>
                                Sign-In
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <section className={styles.First}>
                        <div className={styles.Justification}>
                            <h1 style={{maxWidth: "320px"}}>
                                Welcome to best online university out there
                            </h1>
                            <br />
                            <p>
                                Learn anything you want, 
                                anytime you want, anywhere you want, this all is for free!
                                just have an internet.
                            </p>
                            <br />
                            <div style={{width: "320px"}}>
                                <button>
                                    Get Started
                                </button>
                            </div>
                        </div>
                        <div className={styles.Img}>
                            <Image src={img} alt='saif academy' />
                        </div>
                    </section>
                    <section className={styles.Second}>

                        <div className={`${styles.fBait} ${styles.Bait}`}>
                            <div className={styles.Words}>
                                <h1>
                                    Learn Anything
                                </h1>
                                <p>
                                    You can find any stuff related to any matter 
                                    in any field you want from baiology until computer science.
                                </p>
                            </div>
                            <div className={styles.imgContainer}>
                                
                                <Image src={sciences} alt="sciences, academy, learning science" />
                            </div>
                        </div>

                        <div className={`${styles.sBait} ${styles.Bait}`}>

                            <div className={styles.Words}>
                                <h1>
                                    From Zero To Hero
                                </h1>
                                <p>
                                    learn
                                    and practice what you learn with our labs, tests, tasks and projects.
                                </p>
                            </div>
                            <div className={styles.imgContainer}> 
                                <Image src={science} alt="science, from zero to hero, modern learning, parctical learning" />
                            </div>
                        </div>
                        <div className={`${styles.tBait} ${styles.Bait}`}>
                           <div>
                                <h1>Start Improving Yourself with world-class education !</h1>
                                <button>Get Started</button>
                           </div>
                        </div>
                    </section>
                </main>
                <footer className={styles.Footer}>
                    <div className={styles.Phrase}>
                        <p>
                            Learn new, unique and rare science with experts .
                        </p>
                    </div>
                    <div>
                        <h4>Why Saif Academy</h4>
                        <ul>
                            <li>Why Choose Us</li>
                            <li>Why Paid Version</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li>Contact</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Employees</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Matters</h4>
                        <ul>
                            <li>Math</li>
                            <li>Biology</li>
                            <li>Psychology</li>
                            <li>Computer Science</li>
                            <li>History</li>
                            <li>Chimestry</li>
                            <li>Physics</li>
                            <li>Quantom Physics</li>
                            <li>More...</li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}


export default GetStarted; 