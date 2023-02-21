import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Product.module.css';
import img from '@/public/landingPage.png'

const Product = () => {

    return (
        <>
            <Head>
                <title>Lead-Capture Page</title>
                <meta name="description" content="A lead capture page example and portfolio project..." />
            </Head>
            <main className={styles.Root}>
                <header className={styles.Header}>
                    <h1>
                        Get A Landing pages full guide for beginners E-book
                    </h1>
                </header>
                <div className={styles.Product}>
                    <div className={styles.Img}>
                        <Image src={img} width={`300`} alt="Lead-Capture, Product Page, Product Description" />
                    </div>
                    <div className={styles.Container}>
                        <p>
                            A comprehinsive definition of landing page and why it's one of the most essintial things 
                            in marketing .
                            Also Get a pretty understanding of SEO and how it is important for landing pages.
                            And study a detailed explaination for each type of landing pages and how it converts visitors to leads.
                        </p>
                        <div className={styles.Download}>
                            <h2>Download The E-Book Now</h2>
                            <p style={{fontSize: "0.9em", margin: "7px", maxWidth: "80%"}}>
                                Give us your info in order to get notified when new version of 
                                the e-book releases and to be up to date in marketing world trends.  
                            </p>
                            <form>
                                <label htmlFor="email">Email</label><br />
                                <input type="email" name="email" id="email" />
                                <br />
                                <label htmlFor="phone">Phone Number (not required)</label><br /> 
                                <input type="text" name="phone" id="phone" />
                                <br />
                                <input type="checkbox" name="newsletter" id="newsletter" />
                                <label id={styles.Label} htmlFor="newsletter">Subscribe to our newsletter to be up to date every week.</label>
                                <br />
                                <br />
                                <button className={styles.Btn} >Download Now</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </main>

        </>
    )
}


export default Product;