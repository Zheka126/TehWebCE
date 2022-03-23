import { Instance } from 'mobx-state-tree'
import { ContentModel } from '../models/Content.model'
import RootStore from '../store/RootStore.store'


export interface IRootStore extends Instance<typeof RootStore> {
}

export interface IContentModel extends Instance<typeof ContentModel> {
}