import { useLoaderData } from "react-router-dom";
import Post from './Post';
import classes from './PostList.module.css';

function PostList() {
    const posts = useLoaderData();

    return (
        <>
            {
                posts.length > 0 && (
                    <ul className={classes.posts}>
                        {
                            posts.map((post) => {
                                return <li>
                                    <Post key={post.id} id={post.id} author={post.author} body={post.body}/>
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