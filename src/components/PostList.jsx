import {useState} from 'react';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';
import Modal from "./Modal.jsx";

function PostList ({hideModalHandler, modalIsVisible}) {
    const [posts, setPosts] = useState([]);

    const addPostsHandler = (newPost) => {
        setPosts((existingPosts) => [newPost, ...existingPosts]);
    }

    return(
        <>
            { modalIsVisible && (
                <Modal onClose={hideModalHandler} modalIsVisible={modalIsVisible}>
                    <NewPost onCloseModal={hideModalHandler} onAddPost={addPostsHandler}/>
                </Modal>
            )}
            {
                posts.length > 0 && (
                    <ul className={classes.posts}>
                        {
                            posts.map((post) => {
                                return  <li>
                                    <Post key={Math.random()} author={post.author} body={post.body} />
                                </li>;
                            })
                        }
                    </ul>
                )
            }
            {
                posts.length === 0 && <div style={{textAlign: 'center'}}>
                    <h2>No post yet</h2>
                    <p>Start adding some!</p>
                </div>
            }
        </>
    );
}

export default PostList;