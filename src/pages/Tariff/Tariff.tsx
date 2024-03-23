import React, {useState} from 'react';
import TariffPlanList from "../../Components/TariffPlan/TariffPlanList";
import './Tariff.css'
import {ISelectedTariffPlan, ITariffPlan} from "../../types/TariffPlan";
import TariffPlanDetail from "../../Components/TariffPlan/TariffPlanDetail";
import SelectedTariffPlan from "../../Components/TariffPlan/SelectedTariffPlan";


const initTariffPlanList : ITariffPlan[] = [
    {id : 1, title : 'Месяц', description : 'Это ежемесячная тарификация, нужно будет платить каждый месяц', cost : '30 000 ₽'},
    {id : 2, title : '3 Месяца', description : 'Это ежемесячная тарификация, нужно будет платить каждые 3 месяца', cost : '85 000 ₽'},
    {id : 3,  title : 'Год', description : 'Это ежегодная тарификация, нужно будет платить каждый год', cost : '299 000 ₽'},
]



const Tariff : React.FC= () => {

    const [selectedTariffTitle, setSelectedTariffTitle] = useState('')
    const [selectedTariff, setSelectedTariff] = useState<ITariffPlan>()


    const changeTariff = (tariff : ITariffPlan) => {
        setSelectedTariffTitle(tariff.title)
        setSelectedTariff(tariff)
    }


    return (
        <div className="Tariff">
            <h1>Вас приветствует приложение telegram-mega-parser</h1>
            {!selectedTariff && <p>Для того, чтобы воспользоваться нашим приложением,вам нужно выбрать тарифный план</p>}
            {!selectedTariff && <TariffPlanList tariffPlanList={initTariffPlanList} changeTariff={changeTariff}></TariffPlanList>}

            {selectedTariff && <SelectedTariffPlan selectedTariff={selectedTariff} changeTariff={changeTariff}></SelectedTariffPlan>}
        </div>
    );
};

export default Tariff;