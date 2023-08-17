import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ShowComments = ({ id }) => {
  // const [comments, setComments] = useState([]);
  const [responseQuery, setResponseQuery] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const getComments = async () => {
      try {
        const query = await axios.get('http://localhost:4002/posts');
        setResponseQuery(query.data);
        /**
         * Query service response
         */
        // const queryResponse = Object.values(query.data);
        // setResponseQuery(queryResponse);

        // const response = await axios.get(
        //   `http://localhost:4001/posts/${id}/comments`
        // );
        // Fixed Backend
        // const testData = typeof response.data === 'string' ? [] : response.data;
        // setComments(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, [id]);

  // console.log('responseQuery', responseQuery);
  // console.log('current', responseQuery[id]?.Comments);

  return (
    <>
      <ul className='list-disc list-inside '>
        {responseQuery[id]?.Comments.length === 0 ? (
          <>
            <li className=' text-slate-600'> Add Some Comments</li>
          </>
        ) : (
          responseQuery[id]?.Comments.map(comment => (
            <li key={comment.id}>{comment.content}</li>
          ))
        )}
      </ul>
    </>
  );
};

ShowComments.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ShowComments;
