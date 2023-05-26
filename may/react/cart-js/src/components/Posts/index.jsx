import { useGetPostQuery, useGetAllPostsQuery } from '@/features/apis/apiSlice';

const Posts = () => {
  const { data: singlePost = [], isLoading } = useGetPostQuery(1);
  const { data: allPost = [], isLoadings } = useGetAllPostsQuery();
  console.log('isLoading', isLoading);
  console.log('isLoadings', isLoadings);

  const posts = allPost?.posts;
  if (!isLoading) {
    console.log('x', singlePost);
    console.log('x', posts);
  }

  let content;
  if (isLoading) {
    content = (
      <h1>
        <p>Loading...</p>
      </h1>
    );
  } else {
    content = (
      <h1>
        <p>Data All loaded</p>
      </h1>
    );
  }
  return (
    <>
      {content}
      <div className=' mx-auto w-5/6 bg-white p-4  rounded-xs '>
        <div className=' w-3/4   mx-auto flex  rounded-sm items-center justify-between gap-8 p-4'>
          <div className=' text-white rounded-sm   bg-slate-400 font-semibold  w-2/5 flex justify-center items-center'>
            {/* {isLoading} */}
            <div className=' flex gap-4 flex-col items-center'>
              <h1 className=' text-lg mt-4'> All Posts</h1>
              <div>
                {posts?.map(item => (
                  <div
                    key={item.id}
                    className=' flex items-center gap-4 mb-8 py-4 px-4  flex-col justify-center bg-cyan-50 text-blue-400 w-5/6 mx-auto rounded-md '
                  >
                    <h2 className=' text-center'>{item.title}</h2>
                    <div>
                      <hr className=' w-full bg-slate-300' />
                      <p className=' text-justify text-sm  font-light font-serif p-1 '>
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=' text-white bg-slate-400 font-semibold  w-2/5 flex justify-center'>
            {/* {isLoading} */}
            <div className=' flex gap-4 flex-col'>
              <h1 className=' text-lg'> Single</h1>
              <div className=''>test</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
