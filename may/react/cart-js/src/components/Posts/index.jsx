import { useGetPostQuery, useGetAllPostsQuery } from '@/features/apis/apiSlice';

const Posts = () => {
  const { data: singlePostData = [], isLoading } = useGetPostQuery(1);
  const { data: allPostData = [], isLoadingAllPosts } = useGetAllPostsQuery();

  let content;
  if (isLoading) {
    content = <h1>Loading...</h1>;
  } else {
    content = <h1>Data All loaded</h1>;
  }

  // const tagStructure = tags => tags.join(' ');

  return (
    <>
      {content}
      <div className='mx-auto w-5/6 bg-white p-4 rounded-xs'>
        <div className='w-3/4 mx-auto flex rounded-sm items-center justify-between gap-8 p-4'>
          <div className='text-white rounded-sm bg-slate-400 font-semibold w-2/5 flex justify-center items-center'>
            <div className='flex gap-4 flex-col items-center'>
              <h1 className='text-lg mt-4'>All Posts</h1>
              <div>
                {allPostData?.posts?.map(item => (
                  <div
                    key={item.id}
                    className='flex items-center gap-4 mb-8 py-4 px-4 flex-col justify-center bg-cyan-50 text-blue-400 w-5/6 mx-auto rounded-md'
                  >
                    <h2 className='text-center'>{item.title}</h2>
                    <div>
                      <hr className='w-full bg-slate-300' />
                      <p className='text-justify text-sm font-light font-serif p-1'>
                        {item.body}
                      </p>
                      <details>
                        {item?.tags?.map((tag, index) => (
                          <div
                            key={index}
                            className='inline-flex items-center px-3 py-1 m-2 bg-gray-200 rounded-full text-sm font-medium text-gray-700'
                          >
                            {tag}
                          </div>
                        ))}
                      </details>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='text-white bg-slate-400 font-semibold w-2/5 flex justify-center'>
            <div className='flex gap-4 flex-col'>
              <h1 className='text-lg'>Single</h1>
              <div className=''>test</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
