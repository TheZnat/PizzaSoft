import React from "react";
import Header from "../Component/Header/Header";

import From from "../Component/Form/From";

const Edit: React.FC = () => {
  return (
    <>
      <Header>
        <div>
          <p>Форма редоктирование данных сотрудника </p>
        </div>
      </Header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <From />
      </div>
    </>
  );
};

export default Edit;
