import React from "react";
import { Card } from "./Card";

const Cards = ({ inState, inLoading }) => {

  return (
    <div className="wrapper">
      {inState === undefined  ? ( 
      <h1>Ничего не найдено</h1>
    
      ) : (
       inState.map((el) => {
          return <Card key={el.imdbID} inLoading={inLoading} {...el}></Card>;
        })
      )}
    </div>
  );
};

export { Cards };
