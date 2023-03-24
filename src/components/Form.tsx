import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/states/posts";

interface Post {
  id: number;
  userId: number;
  title: String;
  body: String;
}
interface Props {
  statePosts: Post[];
}
export const Form = (props: Props) => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const { statePosts } = props;

  return (
    <div
      style={{ maxWidth: 500 }}
      className="mx-auto animate__animated animate__bounceInLeft"
    >
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          dispatch(
            addPost([
              ...statePosts,
              {
                id: statePosts.length + 1,
                userId: parseInt(userId),
                title: title,
                body: body,
              },
            ])
          );
          alert("Post guardado correctamente");
          setUserId("");
          setTitle("");
          setBody("");
        }}
      >
        <input
          className="btn mt-1"
          style={{ borderColor: "#0dcaf0" }}
          type="text"
          name="userId"
          placeholder="userId"
          value={userId}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setUserId(ev.target.value)
          }
        />
        <input
          className="btn mt-1"
          style={{ borderColor: "#0dcaf0" }}
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(ev.target.value)
          }
        />
        <input
          className="btn mt-1"
          style={{ borderColor: "#0dcaf0" }}
          type="text"
          name="body"
          placeholder="body"
          value={body}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setBody(ev.target.value)
          }
        />
        <button className="btn btn-primary mt-4">!Guardar nuevo post!</button>
      </form>
    </div>
  );
};
