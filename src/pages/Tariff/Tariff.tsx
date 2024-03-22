import React from 'react';
import TariffPlanList from "../../Components/TariffPlan/TariffPlanList";
import './Tariff.css'
const Tariff = () => {

    return (
        <div className="Tariff">
            <h1>Вас приветствует приложение telegram-mega-parser</h1>
            <p>Для того, чтобы воспользоваться нашим приложением нужно выбрать тарифный план</p>
            <TariffPlanList></TariffPlanList>
        </div>
    );
};

export default Tariff;