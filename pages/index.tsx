import {useEffect, useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import banner from '@/public/banner.png';
import {BiDownArrowAlt, BiUpArrowAlt} from 'react-icons/bi'
import {PerformanceEvent} from 'typescript/';
import { IconType } from 'react-icons';



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
    console.log("start loading projects ...")
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
      console.log(projects[i])
      console.log(projects[i].parentElement);
      num+=difference;
    }

    btnRight.onclick = () => {
      console.log("hello")
      n+=difference;
      projectsParent.style.cssText = `transform: rotateY(${n}deg)`;
      for (let j=0; j < projects.length; j++) {
        angles[j]-=difference;
        projects[j].style.cssText = `transform: rotateY(${angles[j]}deg)`;
      }
    }

    btnLeft.onclick = () => {
      console.log("hello")
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
        <title>Hello onichan</title>
        <script src={"https://kit.fontawesome.com/9b81eb347f.js"} crossOrigin={"anonymous"} ></script>
      </Head>
      <div className={styles.mainRoot}>
        <main>
          <Image className={styles.Banner} src={banner} alt="banner" />
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
                  My name Is Saif , A fullStack web dev and landing-pages building expert. 
                  I can build for you anytype of landing-pages, such as (squeez page, get started landing page, etc...), and home pages as well.
                </p>
              </div>
              <div className={styles.two}></div>
            </div>
          </div>
          <div className={styles.Skills}>
            <div>
              <div className={styles.Label}>
                <span>landing pages building skills</span>
                <button onClick={handleClick} >
                  {!num ? (<BiDownArrowAlt className={styles.Icon} />) : (<BiUpArrowAlt className={styles.Icon} />)}
                </button>
              </div>
              <div id="container" className={styles.skillsContainer}>
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
              </div>
            </div>
          </div>
          <div  className={styles.Projects} >
            <div id={styles.Projects}>
              <h2 style={{position: "absolute", top: "0%", left: "5%"}}>Projects</h2>
              <div id="Container" className={styles.Container}>
                <span>
                  <div id="real-estate" className={`${styles.Project} project`}>
                    {/* <img src="./real-estate.png" alt="real-estate project"> */}
                    <p>
                      <span>A Real-Estate</span><br/><br/>
                      A project is built using reactJs, nextJs and several javascript
                      libraries.
                    </p>
                  </div>
                </span>
                <span>
                  <div id="blog" className={`${styles.Project} project`}>
                    {/* <img src="./blog.png" alt="blogger project"> */}
                    <p>
                      <span>A Blogger</span><br/><br/>
                      My own blogger :) .
                    </p>
                  </div>
                </span>
                <span>
                  <div id="ecommerce" className={`${styles.Project} project`}>
                    {/* <img src="./ecommerce.png" alt="ecommerce project"> */}
                    <p>
                      <span>E-commerce</span><br /><br />
                      A project that is built using djnago and reactjs.
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
                      value="/" />
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
