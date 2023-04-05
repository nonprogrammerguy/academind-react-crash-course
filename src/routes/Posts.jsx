import PostList from "../components/PostList.jsx";
import {useState} from "react";
import {Outlet} from "react-router-dom";

const Posts = () => {
  return (
      <>
          <Outlet />
          <main>
              <PostList />
          </main>
      </>
  );
}

export const loader = async () => {
    const response = await fetch('http://localhost:8080/posts');
    const responseJson = await response.json();

    return responseJson.posts;
}

export default Posts;
