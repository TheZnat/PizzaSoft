import React from "react";
import Header from "../Component/Header/Header";
import Search from "../Component/Search/Search";
import List from "../Component/List/List";

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <Search />
      </Header>
      <List />
    </>
  );
};

export default Home;
