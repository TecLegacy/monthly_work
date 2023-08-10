import axios from 'axios';
import { useEffect, useState } from 'react';

import CreateComments from '../comments/CreateComments';
import ShowComments from '../comments/ShowComments';

const ShowPost = () => {
  const [title, setTitle] = useState([]);
  useEffect(() => {
    // Fetch Post
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/posts');

        const transformedData = Object.values(response.data);
        setTitle(transformedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts().catch(error => console.log(error));
    return () => {};
  }, []);

  const PostList = title.map(element => (
    <div className='check' key={element.postId}>
      <div>
        <h2 className=' text-lg font-bold tracking-wide pl-4'>
          {element.title.toUpperCase()}
        </h2>
        <div className=' ml-8 py-4'>
          <ShowComments id={element.postId} />
        </div>
      </div>

      <CreateComments id={element.postId} />
    </div>
  ));
  return (
    <>
      <hr />
      <h1 className=' my-4'>Posts</h1>
      <div className=' w-5/6  mx-auto flex items-center flex-wrap  '>
        {PostList}
      </div>
    </>
  );
};

export default ShowPost;
