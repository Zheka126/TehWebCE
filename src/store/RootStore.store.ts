import { types } from 'mobx-state-tree'
import { ContentModel } from '../models/Content.model'


const RootStore = types.model('RootStore', {
    contents: types.array(ContentModel)
})

export default RootStore