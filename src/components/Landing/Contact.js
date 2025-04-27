import styles from './Contact.module.css'
import { Form,Button } from 'react-bootstrap'

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
        <h2 className={styles.heading1}>Have a Project Idea?</h2>
        <h3 className={styles.heading2}>Contact Me</h3>
        <div className={styles.formContainer}>
            <Form className="shadow p-5">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter Subject" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Message" />
                </Form.Group>
               <Button className={styles.submitBtn} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </div>
    )
}

export default Contact