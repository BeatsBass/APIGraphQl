import Data from '../../models/data'

const Mutation = {
    async setStatus(_, { _id, input }) {
        return await Data.findByIdAndUpdate(_id,input,{new:true})
    }
}
export default Mutation