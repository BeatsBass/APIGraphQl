import Data from '../../models/data'

const Query = {
    hello(){
        return 'hello'
    },
    getMusic:async ()=>{
	const data = await Data.aggregate([
		{$limit:2}	
	])
        return data
    }
}
export default Query;
