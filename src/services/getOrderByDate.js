import { listWonDeals } from '../utils/pipedriveUtils'

export const getOrderByDate = async (date)=>{
    const listDeals = await listWonDeals();
    const listDealsInDate = listDeals.data.filter(deal => {
        const dateDeal = new Date(deal.won_time.split(" ")[0])
        return date.getTime() === dateDeal.getTime()
    })
    return listDealsInDate
}