import { useEffect, useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  posts && console.log(posts);
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            {post.userId}
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
            <br />
          </div>
        ))}
    </div>
  );
};

export default App;
