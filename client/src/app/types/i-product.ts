import { IPhoto } from './i-photo';

export interface IProduct {
  id?: string;
  title: string;
  details: string;
  photo?: IPhoto[]
}
