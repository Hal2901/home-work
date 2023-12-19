import { lazy } from "react";
import IcBanner from "../assets/icons/IcBanner";
import IcBox from "../assets/icons/IcBox";
import IcCategory from "../assets/icons/IcCategory";
import IcCertificate from "../assets/icons/IcCertificate";
import IcGuarantee from "../assets/icons/IcGuarantee";
import IcMessage from "../assets/icons/IcMessage";
import IcNews from "../assets/icons/IcNews";
import IcPartnerMn from "../assets/icons/IcPartnerMn";
import IcRequestPartner from "../assets/icons/IcRequestPartner";
import IcResource from "../assets/icons/IcResource";
import IcThor from "../assets/icons/IcThor";
import IcVideo from "../assets/icons/IcVideo";

export type TypeSub = {
  id?: number;
  title: string;
  routerPath: string;
  children?: {
    id?: number;
    title: string;
    routerPath: string;
    children?: {
      id?: number;
      title: string;
      routerPath: string;
    }[];
  }[];
};

export type routeType = {
  name: string;
  path: string;
  hidden?: boolean;
  element: any;
  icon?: any;
  typeMenu?:
    | "product"
    | "solution"
    | "resource"
    | "partner"
    | "company"
    | "contact"
    | "sport";
};
export type navType = {
  name: string;
  path: string;
  icon: any;
};

const Home = lazy(() => import("../pages/user/home"));
const Products = lazy(() => import("../pages/user/product"));
const ProductDetails = lazy(
  () => import("../pages/user/product/ProductDetails")
);
const Solution = lazy(() => import("../pages/user/solution"));
const SolutionDetails = lazy(
  () => import("../pages/user/solution/SolutionDetails")
);
const Resources = lazy(() => import("../pages/user/resources"));
const GeneralPolicy = lazy(
  () => import("../pages/user/resources/GeneralPolicy")
);
const Certification = lazy(
  () => import("../pages/user/resources/Certification")
);
const Videos = lazy(() => import("../pages/user/resources/Videos"));
const Partner = lazy(() => import("../pages/user/partner"));
const RegisterToBecomeAPartner = lazy(
  () => import("../pages/user/partner/RegisterToBecomeAPartner")
);
const CheckWarrantyCertificate = lazy(
  () => import("../pages/user/partner/CheckWarrantyCertificate")
);
const Company = lazy(() => import("../pages/user/company"));
const News = lazy(() => import("../pages/user/company/News"));
const NewsDetails = lazy(() => import("../pages/user/company/NewsDetails"));
const Staff = lazy(() => import("../pages/user/company/Staff"));
const Histories = lazy(() => import("../pages/user/company/Histories"));
const Contact = lazy(() => import("../pages/user/contact"));

// elements add min
const CategoriesProducts = lazy(
  () => import("../pages/admin/categoriesProducts")
);

const Productpage = lazy(() => import("../pages/admin/products"));
const EditProduct = lazy(() => import("../pages/admin/products/EditProduct"));
const SolutionPage = lazy(() => import("../pages/admin/solution"));
const EditSolution = lazy(() => import("../pages/admin/solution/EditSolution"));
const CategoriesSolution = lazy(
  () => import("../pages/admin/categoriesSolution")
);
const ListDocumentsPage = lazy(() => import("../pages/admin/listDocuments"));
const EditDocument = lazy(
  () => import("../pages/admin/listDocuments/EditDocument")
);
const ListTrainingMngt = lazy(
  () => import("../pages/admin/listDocuments/ListTrainingMngt")
);

const EditDocumentTraining = lazy(
  () => import("../pages/admin/listDocuments/EditDocumentTraining")
);

const CertificationPage = lazy(() => import("../pages/admin/certification"));
const EditCertificate = lazy(
  () => import("../pages/admin/certification/EditCertificate")
);
const CaseStudyMngt = lazy(() => import("../pages/admin/CaseStudy"));

const VideosMngt = lazy(() => import("../pages/admin/videos"));
const EditVideo = lazy(() => import("../pages/admin/videos/EditVideo"));

const NewsMngt = lazy(() => import("../pages/admin/news"));
const EditNew = lazy(() => import("../pages/admin/news/EditNew"));
const Pages = () => {
  return <div>default Page</div>;
};

// Dinhnkp
const BannerManagement = lazy(() => import("../pages/admin/banner"));

const WarrantyManagement = lazy(() => import("../pages/admin/warranty"));
const EditWarranty = lazy(() => import("../pages/admin/warranty/EditWarranty"));

