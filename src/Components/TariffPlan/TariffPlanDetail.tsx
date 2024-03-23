import React from 'react';
import {ITariffPlan} from "../../types/TariffPlan";
import './TariffPlanDetail.css'

interface TariffPlanDetailProps {
    tariffPlan : ITariffPlan
    changeTariff : (tariff : ITariffPlan) => void
}
const TariffPlanDetail : React.FC<TariffPlanDetailProps> = ({tariffPlan, changeTariff}) => {

    return (
        <div className="TariffPlanDetail">
            <h2>{tariffPlan.title}</h2>
            <p>{tariffPlan.description}</p>
            <h2>{tariffPlan.cost}</h2>
            <div className="btn">
                <button onClick={() => changeTariff(tariffPlan)}>Купить</button>
            </div>
        </div>
    );
};

export default TariffPlanDetail;