import "./App.css";
import { Footer } from "./component/Footer/Footer";
import { Header } from "./component/Header/Header";
import { Main } from "./component/Main/Main";
import axios from "axios";
import React from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
function App() {
  const [inState, setState] = React.useState([]);
  const [inLoading, setLoading] = React.useState(true);
  const [isSearch, setSearch] = React.useState("");

  const [isRadio, setRadio] = React.useState("");

  React.useEffect(() => {
    async function effect() {
      await axios
        .get(`http://www.omdbapi.com/?apikey=8cfdb9a6&s=game`)
        .then((res) => setState(res.data.Search));

      setLoading(false);
    }
    effect();
  }, []);

  const searchChange = (event) => {
    setSearch(event.target.value);
  };

  let post = (str='game',isRadio='all') => {
    
    axios
      .post(
        `http://www.omdbapi.com/?apikey=8cfdb9a6&s=${str}&${`${
          isRadio !== "all" ? `&type=${isRadio}` : ""
        }`}`
      )
      .then((res) => setState(res.data.Search));
   
  };

  const handelRadio = (event,) => {
    setRadio(
      () => event.target.dataset.type,
       
        post(isSearch,isRadio)
      
    );
  };

  return (
    <div className="App  ">
      <Header />
      <div className="container  content">
        <Main
          inState={inState}
          handelRadio={handelRadio}
          isRadio={isRadio}
          searchChange={searchChange}
          isSearch={isSearch}
          inLoading={inLoading}
          post={post}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
