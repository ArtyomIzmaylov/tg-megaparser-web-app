import React from 'react';
import {Route, Routes} from "react-router-dom";
import Tariff from "../pages/Tariff/Tariff";



interface IPublicRoutesProps {
    children? : React.ReactNode
}

const PublicRoutes : React.FC<IPublicRoutesProps> = () => {
    return (
        <Routes>
            <Route path="/login" element={<Tariff/>}></Route>
        </Routes>

    );
};

export default PublicRoutes;