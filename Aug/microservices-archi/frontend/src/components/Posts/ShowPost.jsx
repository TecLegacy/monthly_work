import axios from 'axios';
import { useEffect, useState } from 'react';

import CreateComments from '../comments/CreateComments';
import ShowComments from '../comments/ShowComments';

const ShowPost = () => {
  // const [title, setTitle] = useState([]);
  const [responseQuery, setResponseQuery] = useState([]);
  useEffect(() => {
    // Fetch Post
    const fetchPosts = async () => {
      try {
        // const response = await axios.get('http://localhost:4000/posts');
        const query = await axios.get('http://localhost:4002/posts');

        /**
         * Query service response
         */
        const queryResponse = Object.values(query.data);
        setResponseQuery(queryResponse);

        // const transformedData = Object.values(response.data);
        // setTitle(transformedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
    return () => {};
  }, []);

  // console.log(responseQuery, 'Response Query');
  const PostList = responseQuery.map(element => (
    <div className='check' key={element.id}>
      <div>
        <h2 className=' text-lg font-bold tracking-wide pl-4'>
          {element.title.toUpperCase()}
        </h2>
        <div className=' ml-8 py-4'>
          <ShowComments id={element.id} />
        </div>
      </div>

      <CreateComments id={element.id} />
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
