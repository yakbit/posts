import { useEffect, useState } from "react";

export const useFetch = (url: URL) => {
  interface Post {
    userId: number;
    id: number;
    title: String;
    body: String;
  }

  interface useFetchState {
    posts: Array<Post>;
    loading: Boolean;
    error: String;
  }

  const [posts, setPosts] = useState<useFetchState["posts"]>([]);
  const [loading, setLoading] = useState<useFetchState["loading"]>(true);
  const [error, setError] = useState<useFetchState["error"]>("");

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())

      .then((data) => setPosts(data))
      .catch((error) => setError(error))

      .finally(() => setLoading(false));
  }, []);

  return { posts, loading, error };
};
