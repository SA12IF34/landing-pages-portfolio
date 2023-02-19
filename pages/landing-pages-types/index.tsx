import Head from 'next/head';
import Link from 'next/link';
import {BsArrowRight} from 'react-icons/bs'
import styles from '@/styles/LandingTypes.module.css';


const Types = () => {
    return (
        <>
            <Head>
                <title>Landing Pages Types</title>
            </Head>

            <section id={styles.Root}>
                <header className={styles.Header}>
                    <nav className={styles.Subheader}>
                        <Link href={'/'} passHref>
                            <h2>
                                Landing Expert
                            </h2>
                        </Link>
                    </nav>
                    <h1>Landing Pages Types</h1>
                </header>
                <main className={styles.Container}> 
                    <div className={styles.Overview}>
                        <h2>what is a landing page ?</h2>
                        <br />
                        <p>
                            A landing page is a marketing focused page 
                            that focus on converting it's visitors to leads 
                            for it by encouraging them and exchanging contact info.
                        </p>
                    </div>
                    <div className={styles.Page}>
                        <h2>
                            First : Squeeze Page
                        </h2>
                        <br />
                        <p>
                            A Squeeze page is a page in which the goal 
                            is to capture user's email address.
                        </p>
                    </div>
                    <div className={styles.Page}>
                        <h2>
                            Second : Splash Page
                        </h2>
                        <br />
                        <p>
                            An intermediary page that the user is sent to.
                        </p>
                    </div>
                    <div className={styles.Page}>
                        <h2>
                            Third : Lead Capture Page
                        </h2>
                        <br />
                        <p>
                            Is like the squeeze page but with more info such as name, 
                            email address, job title, business name and industry.
                        </p>
                    </div>
                    <div className={styles.Page}>
                        <h2>
                            Fourth : Click-Through Landing Page
                        </h2>
                        <br />
                        <p>
                            Is a page that provide the value a benefits of 
                            the product/service before asking for money or ordering buying .
                        </p>
                    </div>
                    <div className={styles.Page}>
                        <h2>
                            Fifth : "Get Started" Landing Page
                        </h2>
                        <br />
                        <p>
                            Is a page which provides more details as you scroll 
                            to convince you to click "Get Started" Button.
                        </p>
                    </div>
                    <div className={styles.Page}>
                        <h2>
                            Sixth : "Unsubscribe" Landing Page
                        </h2>
                        <br />
                        <p>
                            It should make sure that it successfully unsubscribes it's users, 
                            and offers them a chance to manage their preferences or adjust the cadence, and consider
                            including links to other areas of the website.
                        </p>
                    </div>
                    <div className={styles.Page}>
                        <h2>
                            Seventh : Long-form Sales Landing Page
                        </h2>
                        <br />
                        <p>
                            you want to think of every question you customer might have for you, 
                            every barrier to purchase they might face, and every benefit they'll enjoy 
                            by making a purchase when they scroll to the bottom of page .
                        </p>
                    </div>
                    <div className={styles.Page}>
                        <h2>
                            Eighth : Paid Advertising Landing Page
                        </h2>
                        <br />
                        <p>
                            Generally, you want to generate  leads from the ads 
                            and send your customer who click on your paid ad to the right page .
                        </p>
                    </div>
                    <div className={styles.Conclusion}>
                        <h2>
                            Conclusion
                        </h2>
                        <br />
                        <p>
                            those are some types of landing pages and theres a lot more, 
                            we may discuss them later .
                            </p>
                    </div>
                    <div style={{width: "100%", minHeight: "60px", display: "flex", justifyContent: "flex-end"}}>
                        <Link href={'/'} passHref>
                            <h2>Back To Home <BsArrowRight /></h2>
                        </Link>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Types;