// const EditVideo = lazy(() => import("../pages/admin/video/EditVideo"));

const RequestPartnerManagement = lazy(
  () => import("../pages/admin/requestPartner")
);
const RequestAdvisoryManagement = lazy(
  () => import("../pages/admin/requestAdvisory")
);
const PartnerManagement = lazy(() => import("../pages/admin/partner"));

const EditPartner = lazy(() => import("../pages/admin/partner/EditPartner"));

const publicPath = {
  resource: {
    index: "/tai-nguyen",
    policy: "/tai-nguyen/chinh-sach-chung",
    certificate: "/tai-nguyen/chung-nhan",
    videos: "/tai-nguyen/videos",
    caseStudy: "/tai-nguyen/case-study",
    training: "/tai-nguyen/training",
  },
  product: {
    index: "/san-pham",
    details: "/san-pham/:id",
  },
  solution: {
    index: "/giai-phap",
    details: "/giai-phap/:id",
  },
  partner: {
    index: "/doi-tac",
    register: "/doi-tac/dang-ki",
    checking_certificate: "/doi-tac/kiem-tra-chung-nhan-bao-hanh",
  },
  company: {
    index: "/cong-ty",
    history: "/cong-ty/lich-su",
    news: "/cong-ty/tin-tuc",
    newsDetails: "/cong-ty/tin-tuc/:id",
    staff: "/cong-ty/nhan-vien",
  },
  contact: {
    index: "/lien-he",
  },
  sport: {
    index: "/sport-tournement",
  },
};

const publicRoutes: routeType[] = [
  {
    name: "Trang chủ",
    path: "/",
    element: Home,
  },

  // PRODUCT
  {
    name: "product",
    path: publicPath.product.index,
    element: Products,
    typeMenu: "product",
  },
  {
    name: "Chi tiết sản phẩm",
    path: "/san-pham/:id",
    element: ProductDetails,
    hidden: true,
  },

  // SOLUTION
  {
    name: "solution",
    path: publicPath.solution.index,
    element: Solution,
    typeMenu: "solution",
  },
  {
    name: "Chi tiết giải pháp",
    path: publicPath.solution.details,
    element: SolutionDetails,
    hidden: true,
  },

  // RESOURCES
  {
    name: "Tài nguyên",
    path: publicPath.resource.index,
    element: Resources,
    typeMenu: "resource",
  },
  {
    name: "training",
    path: publicPath.resource.training,
    element: () => <Resources typePage="TRAINING" />,
    hidden: true,
  },
  {
    name: "general_policy",
    path: publicPath.resource.policy,
    element: GeneralPolicy,
    hidden: true,
  },
  {
    name: "Chứng nhận",
    path: publicPath.resource.certificate,
    element: Certification,
    hidden: true,
  },
  {
    name: "Videos",
    path: publicPath.resource.videos,
    element: Videos,
    hidden: true,
  },
  {
    name: "case-study",
    path: publicPath.resource.caseStudy,
    element: GeneralPolicy,
    hidden: true,
  },

  // PART NER
  {
    name: "Đối tác",
    path: publicPath.partner.index,
    element: Partner,
    typeMenu: "partner",
  },
  {
    name: "Đăng kí đối tác",
    path: publicPath.partner.register,
    element: RegisterToBecomeAPartner,
    hidden: true,
  },
  {
    name: "Kiểm tra chứng nhận bảo hành",
    path: publicPath.partner.checking_certificate,
    element: CheckWarrantyCertificate,
    hidden: true,
  },

  // COMPANY
  {
    name: "Công ty",
    path: publicPath.company.index,
    element: Company,
    typeMenu: "company",
  },
  {
    name: "Lịch sử hình thành và phát triển",
    path: publicPath.company.history,
    element: Histories,
    hidden: true,
  },
  {
    name: "Tin tức",
    path: publicPath.company.news,
    element: News,
    hidden: true,
  },
  {
    name: "Chi tiết tin tức",
    path: publicPath.company.newsDetails,
    element: NewsDetails,
    hidden: true,
  },

  // STAFF
  {
    name: "Nhân viên",
    path: publicPath.company.staff,
    element: Staff,
    hidden: true,
  },

  // CONTACT
  {
    name: "Liên hệ",
    path: publicPath.contact.index,
    element: Contact,
    typeMenu: "contact",
  },

  // SPORT
  {
    name: "Sport Tournement",
    path: publicPath.sport.index,
    element: GeneralPolicy,
    typeMenu: "sport",
  },
];

