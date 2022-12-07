import React from "react";
import { List } from "./features/List";
import ViewPage from "./features/ViewPage";
import MainLayouts from "./Layouts/MainLayout/MainLayouts";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <MainLayouts>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:id" element={<ViewPage />} />
      </Routes>
    </MainLayouts>
  );
}

export default App;
