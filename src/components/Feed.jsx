import { useGetPostsQuery } from "../features/api/baseApi";

const Feed = () => {
  const { data: posts, isLoading } = useGetPostsQuery();

  return (
    <div>
      <h2 className="card-title my-4 font-bold">Feed {posts?.length}</h2>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div className="grid grid-cols-4 gap-10 ">
          {posts?.map((post) => (
            <div key={post.id}>
              <div className="h-full rounded border p-4 ">
                <p className="card-title capitalize">{post?.title}</p>
                <p>{post?.body}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
