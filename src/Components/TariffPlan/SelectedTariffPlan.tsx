import React from 'react';
import {ITariffPlan} from "../../types/TariffPlan";
import './SelectedTariffPlan.css'

interface SelectedTariffPlanProps {
    selectedTariff : ITariffPlan
    changeTariff : (tariff : ITariffPlan) => void
    selectedTariffTitle : string
}
const SelectedTariffPlan : React.FC<SelectedTariffPlanProps> = ({selectedTariff, selectedTariffTitle, changeTariff}) => {
    return (
        <div className="SelectedTariffPlan">
            <h3>Вы выбрали тариф</h3>
            <h3>{selectedTariffTitle}</h3>
            <h3>{selectedTariff.description}</h3>
            <p>Перейдем к оплате ? </p>
            <button>Оплата</button>
            <button>Назад</button>
        </div>
    );
};

export default SelectedTariffPlan;