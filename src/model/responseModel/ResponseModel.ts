import { TypeResponse } from "../../enum/commom";

export interface ResponseListModel<T> {
  object?: TypeResponse.LIST
  totalCount?: number
  pageSize?: number
  pageIndex?: number
  data?: T[]
  loading?: boolean
};
