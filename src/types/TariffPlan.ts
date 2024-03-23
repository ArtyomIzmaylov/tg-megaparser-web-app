

export interface ITariffPlan {
    id : number
    title : string
    description : string
    cost : string
}

enum TariffPlan {
    OneMonth = 'OneMonth',
    ThreeMonth = 'ThreeMonth',
    OneYear = 'ThreeMonth',
}


export interface ISelectedTariffPlan {
    selectedTariff : TariffPlan
}