import PostCreate from './components/Posts/Index';
import ShowPost from './components/Posts/ShowPost';

function App() {
  return (
    <>
      <h1 className=' text-white '>Blog</h1>
      <PostCreate />
      <ShowPost />
    </>
  );
}

export default App;
