import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Layout } from "components/Layout/Layout";
import {About} from '../../Pages/About/About';
import { Skills } from '../../Pages/Skills/Skills';
import { Contact } from '../../Pages/Contact/Contact';
import { SkillsList } from "components/SkillsComponent/SkillsList/SkillsList";


export default function App() {
    return (                   
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<About />} />
                <Route path="/skills" element={<Skills />}>
                    <Route path="/skills/list" element={<SkillsList/>} />
                </Route>
                <Route path="/contact" element={<Contact />} />
            </Route>                    
        </Routes>
    );
};
