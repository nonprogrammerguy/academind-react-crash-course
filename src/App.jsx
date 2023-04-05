import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader.jsx";
import {useState} from "react";

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  const showModalHandler = () => {
    setModalIsVisible(true);
  }

  const hideModalHandler = () => {
    setModalIsVisible(false);
  }

  return (
      <>
        <MainHeader onCreatePost={showModalHandler} />
        <main>
          <PostList
              hideModalHandler={hideModalHandler}
              modalIsVisible={modalIsVisible}
          />
        </main>
      </>
  );
}

export default App;
