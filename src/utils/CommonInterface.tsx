import { Status } from "./CommonType";

export interface EstimateRequestCard {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: Array<string>;
  material: Array<string>;
  status: Status;
}
export interface filterOption {
  processMethod: Array<string>;
  material: Array<string>;
}
