import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Layout } from "components/Layout/Layout";
import { About } from '../../Pages/About/About';
import { Contact } from '../../Pages/Contact/Contact';
import { Projects } from "Pages/Projects/Projects";


export default function App() {
    return (
  <Routes>
      <Route path="/" element={<Layout />} >
          <Route index element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
      </Route>
  </Routes>
    );
};
