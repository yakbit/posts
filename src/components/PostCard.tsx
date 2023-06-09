import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  userId: number;
  id: number;
  title: String;
  body: String;
}
export const PostCard = (props: Props) => {
  const { userId, id, title, body } = props || {};
  return (
    <div className="col">
      <div
        className="card animate__animated animate__fadeInDown"
        style={{ background: "rgb(231 209 209)" }}
      >
        <div className="row no-gutters">
          <div className="col-6">
            <div className="card-img">Usuario: {userId}</div>
          </div>
          <div className="col-12">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{body.substring(0, 80)}...</p>
              <NavLink to={`/post/${id}`} state={{ userId, id, title, body }}>
                Ver post completo
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
