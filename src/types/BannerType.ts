export interface BannerType {
    id: number
    type: string
    link: string
}

export type typeBanner =
  | "HOME"
  | "PRODUCT"
  | "SOLUTION"
  | "DOC"
  | "POLICY"
  | "CERTIFICATE"
  | "VIDEO"
  | "STUDY"
  | "TRAINING"
  | "PARTNER"
  | "PARTNER_REGISTER"
  | "GUARANTEE"
  | "INTRO"
  | "CABLE"
  | "HISTORY"
  | "EMPLOYEE"
  | "NEWS"
  | "CONTACT"
  | "TOURNAMENT";
export type BannerData = {
  id: 0;
  type: typeBanner;
  link: string;
};