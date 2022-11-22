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
      try {
          await axios
        .get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=game`)
        .then((res) => setState(res.data.Search));

      setLoading(false);
      } catch (error) {
        console.log("Error")
      }
    
    }
    effect();
  }, []);

  const searchChange = (event) => {
    setSearch(event.target.value);
  };

  let post = (str='game',isRadio='all') => {
    try {
      axios
      .post(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&${`${
          isRadio !== "all" ? `&type=${isRadio}` : ""
        }`}`
      )
      .then((res) => setState(res.data.Search));
   
    } catch (error) {
      console.log("Error")
    }
    
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
