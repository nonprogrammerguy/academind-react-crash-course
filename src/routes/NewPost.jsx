import classes from './NewPost.module.css';
import Modal from "../components/Modal.jsx";
import {Form, Link, redirect} from "react-router-dom";

const NewPost = () => {
    return (
        <Modal>
            <Form method='POST' className={classes.form}>
                <p>
                    <label htmlFor='body'> Text</label>
                    <textarea
                        id="body"
                        required
                        rows={3}
                        name="body"
                    />
                </p>
                <p>
                    <label htmlFor='name'>Your Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        name="author"
                    />
                </p>
                <p className={classes.actions}>
                    <Link to="/" type="button" >Cancel</Link>
                    <button type="submit">Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export const action = async ({request}) => {
    let formData = await request.formData();
    let postData = Object.fromEntries(formData);

    const response = await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return redirect('/');
}

export default NewPost;