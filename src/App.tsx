import { useFetch } from "./helpers/useFetch";
import { useState } from "react";
import "./App.css";
const App = () => {
  const { posts, loading } = useFetch(
    new URL("https://jsonplaceholder.typicode.com/posts/")
  );

  posts && console.log(posts);

  return (
    <div className="App">
      {loading && <div>Loading...</div>}
      {posts?.map((post) => (
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