const privatePath = {
  banner: { index: "/quan-ly/banner" },
  product_category: {
    index: "/quan-ly/danh-muc-san-pham",
  },
  product: {
    index: "/quan-ly/san-pham",
    create: "/quan-ly/san-pham/them-san-pham",
    edit: "/quan-ly/san-pham/:id",
  },
  solution: {
    index: "/quan-ly/danh-muc-giai-phap",
    solution: "/quan-ly/giai-phap",
    create: "/quan-ly/giai-phap/them-giai-phap",
    edit: "/quan-ly/giai-phap/:id",
  },
  resource: {
    index: "/quan-ly/danh-sach-tai-lieu",
    create: "/quan-ly/danh-sach-tai-lieu/them-tai-lieu",
    edit: "/quan-ly/danh-sach-tai-lieu/:id",
  },
  training: {
    index: "/quan-ly/danh-sach-tai-lieu-training",
    create: "/quan-ly/danh-sach-tai-lieu-training/them-tai-lieu",
    edit: "/quan-ly/danh-sach-tai-lieu-training/:id",
  },
  guarantee: {
    index: "/quan-ly/thong-tin-bao-hanh",
    view: "/quan-ly/thong-tin-bao-hanh/xem-thong-tin-bao-hanh/:id",
    create: "/quan-ly/thong-tin-bao-hanh/them-thong-tin-bao-hanh",
    edit: "/quan-ly/thong-tin-bao-hanh/:id",
  },
  certificate: {
    index: "/quan-ly/thong-tin-chung-nhan",
    create: "/quan-ly/thong-tin-chung-nhan/them-chung-nhan",
    edit: "/quan-ly/thong-tin-chung-nhan/:id",
  },
  video: {
    index: "/quan-ly/video",
    create: "/quan-ly/video/them-video",
    edit: "/quan-ly/video/:id",
  },
  news: {
    index: "/quan-ly/tin-tuc",
    create: "/quan-ly/tin-tuc/them-tin-tuc",
    edit: "/quan-ly/tin-tuc/:id",
  },
  caseStudy: {
    index: "/quan-ly/thong-tin-case-study",
  },
  policy: {
    index: "/quan-ly/chinh-sach",
  },
  request: {
    index: "/quan-ly/yeu-cau-tro-thanh-doi-tac",
  },
  contact: {
    index: "/quan-ly/lien-he",
  },
  partner: {
    index: "/quan-ly/doi-tac",
    view: "/quan-ly/doi-tac/xem-doi-tac/:id",
    create: "/quan-ly/doi-tac/them-doi-tac",
    edit: "/quan-ly/doi-tac/:id",
  },
};
const privateRoutes: routeType[] = [
  {
    name: "navBar.banner_mn",
    path: privatePath.banner.index,
    icon: IcBanner,
    element: BannerManagement,
  },
  {
    name: "navBar.product_category_mn",
    path: privatePath.product_category.index,
    icon: IcCategory,
    element: CategoriesProducts,
  },
  // Product
  {
    name: "navBar.product_mn",
    path: privatePath.product.index,
    icon: IcBox,
    element: Productpage,
  },
  {
    name: "navBar.create_product",
    path: privatePath.product.create,
    icon: IcBox,
    element: EditProduct,
    hidden: true,
  },
  {
    name: "navBar.edit_product",
    path: privatePath.product.edit,
    icon: IcBox,
    element: EditProduct,
    hidden: true,
  },
  // Solution Category
  {
    name: "navBar.solution_category_mn",
    path: privatePath.solution.index,
    icon: IcCategory,
    element: CategoriesSolution,
  },
  // Solution
  {
    name: "navBar.solution_mn",
    path: privatePath.solution.solution,
    icon: IcThor,
    element: SolutionPage,
  },
  {
    name: "navBar.solution_mn",
    path: privatePath.solution.create,
    icon: IcThor,
    element: EditSolution,
    hidden: true,
  },
  {
    name: "navBar.solution_mn",
    path: privatePath.solution.edit,
    icon: IcThor,
    element: EditSolution,
    hidden: true,
  },
  // document
  {
    name: "navBar.list_resource",
    path: privatePath.resource.index,
    icon: IcResource,
    element: ListDocumentsPage,
  },
  {
    name: "navBar.list_resource",
    path: privatePath.resource.create,
    icon: IcResource,
    element: EditDocument,
    hidden: true,
  },
  {
    name: "navBar.list_resource",
    path: privatePath.resource.edit,
    icon: IcResource,
    element: EditDocument,
    hidden: true,
  },

  // training
  {
    name: "navBar.list_resource_training",
    path: privatePath.training.index,
    icon: IcResource,
    element: ListTrainingMngt,
  },
  {
    name: "navBar.list_resource",
    path: privatePath.training.create,
    icon: IcResource,
    element: EditDocumentTraining,
    hidden: true,
  },
  {
    name: "navBar.list_resource",
    path: privatePath.training.edit,
    icon: IcResource,
    element: EditDocumentTraining,
    hidden: true,
  },

  // warranty
  {
    name: "navBar.info_guarantee_mn",
    path: privatePath.guarantee.index,
    icon: IcGuarantee,
    element: WarrantyManagement,
  },
  {
    name: "navBar.info_guarantee_mn",
    path: privatePath.guarantee.create,
    icon: IcGuarantee,
    element: () => {
      return <EditWarranty type="add" />;
    },
    hidden: true,
  },
  {
    name: "navBar.info_guarantee_mn",
    path: privatePath.guarantee.edit,
    icon: IcGuarantee,
    element: () => {
      return <EditWarranty type="edit" />;
    },
    hidden: true,
  },
  {
    name: "navBar.info_guarantee_mn",
    path: privatePath.guarantee.view,
    icon: IcGuarantee,
    element: () => {
      return <EditWarranty type="view" />;
    },
    hidden: true,
  },

  // Certification
  {
    name: "navBar.info_certification_mn",
    path: privatePath.certificate.index,
    icon: IcCertificate,
    element: CertificationPage,
  },
  {
    name: "navBar.info_certification_mn",
    path: privatePath.certificate.create,
    icon: IcCertificate,
    element: EditCertificate,
    hidden: true,
  },
  {
    name: "navBar.info_certification_mn",
    path: privatePath.certificate.edit,
    icon: IcCertificate,
    element: EditCertificate,
    hidden: true,
  },
  // Video
  {
    name: "navBar.video_mn",
    path: privatePath.video.index,
    icon: IcVideo,
    element: VideosMngt,
  },
  {
    name: "navBar.video_mn",
    path: privatePath.video.create,
    icon: IcVideo,
    element: EditVideo,
    hidden: true,
  },
  {
    name: "navBar.video_mn",
    path: privatePath.video.edit,
    icon: IcVideo,
    element: EditVideo,
    hidden: true,
  },
  // new
  {
    name: "navBar.news_mn",
    path: privatePath.news.index,
    icon: IcNews,
    element: NewsMngt,
  },
  {
    name: "navBar.news_mn",
    path: privatePath.news.create,
    icon: IcNews,
    element: EditNew,
    hidden: true,
  },
  {
    name: "navBar.news_mn",
    path: privatePath.news.edit,
    icon: IcNews,
    element: EditNew,
    hidden: true,
  },
  // case-study
  {
    name: "navBar.case_study_mn",
    path: privatePath.caseStudy.index,
    icon: IcNews,
    element: CaseStudyMngt,
    // hidden: true,
  },
  {
    name: "navBar.policy",
    path: privatePath.policy.index,
    icon: IcNews,
    element: () => <CaseStudyMngt typePage="POLICY" />,
  },
  // Request Partner Management
  {
    name: "navBar.request_partner_mn",
    path: privatePath.request.index,
    icon: IcRequestPartner,
    element: RequestPartnerManagement,
  },
  // Request Advisory (Contact)
  {
    name: "navBar.contact_mn",
    path: privatePath.contact.index,
    icon: IcMessage,
    element: RequestAdvisoryManagement,
  },

  // Partner Company (quan ly doi tac)
  {
    name: "navBar.partner_mn",
    path: privatePath.partner.index,
    icon: IcPartnerMn,
    element: PartnerManagement,
  },
  {
    name: "navBar.partner_mn",
    path: privatePath.partner.view,
    icon: IcPartnerMn,
    element: () => {
      return <EditPartner type="view" />;
    },
    hidden: true,
  },
  {
    name: "navBar.partner_mn",
    path: privatePath.partner.create,
    icon: IcPartnerMn,
    element: () => {
      return <EditPartner type="add" />;
    },
    hidden: true,
  },
  {
    name: "navBar.partner_mn",
    path: privatePath.partner.edit,
    icon: IcPartnerMn,
    element: () => {
      return <EditPartner type="edit" />;
    },
    hidden: true,
  },
];

export { privatePath, privateRoutes, publicRoutes, publicPath };
