import React from 'react';
import { DndProvider } from "react-dnd";
import HTML5Backend  from "react-dnd-html5-backend";
import GlobalStyles from './styles/global';
import Header from "./components/Header";
import Board from "./components/Board";
import Routes from "./router";

function App() {
  // return (
  //   <DndProvider backend={HTML5Backend}>
  //     <Header />
  //     <Board />

  //     <GlobalStyles />
  //   </DndProvider>
  // );
  return (
    <Routes />
  );
}

export default App;