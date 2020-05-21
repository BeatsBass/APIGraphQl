import Data from '../../models/data'

const Query = {
    hello(){
        return 'hello'
    },
    getMusic:async ()=>{
        return await Data.find()
    }
}
export default Query;