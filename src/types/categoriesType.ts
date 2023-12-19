export interface CategoryParent {
  id?: number
  link: string,
  title: string,
  description: string;
  children: {
    id?: number
    title: string,
      children?: {
        id?:number,
        title: string
      }[];
    }[];
  }
  

  export type CategorySolution = {
      id?: number
      link: string,
      title: string,
      description: string,
      children:  {
        id?:number,
        title: string
      }[]
    }
export type categoriesData = {
  total: number,
  data : CategorySolution[]
}