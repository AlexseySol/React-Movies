import React from "react";

const RadioButton = ({handelRadio,isRadio,isSearch}) => {
 

  return (
    <form action="#" className="form">
      <p>
        <label>
          <input
            className="with-gap"
            name="group1"
            type="radio"
            data-type="all"
            onChange={handelRadio}
            checked={isRadio === "all"}
          />
          <span>All</span>
        </label>
      </p>
      <p>
        <label>
          <input
            className="with-gap"
            name="group1"
            type="radio"
            onChange={handelRadio}
            data-type="movie"
            checked={isRadio === "movie"}
          />
          <span>Movies</span>
        </label>
      </p>
      <p>
        <label>
          <input
            className="with-gap"
            name="group1"
            type="radio"
            onChange={handelRadio}
            data-type="series"
            checked={isRadio === "series"}
          />
          <span>Series</span>
        </label>
      </p>
    </form>
  );
};

export { RadioButton };
