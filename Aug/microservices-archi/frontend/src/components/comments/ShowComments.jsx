import PropTypes from 'prop-types';

const ShowComments = ({ comments }) => {
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
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShowComments;
