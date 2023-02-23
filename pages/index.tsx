import {useEffect, useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import banner from '@/public/banner.jpg';
import {BiDownArrowAlt, BiUpArrowAlt} from 'react-icons/bi'

import getStarted from '@/public/getStarted.png';
import leadPage from '@/public/leadPage.png';
import about from '@/public/about.png';

export default function Home() {

  const [num, setNum ] = useState<number>(0)

  const handleClick = (): void => {
  
    let container  = document.getElementById("container") as HTMLElement;

    if (num) {
      setNum(0);
      container.style.cssText = "top: 0%; height: 100% !important; overflow: hidden";
    } else if (!num) {
      setNum(1);
      container.style.cssText = "top: 100%; height: max-content !important; overflow: visible";
    }
    
  }

  function loadProjects(): void {
    let projects  = document.querySelectorAll("#Container span .project") as NodeListOf<HTMLElement> ;
    let projectsParent = document.querySelector("#Container") as HTMLDivElement;
    let btnRight = document.querySelector(".one-btn") as HTMLButtonElement;
    let btnLeft = document.querySelector(".two-btn") as HTMLButtonElement;

    let difference: number = 360/projects.length;
    let n: number = 0;
    let num: number = difference;

    let angles: number[] = []

    for (let i=0; i < projects.length; i++) {
      angles.push(num)
      projects[i].style.cssText = `transform: rotateY(${num}deg)`;
      projects[i].parentElement!.style.cssText = `transform: rotateZ(${num}deg)`;
      num+=difference;
    }

    btnLeft.onclick = () => {
      n+=difference;
      projectsParent.style.cssText = `transform: rotateY(${n}deg)`;
      for (let j=0; j < projects.length; j++) {
        angles[j]-=difference;
        projects[j].style.cssText = `transform: rotateY(${angles[j]}deg)`;
      }
    }

    btnRight.onclick = () => {
      n-=difference;
      projectsParent.style.cssText = `transform: rotateY(${n}deg)`;
      for (let j=0; j < projects.length; j++) {
        angles[j]+=difference;
        projects[j].style.cssText = `transform: rotateY(${angles[j]}deg)`;
      }
    }

  }

  useEffect(() => {
    loadProjects();
  }, [])


  return (
    <>
      <Head>
        <title>LandingAce</title>
        <script src={"https://kit.fontawesome.com/9b81eb347f.js"} crossOrigin={"anonymous"} ></script>
      </Head>
      <style jsx global>{`

                body::-webkit-scrollbar {
                    
                   width: 7px;
                    background-color: rgb(231, 236, 244);
                }

                body::-webkit-scrollbar-thumb {
                    background-color: rgb(176, 186, 201);
                    border-radius: 999px;
                    width: 5px;
                }
            `}</style>
      <div className={styles.mainRoot}>
        <main>
          <Image className={styles.Banner} src={banner} alt="banner" />
          <div className={styles.Bg}></div>
          <div className={styles.contentContainer}>
            <h1>
              Welcome!!
            </h1>
            <h4>
              Get your landing page built by an <span style={{textDecoration: "underline", textDecorationColor: "rgb(255, 180, 50)", maxWidth: "85%" }}>expert landing pages dev</span>.
            </h4>
          </div>
        </main>
        <section className={styles.sectionOne}>
          <div>
            <div className={styles.Info}>
              <div className={styles.one}>
                <p>
                My name is Saif, and I'm a full-stack web developer and expert in building landing pages. 
                I can create any type of landing pages you need, including squeeze pages, get started landing pages, and <Link title='Landing Pages Types' href={"/landing-pages-types"}>more</Link>.
                </p>
              </div>
              <div className={styles.two}></div>
            </div>
          </div>
          <div className={styles.Skills}>
            <div>
              <div className={styles.Label}>
                <span>skills & techs used</span>
                <button onClick={handleClick} >
                  {!num ? (<BiDownArrowAlt className={styles.Icon} />) : (<BiUpArrowAlt className={styles.Icon} />)}
                </button>
              </div>
              <span id="container" className={styles.skillsContainer}>
                <ul>
                  <li>html</li>
                  <li>css</li>
                  <li>javaScript</li>
                  <li>typeScript</li>
                  <li>reactJs</li>
                  <li>nextJs</li>
                  <li>threeJs</li>
                  <li>chakra-ui</li>
                </ul>
              </span>
            </div>
          </div>
          <div  className={styles.Projects} >
            <div id={styles.Projects}>
              <h2 style={{position: "absolute", top: "-10%", left: "5%"}}>Projects</h2>
              <div id="Container" className={styles.Container}>
                <span>
                    <div onClick={() => {location.href="/projects/about-page/"}} id="about" className={`${styles.Project} project`}>
                      <Image src={about} alt="about page, mental support" />
                      <p>
                        <span>About Page</span><br/><br/>
                        about page that gives it's visitors trustability and reliability to use the platform.
                      </p>
                    </div>
                </span>
                <span>
                  <div onClick={() => {location.href="/projects/lead-capture-page/"}} id="lead" className={`${styles.Project} project`}>
                    <Image src={leadPage} alt="lead capture page, example" />
                    <p>
                      <span>Lead Capture Page</span><br/><br/>
                        a page designed to generate new leads 
                        by showing it's visitors the bisuness or industry and collecting their info.
                    </p>
                  </div>
                </span>
                <span> 
                  
                  <div onClick={() => {location.href="/projects/get-started-page/"}} id="get-started" className={`${styles.Project} project`}>
                    <Image src={getStarted} alt="ecommerce project" />
                    <p>
                      <span>Get Started Page</span><br /><br />
                      academy's get started landing page .
                    </p>
                  </div>
                  
                </span>
              </div>
              <button id={styles.faceBtn} className={`${styles.oneBtn} one-btn`}><i className="fa-solid fa-chevron-right i-one"></i></button>
              <button id={styles.faceBtn} className={`${styles.twoBtn} two-btn`}><i className="fa-solid fa-chevron-left i-two"></i></button>
            </div>    
          </div>
        </section>
        <section className={styles.sectionTwo}>
          <div className={styles.Contact}>
            
            <div>
              <h2>Contact Info</h2>
              <ul>
                <li><h3>phone : +962799562745</h3></li>
                <li><h3>email : saifchan@mail.com</h3></li>
                <li><Link href={'https://github.com/SA12IF34/'} passHref><h3>GitHub Profile</h3></Link></li>
              </ul>
            </div>
          </div>
          <div className={styles.sendMsg}>
            <div>
              <h2>Send A Message :</h2>
              <form action="https://api.web3forms.com/submit"
                  method="POST" id="send-message">
                  <input type="hidden" name="access_key"
                      value="a51e0962-12dd-43c9-8339-021ca55d9582" />
                  <input type="hidden" name="redirect"
                      value="https://portfolio.landing-page.saifchan.site/" />
                  <input type="text" name="name" id="name"
                      placeholder="your name" />
                  <input type="email" name="email" id={styles.Email}
                      placeholder="your email" />
                  <br />
                  <input type="text" name="subject"
                      id={styles.Subject} placeholder="subject" />
                  <br />
                  <textarea name="body" id="message" 
                       placeholder="your message"></textarea>
                  <br />
                  <input type="submit" value="submit" />
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
