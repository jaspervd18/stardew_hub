import InfiniteScroll from "react-infinite-scroll-component";

type Post = {
  id: string;
  content: string;
  createdAt: Date;
  likeCount: number;
  likedByMe: boolean;
  user: { id: string; image: string | null; name: string | null };
};

type InfinitePostListProps = {
  isLoading: boolean;
  isError: boolean;
  hasMore: boolean;
  fetchNewPosts: () => Promise<unknown>;
  posts?: Post[];
};

export function InfinitePostList({
  posts,
  isError,
  isLoading,
  fetchNewPosts,
  hasMore,
}: InfinitePostListProps) {
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;

  if (posts == null || posts.length === 0) {
    return (
      <h2 className="my-4 text-center text-2xl text-gray-500">No Posts</h2>
    );
  }

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchNewPosts}
      hasMore={hasMore}
      loader={"Loading..."}
    >
      {posts.map((post) => {
        return <div key={post.id}>{post.content}</div>;
      })}
    </InfiniteScroll>
  );
}