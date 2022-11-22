import React from "react";
import { Search } from "../Search";
import { Cards } from "../Сard/Cards";
import { RadioButton } from "../Сard/RadioButton";
import "./Main.css";

const Main = ({ inState , inLoading, searchChange, isSearch, post , isRadio,handelRadio}) => {
  




  return (
    <div className="  content">
      <Search
      isRadio={isRadio}
        post={post}
        searchChange={searchChange}
        isSearch={isSearch}
      ></Search>
      <RadioButton isSearch={isSearch}  isRadio={isRadio} handelRadio={handelRadio} />
      {inLoading ? (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      ) : (
        <Cards inState={inState} inLoading={inLoading}></Cards>
      )}
    </div>
  );
};

export { Main };
