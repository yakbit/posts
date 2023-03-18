import { useEffect, useState } from "react";

export const useFetch = (url: URL) => {
  interface Post {
    userId: number;
    id: number;
    title: String;
    body: String;
  }
  const [posts, setPosts] = useState<Array<Post>>();
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading };
};
