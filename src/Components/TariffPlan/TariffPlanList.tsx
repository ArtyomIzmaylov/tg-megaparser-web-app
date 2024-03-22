import React from 'react';
import {ITariffPlan} from "../../types/TariffPlan";
import TariffPlanDetail from "./TariffPlanDetail";
import './TariffPlanDetailList.css'

const initTariffPlanList : ITariffPlan[] = [
    {title : 'Месяц', description : 'Это ежемесячная тарификация, нужно будет платить каждый месяц', cost : '30 000 ₽'},
    {title : '3 Месяца', description : 'Это ежемесячная тарификация, нужно будет платить каждые 3 месяца', cost : '85 000 ₽'},
    {title : 'Год', description : 'Это ежегодная тарификация, нужно будет платить каждый год', cost : '299 000 ₽'},
]
const TariffPlanList = () => {
    return (
        <div className="TariffPlanList">
            <TariffPlanDetail tariffPlan={initTariffPlanList[0]}></TariffPlanDetail>
            <TariffPlanDetail tariffPlan={initTariffPlanList[1]}></TariffPlanDetail>
            <TariffPlanDetail tariffPlan={initTariffPlanList[2]}></TariffPlanDetail>
        </div>
    );
};

export default TariffPlanList;