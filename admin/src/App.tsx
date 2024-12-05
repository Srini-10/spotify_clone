import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import AddSong from "./pages/AddSong.tsx";
import AddAlbum from "./pages/AddAlbum.tsx";
import ListSong from "./pages/ListSong.tsx";
import ListAlbum from "./pages/ListAlbum.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Navbar from "./components/Navbar.tsx";

export const url = "http://localhost:4000";

function App() {
  return (
    <>
      <div className="flex items-start min-h-screen">
        <ToastContainer />
        <Sidebar />

        <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]">
          <Navbar />
          <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
            <Routes>
              <Route path="/add-song" element={<AddSong />} />
              <Route path="/add-album" element={<AddAlbum />} />
              <Route path="/list-song" element={<ListSong />} />
              <Route path="/list-album" element={<ListAlbum />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
