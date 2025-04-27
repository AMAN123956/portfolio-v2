import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faFreeCodeCamp, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.topSection}>
                <h2 className={styles.logoText}>AD</h2>
                <h2 className={styles.heading1}>
                    <FontAwesomeIcon className={styles.quoteIcon} icon={faQuoteLeft} />
                    <br />
                    <br />
                    Code is Like Humour When You have to Explain It is Bad
                    <br />
                    <br />
                    <FontAwesomeIcon className={styles.quoteIcon} icon={faQuoteRight} />
                </h2>
            </div>
            <div className={styles.socialSection}>
                <a href="https://www.linkedin.com/in/aman-dixit-b371b9190/"
                    className={styles.socialIcon} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/AMAN123956"
                    className={styles.socialIcon} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithubSquare} />
                </a>
                <a href="https://www.freecodecamp.org/amandixit"
                    className={styles.socialIcon} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
            </div>
            <div className={styles.bottomSection}>
                <h2 className={styles.heading2}>
                    Designed & Coded By
                    <br />
                    <span className={styles.authorName}>Aman Dixit</span>
                </h2>
            </div>
        </div>
    )
}


export default Footer