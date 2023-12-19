import moment from "moment"
import { topicType } from "../types/topicType"

export const BASE_URL = '/services/'
//export const BASE_URL_IMAGE = 'http://192.168.1.89:8095/services/upload/api/image/'
export const BASE_URL_IMAGE = "http://192.168.1.89:4111/image/" // dinhnkp
export const IMAGE_URL = "http://192.168.1.89:4111/image/" // dinhnkp
export const SizePage = 12

export const getUrlImage = (name: string)=> {
    return BASE_URL_IMAGE+name
}
export const momentFormat = (data: string, format?: string) => {
    return moment(data).format(format || "DD/MM/YYYY")
}
export type Params = {
    type?: topicType,
    page?:number,
    size?: number,
    sort?: string,
    [key:string]: any
}