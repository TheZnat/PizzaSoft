import React, { useEffect } from "react";
import Header from "../Component/Header/Header";
import Search from "../Component/Search/Search";
import List from "../Component/List/List";
import { useDispatch } from "react-redux";
import { fetchItems } from "../Redux/slices/data/dataSlice";
import { AppDispatch } from "../Redux/store";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

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
