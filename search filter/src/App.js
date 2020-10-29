import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import ListComponent from "../components/list";
import SearchWidget from "../components/searchWidget";
import "./styles.css";

const data = ["soumitra", "brijesh", "prashant", "parichay"];
function App(props) {
  const [searchBoxText, setSearchBoxText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (searchBoxText && searchBoxText.length > 3) {
      const currentSearchText = searchBoxText;
      let filteredList = data.filter((item) =>
        item.includes(currentSearchText)
      );
      setItems(filteredList);
    }
  }, [searchBoxText]);

  const searchFn = () => {
    const currentSearchText = searchBoxText;
    setSearchText(currentSearchText);

    let filteredList = data.filter((item) => item.includes(currentSearchText));
    setItems(filteredList);
    setSearchBoxText("");
  };
  const handleChange = (e) => {
    console.log("searchText change", e.target.value);
    setSearchBoxText(e.target.value);
  };
  return (
    <>
      <SearchWidget
        searchFn={searchFn}
        handleChange={handleChange}
        searchBoxText={searchBoxText}
      />
      <p>{`You searched for ${searchText}`}</p>
      <hr />
      <p>Results:</p>
      <ListComponent listItems={items} />
    </>
  );
}

export default App;
