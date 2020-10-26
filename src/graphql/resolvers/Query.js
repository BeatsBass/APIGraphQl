import Data from '../../models/data'
import DataV2 from '../../models/dataV2'

const Query = {
    hello() {
        return 'hello'
    },
    getMusic: async () => {
        const data = await Data.aggregate([
            { $sort: { createdAt: -1 } }
        ])
        return data
    },
    getMusicV2:async () => {
        const data = await DataV2.aggregate([
            { $sort: { createdAt: -1 } }
        ])
        return data
    }
}
export default Query;
