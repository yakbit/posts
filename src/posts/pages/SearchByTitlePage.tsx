import React from "react";

export const SearchByTitlePage = () => {
  return (
    <>
      <h1>SearchByTitlePage</h1>
      <hr />
      <div className="col-5">
        <h4>Buscador</h4>
        <hr />
        <form>
          <input
            type="text"
            placeholder="Buscar..."
            className="form-control"
            name="searchTitle"
            autoComplete="off"
          />
          <button className="btn btn-outline-primary mt-1">Buscar</button>
        </form>
      </div>
    </>
  );
};
