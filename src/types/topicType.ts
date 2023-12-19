export type  topicType = 'DOC'| 'NEWS' | 'STUDY'| 'TRAINING' | 'VIDEO'| 'CERTIFICATE'| 'POLICY' | 'PRODUCT'
export type  generalPageType = 'SOLUTION' | 'PRODUCT' | 'VIDEO'| 'NEWS'

export type initialTypeTopic = {
    id?: number | null,
    link?: string,
    title: string,
    description?: string,
    content?: string,
    file?: string,
    createdDate?: string
}


export type topicsData = {
    total: number,
    data: initialTypeTopic[]
}