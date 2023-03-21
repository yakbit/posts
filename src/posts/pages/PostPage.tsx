import React from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

interface LocationState {
  userId: number;
  id: number;
  title: String;
  body: String;
}

export const PostPage = () => {
  const { id, ...rest } = useParams();
  const navigate = useNavigate();
  const loc = useLocation();
  const { userId, title, body } = loc.state || { title: { pathname: "/" } };
  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="row mt-5">
      <div className="col-12">
        <h5>Usuario: {id}</h5>
        <h3>{title}</h3>
        <div>{body}</div>
        <p></p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Volver
        </button>
      </div>
    </div>
  );
};
