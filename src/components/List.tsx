import React from "react";
interface Props {
  posts: Array<{
    userId: number;
    id: number;
    title: String;
    body: String;
  }>;
  loading: Boolean;
  error?: String;
}

export const List = (props: Props) => {
  const { posts, loading, error } = props || {};
  return (
    <ul>
      {error && <li>Error: {error}</li>}
      {loading && <div>Loading...</div>}
      {posts?.map((post) => (
        <li key={post.id}>
          <h4>{post.userId}</h4>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <br />
        </li>
      ))}
    </ul>
  );
};
