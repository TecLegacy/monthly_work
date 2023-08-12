import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ShowComments = ({ id }) => {
  const [comments, setComments] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4001/posts/${id}/comments`
        );
        // Fixed Backend
        // const testData = typeof response.data === 'string' ? [] : response.data;
        setComments(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, [id]);

  console.log(' comments', comments);
  return (
    <>
      <ul className='list-disc list-inside '>
        {comments.length === 0 ? (
          <>
            <li className=' text-slate-600'> Add Some Comments</li>
          </>
        ) : (
          comments.map(comment => <li key={comment.id}>{comment.content}</li>)
        )}
      </ul>
    </>
  );
};

ShowComments.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ShowComments;
