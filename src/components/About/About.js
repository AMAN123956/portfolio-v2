import React from 'react'
import Box from '../UI/Box'
import AboutCard from '../UI/About/AboutCard'
import data from '../Collection/About'
import { frontendContent, backendContent } from '../Content/About'
import Education from './Education'
import Accomplshment from './Accomplishment'
import Footer from '../Footer/Footer'

import styles from './About.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faBullseye, faHandSpock } from '@fortawesome/free-solid-svg-icons'

function About() {
    const Title = "About Aman Dixit"
    
    return (
        <div>
        <Box headingText={Title} />  
            <div className={styles.aboutbox}>
            <img className={styles.aboutImg} src="https://lh3.googleusercontent.com/a-/AOh14GhUyGTeU-r36UsnULqRksJ9M7UM0cWv2tFfQMO1=s96-c" alt="my_image" />
                <h2 class="heading-2">Hi! Everyone  <FontAwesomeIcon icon={faHandSpock} style={{color:'blue'}}/></h2>
               <p className="content-1">
                    I have explored the world of Full Stack Development for quite , enough for me to say it has turned into a passion for me now.I am an Open source Enthusiast who loves in contributing to other's project.
                    A True Team Man and a spirited Person with great Passion for Collabrating.
                </p>
                <p className="content-1">
                   I work to make a better web; one that is fast, easy to use, beautiful, accessible to all, and frustration-free. Regardless of your specific business requirements, in solving
                    these challenges, you have a great chance of finding success online.
                </p>
                <p className="content-1">
                    My main experience is in back-end development but I also
                    have a passion for front-end development.Since modern website construction
                    need amalgum of both frontend and backend technologies and I feel having
                    experience of working with both frontend and backend technologies help in
                    making applications that are optimal for users.
               </p>
                <p className="content-1">
                    I can quickly and efficiently join your team
                    using continuous-integration methods and tools such as Git
                    and Bit Bucket.
                </p>
                {/* Frontend Section */}
            
                <h2 className="heading-2">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} style={{color:'red'}}/>Front-end Developer
                </h2>
                <p className="content-1">
                    I use HTML, CSS, Javascript to build beautiful and user-interactive
                    front-end web applications that are adaptable to every devices and browsers.
                </p>
                {/* Second Sectiong */}
                <div className={styles.twosection}>
                    <div className={styles.leftsection}>
                        <p className="content-1">
                          {frontendContent[0]}
                        </p>
                        <p className="content-1">
                           {frontendContent[1]}
                        </p>
                    </div>
                    <div className={styles.rightsection}>
                        <div className={styles.skillbox}>
                        <h3>Skills</h3>
                        {data.map((item) => (
                            <AboutCard skilltitle={item.title}
                                iconurl={item.imgurl}
                            />
                        ))}
                        </div>
                        


                    </div>
                </div>

                {/* Backend Section */}
                <br />
                <h2 className="heading-2">
                     <FontAwesomeIcon icon={faArrowAltCircleRight} style={{color:'red'}}/>Back-end Developer
                </h2>
                <p className="content-1">
                    {backendContent[0]}
                </p>
                {/* Second Sectiong */}
                <div className={styles.twosection}>
                    <div className={styles.leftsection}>
                        <p className="content-1">
                          {backendContent[0]}
                        </p>
                        <p className="content-1">
                           {backendContent[1]}
                        </p>
                    </div>
                    <div className={styles.rightsection}>
                        <div className={styles.skillbox}>
                        <h3>Skills</h3>
                        {data.map((item) => (
                            <AboutCard skilltitle={item.title}
                                iconurl={item.imgurl}
                            />
                        ))}
                        </div>
                        


                    </div>
                </div>
                {/* Education Section */}
                <hr />
                <div className={styles.educationSection}>
                    <h2 className="heading-2">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} style={{color:'red'}}/>  EDUCATION
                    </h2>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Education />
                    
                </div>
                {/* Accomplishments Section */}
                <hr />
                <div className={styles.accomplishmentSection}>
                    <h2 className="heading-2">
                        <FontAwesomeIcon icon={faArrowAltCircleRight} style={{ color: 'red' }} /> ACCOMPLISHMENTS
                    </h2>
                    <br />
                    <Accomplshment />
                </div>
                <br />
                <hr />
            </div>
            <Footer />
       </div>
    );
}

export default About
