import React from "react";
interface Props {
  posts: Array<{
    userId: number;
    id: number;
    title: String;
    body: String;
  }>;
  userId?: number;
}
export const getPostsByUserId = (props: Props) => {
  const { posts, userId } = props || {};

  if (userId) {
    return posts.filter((post) => post.userId === userId);
  } else return posts;
};
