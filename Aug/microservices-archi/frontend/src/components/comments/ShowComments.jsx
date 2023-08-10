import axios from 'axios';
import { useEffect, useState } from 'react';

const ShowComments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const getComments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/posts/${id}/comments`
      );
      // Fixed Backend
      const testData = typeof response.data === 'string' ? [] : response.data;
      setComments(testData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <ul className='list-disc list-inside '>
        {comments.length === 0 ? (
          <>
            <li className=' text-slate-600'> Add Some Comments</li>
          </>
        ) : (
          comments.map(comment => (
            <li key={comment.commentId}>{comment.comment}</li>
          ))
        )}
      </ul>
    </>
  );
};

export default ShowComments;
