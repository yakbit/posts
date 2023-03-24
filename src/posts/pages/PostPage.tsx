import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { addFavorite } from "../../redux/states/favorites";
import { useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
export const PostPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loc = useLocation();
  const { id, userId, title, body } = loc.state || { title: { pathname: "/" } };
  const onNavigateBack = () => {
    navigate(-1);
  };

  const stateFavorites = useSelector((store: AppStore) => store.favorites);
  const repetido = stateFavorites?.find((item) => item.id === id);
  const onGuardarEnFavoritos = () => {
    if (repetido === undefined) {
      dispatch(
        addFavorite([
          ...stateFavorites,
          { id: id, userId: userId, title: title, body: body },
        ])
      );
      alert("Se ha añadido en la lista de favoritos");
    } else {
      alert("este post ya se encuentra en la lista de favoritos");
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-12">
        <h5>Usuario: {userId}</h5>
        <h3>{title}</h3>
        <div>{body}</div>
        <p></p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Volver
        </button>
        <button
          className="btn btn-outline-primary m-4"
          onClick={onGuardarEnFavoritos}
        >
          Añadir a favoritos
        </button>
      </div>
    </div>
  );
};
