import classes from './NewPost.module.css';
import {useState} from "react";

const NewPost = ({onCloseModal, onAddPost}) => {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    const changeBodyHandler = (event) => {
        setEnteredBody(event.target.value);
    }

    const changeAuthor = (event) => {
        setEnteredAuthor(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        let postData = {
            body: enteredBody,
            author: enteredAuthor
        };

        onAddPost(postData);

        onCloseModal();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor='body'> Text</label>
                <textarea id="body"
                          required
                          rows={3}
                          onChange={changeBodyHandler}
                />
            </p>
            <p>
                <label htmlFor='name'>Your Name</label>
                <input type="text"
                       id="name"
                       required
                       onChange={changeAuthor}
                />
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCloseModal}>Cancel</button>
                <button type="submit">Submit</button>
            </p>
        </form>
    );
}

export default NewPost;