import React from 'react';
import {ITariffPlan} from "../../types/TariffPlan";
import TariffPlanDetail from "./TariffPlanDetail";
import './TariffPlanDetailList.css'

interface ITariffPlanListProps {
    tariffPlanList : ITariffPlan[]
    changeTariff : (tariff : ITariffPlan) => void
}
const TariffPlanList : React.FC<ITariffPlanListProps> = ({tariffPlanList, changeTariff}) => {
    return (
        <div className="TariffPlanList">
            <TariffPlanDetail tariffPlan={tariffPlanList[0]} changeTariff={changeTariff}></TariffPlanDetail>
            <TariffPlanDetail tariffPlan={tariffPlanList[1]} changeTariff={changeTariff}></TariffPlanDetail>
            <TariffPlanDetail tariffPlan={tariffPlanList[2]} changeTariff={changeTariff}></TariffPlanDetail>
        </div>
    );
};

export default TariffPlanList;