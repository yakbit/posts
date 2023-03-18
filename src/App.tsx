import { useFetch } from "./helpers/useFetch";
import { useState } from "react";
import "./App.css";
const App = () => {
  const { posts, loading, error } = useFetch(
    new URL("https://jsonplaceholder.typicode.com/posts/")
  );

  posts && console.log(posts);

  return (
    <div className="App">
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
    </div>
  );
};

export default App;
