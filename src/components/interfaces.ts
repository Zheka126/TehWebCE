import { Instance } from 'mobx-state-tree';
import { ContentModel } from '../models/Content.model';
import RootStore from '../store/RootStore.store';

export interface IRootStore extends Instance<typeof RootStore> {}

export interface IContentModel extends Instance<typeof ContentModel> {}

export interface IForm {
  nickname: string;
  password: string;
  email: string;
  phone: string;
  comment: string;
  gender: string;
}

export interface IUser extends IForm {
    id: string;
    adress: string;
}