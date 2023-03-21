import React from "react";
import { getPostsByUserId } from "../helpers";
import { PostCard } from "./PostCard";
interface Props {
  posts: Array<{
    userId: number;
    id: number;
    title: String;
    body: String;
  }>;
  loading: Boolean;
  error?: String;
  userId?: number;
}

export const List = (props: Props) => {
  const { posts, loading, error, userId } = props || {};
  const list = getPostsByUserId({ posts, userId });
  console.log(list);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {error && <li>Error: {error}</li>}
      {loading && <div>Loading...</div>}
      {list?.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};
