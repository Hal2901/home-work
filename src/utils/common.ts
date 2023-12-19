import { Companylogo, HistoryCard, NewCard } from "../assets/images";
import { CategoryParent } from "../types/categoriesType";
import { TypeSub, publicPath } from "./routers";

export type IconType = {
  width?: number;
  height?: number;
  color?: string;
};

export const listBreads = [
  {
    name: "product",
    path: "/san-pham",
  },
];

export const variationTh = [
  "infor_pr",
  "pr_th2",
  "cate_dau_tu",
  "type_pr",
  "enviroment_pr",
  "type_cap",
  "func",
];
export const categoriesTh = [
  "cate_1",
  "cate_2",
  "cate_3",
  "func"
]
export const categoriesSolutionTh = [
  "big_category",
  "small_category",
  "func"
]

export const actionColumns =[
  'add_col_at_left',
  'add_col_at_right',
  'delete_col'
]

export const categories :CategoryParent[] = [
  {
    id: 1,
    title: "Fiber Optic Cables",
    link: "string",
    description: "string",
    children: [
      {
        id: 1.1,
        title: "Fiber Optic Cables Sub1",
        children: [
          {
            id: 1.11,
            title: "Hệ thống mạng băng thông rộng và truy cập",
          },
          {
            id: 1.12,
            title: "Hệ thống mạng băng thông rộng và truy cập",
          },
        ],
      },
      {
        id: 1.2,
        title: "Fiber Optic Cables Sub2",
        children: [
          {
            id: 1.21,
            title: "Hệ thống mạng băng thông rộng và truy cập",
          },
          {
            id: 1.22,
            title: "Hệ thống mạng băng thông rộng và truy cập",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Fiber Optic Cables2",
    link: "string",
    description: "string",
    children: [
      {
        id: 1.1,
        title: "a",
      },
      {
        id: 1.2,
        title: "b",
      },
    ],
  },
];
export const listNameTbSpecial = ["short_category", "des_and_spe", "name_col"];
export const listDocuments = ["title", "file_attack", "upload_date"];

export const listPartnerFake = [
  {
    imageLink: Companylogo,
    companyName: "TNHH 1 thành viên A",
    address: "Địa chỉ: 123 Phạm Văn Đồng, Mai Dịch, Cầu Giấy, Hà Nội",
    taxCode: "MST021362562",
    personContact: "Nguyễn Minh Hoàng",
    hotline: "0325336258",
    email: "nguyenminhhoang@gmail.com",
    linkMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d296497.29167056415!2d105.90258342710258!3d20.967753321157094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad467c957b2d%3A0xb76c97588b21774!2sHH1%20Meco%20Complex!5e1!3m2!1sen!2s!4v1701486261173!5m2!1sen!2s",
  },
  {
    imageLink: Companylogo,
    companyName: "TNHH 1 thành viên A",
    address: "Địa chỉ: 123 Phạm Văn Đồng, Mai Dịch, Cầu Giấy, Hà Nội",
    taxCode: "MST021362562",
    personContact: "Nguyễn Minh Hoàng",
    hotline: "0325336258",
    email: "nguyenminhhoang@gmail.com",
    linkMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4630.907839993736!2d105.77389718624158!3d21.02777413786078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134559544f5bb9d%3A0x853b14475db6cba4!2zQuG6v24gWGUgTeG7uSDEkMOsbmg!5e1!3m2!1sen!2s!4v1701486179277!5m2!1sen!2s",
  },
  {
    imageLink: Companylogo,
    companyName: "TNHH 1 thành viên A",
    address: "Địa chỉ: 123 Phạm Văn Đồng, Mai Dịch, Cầu Giấy, Hà Nội",
    taxCode: "MST021362562",
    personContact: "Nguyễn Minh Hoàng",
    hotline: "0325336258",
    email: "nguyenminhhoang@gmail.com",
    linkMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4631.977151253393!2d105.86596167600514!3d20.99333168899305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac1b37f15f39%3A0xa1caa9bd661382b1!2zVGltZXMgQ2l0eSBUMTEsIDQ1OCBQLiBNaW5oIEtoYWksIEtodSDEkcO0IHRo4buLIFRpbWVzIENpdHksIEhhaSBCw6AgVHLGsG5nLCBIw6AgTuG7mWksIFZpZXRuYW0!5e1!3m2!1sen!2s!4v1701486300604!5m2!1sen!2s",
  },
];

export const dataDocumentsFake = [
  {
    title: "Đèn LED khởi động bật tắt Loại 6 Dây vá-Loại theo dõi từ xa",
    createdAt: "05/08/2020",
  },
  {
    title: "Đèn LED khởi động bật tắt Loại 6 Dây vá-Loại theo dõi từ xa",
    createdAt: "05/08/2020",
  },
  {
    title: "Đèn LED khởi động bật tắt Loại 6 Dây vá-Loại theo dõi từ xa",
    createdAt: "05/08/2020",
  },
  {
    title: "Đèn LED khởi động bật tắt Loại 6 Dây vá-Loại theo dõi từ xa",
    createdAt: "05/08/2020",
  },
  {
    title: "Đèn LED khởi động bật tắt Loại 6 Dây vá-Loại theo dõi từ xa",
    createdAt: "05/08/2020",
  },
  {
    title: "Đèn LED khởi động bật tắt Loại 6 Dây vá-Loại theo dõi từ xa",
    createdAt: "05/08/2020",
  },
];

export const dataProductSpecialFake = [
  {
    title: "Phân loại sản phẩm",
    attributes: [
      {
        categoryName: "Tính khả dụng theo khu vực",
        description: "Châu Á | Úc/New Zealand | Mỹ Latinh | Bắc Mỹ",
        columnName: "[Mô tả thông số cột]",
      },
      {
        categoryName: "Tính khả dụng theo khu vực",
        description: "Châu Á | Úc/New Zealand | Mỹ Latinh | Bắc Mỹ",
        columnName: "[Mô tả thông số cột]",
      },
      {
        categoryName: "Tính khả dụng theo khu vực",
        description: "Châu Á | Úc/New Zealand | Mỹ Latinh | Bắc Mỹ",
        columnName: "[Mô tả thông số cột]",
      },
    ],
  },
  {
    title: "Thông số chung",
    attributes: [
      {
        categoryName: "Tính khả dụng theo khu vực",
        description: "Châu Á | Úc/New Zealand | Mỹ Latinh | Bắc Mỹ",
        columnName: "[Mô tả thông số cột]",
      },
      {
        categoryName: "Tính khả dụng theo khu vực",
        description: "Châu Á | Úc/New Zealand | Mỹ Latinh | Bắc Mỹ",
        columnName: "[Mô tả thông số cột]",
      },
      {
        categoryName: "Tính khả dụng theo khu vực",
        description: "Châu Á | Úc/New Zealand | Mỹ Latinh | Bắc Mỹ",
        columnName: "[Mô tả thông số cột]",
      },
    ],
  },
];

export const listdataCardFake = [
  {
    imageLink: NewCard,
    title: "Product Marketing: Monopoly Market",
    createdAt: "22 / 12 / 2024",
  },
  {
    imageLink: NewCard,
    title: "Product Marketing: Monopoly Market",
    createdAt: "22 / 12 / 2024",
  },
  {
    imageLink: NewCard,
    title: "Product Marketing: Monopoly Market",
    createdAt: "22 / 12 / 2024",
  },
  {
    imageLink: NewCard,
    title: "Product Marketing: Monopoly Market",
    createdAt: "22 / 12 / 2024",
  },
  {
    imageLink: NewCard,
    title: "Product Marketing: Monopoly Market",
    createdAt: "22 / 12 / 2024",
  },
  {
    imageLink: NewCard,
    title: "Product Marketing: Monopoly Market",
    createdAt: "22 / 12 / 2024",
  },
];

export const listHistories = [
  {
    stage: "Giai đoạn 2020-2025",
    title: "Tiêu đề",
    descrition:
      "LS Cable & System, được thành lập vào năm 1962, đã và đang góp phần xây dựng lưới điện và mạng lưới truyền thông đầu tiên ở Hàn Quốc và sau đó là ở các nước trên thế giới bằng cách phát triển, sản xuất và cung cấp cáp cũng như các giải pháp liên quan được sử dụng trong cuộc sống hàng ngày.",
    imageLink: HistoryCard,
  },
  {
    stage: "Giai đoạn 2020-2025",
    title: "Tiêu đề",
    descrition:
      "LS Cable & System, được thành lập vào năm 1962, đã và đang góp phần xây dựng lưới điện và mạng lưới truyền thông đầu tiên ở Hàn Quốc và sau đó là ở các nước trên thế giới bằng cách phát triển, sản xuất và cung cấp cáp cũng như các giải pháp liên quan được sử dụng trong cuộc sống hàng ngày.",
    imageLink: HistoryCard,
  },
];

export const listDistributor = [
  {
    id: 1,
    name: "Nhà phân phối 1"
  },
  {
    id: 2,
    name: "Nhà phân phối 2"
  },
  {
    id: 3,
    name: "Nhà phân phối 3"
  },
]




export const solutionSubMenuFake: TypeSub[] = [
      {
        title: "Mạng băng thông rộng",
        routerPath: '',
        children: [
              {
                title: "",
                routerPath: '',
         children: [
                  {
                    title: "Drop Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor & Outdoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Outside Plant Cables",
                    routerPath: '',
                  },
                  {
                    title: "Optical Fiber",
                    routerPath: '',
                  }
                ]
              }
       ],},
      {
        title: "Trung tâm dữ liệu",
        routerPath: '',
        children: [
                  {
                    title: "",
                    routerPath: '',
             children: [
                      {
                        title: "Drop Cables",
                        routerPath: '',
                      },
                      {
                        title: "Indoor & Outdoor Cables",
                        routerPath: '',
                      },
                      {
                        title: "Indoor Cables",
                        routerPath: '',
                      },
                      {
                        title: "Outside Plant Cables",
                        routerPath: '',
                      },
                      {
                        title: "Optical Fiber",
                        routerPath: '',
                      }
                    ]
                  }
       ],},
      {
        title: "Bảo mật thiết bị và phần mềm",
         routerPath: '',
         children: [
              {
                title: "",
                routerPath: '',
         children: [
                  {
                    title: "Drop Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor & Outdoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Outside Plant Cables",
                    routerPath: '',
                  },
                  {
                    title: "Optical Fiber",
                    routerPath: '',
                  }
                ]
              }
       ],},
      {
        title: "Mạng doanh nghiệp",
         routerPath: '',
         children: [
              {
                title: "",
                routerPath: '',
         children: [
                  {
                    title: "Drop Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor & Outdoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Outside Plant Cables",
                    routerPath: '',
                  },
                  {
                    title: "Optical Fiber",
                    routerPath: '',
                  }
                ]
              }
       ],},
      {
        title: "Cung cấp dịch vụ tại nhà",
         routerPath: '',
         children: [
              {
                title: "",
                routerPath: '',
         children: [
                  {
                    title: "Drop Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor & Outdoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Outside Plant Cables",
                    routerPath: '',
                  },
                  {
                    title: "Optical Fiber",
                    routerPath: '',
                  }
                ]
              }
       ],},
      {
        title: "Địa điểm lớn",
         routerPath: '',
         children: [
              {
                title: "",
                routerPath: '',
         children: [
                  {
                    title: "Drop Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor & Outdoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Outside Plant Cables",
                    routerPath: '',
                  },
                  {
                    title: "Optical Fiber",
                    routerPath: '',
                  }
                ]
              }
       ],},
      {
        title: "Mạng được quản lý",
         routerPath: '',
         children: [
              {
                title: "",
                routerPath: '',
         children: [
                  {
                    title: "Drop Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor & Outdoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Outside Plant Cables",
                    routerPath: '',
                  },
                  {
                    title: "Optical Fiber",
                    routerPath: '',
                  }
                ]
              }
       ],},
      {
        title: "Những dịch vụ chuyên nghiệp",
         routerPath: '',
         children: [
              {
                title: "",
                routerPath: '',
         children: [
                  {
                    title: "Drop Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor & Outdoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Outside Plant Cables",
                    routerPath: '',
                  },
                  {
                    title: "Optical Fiber",
                    routerPath: '',
                  }
                ]
              }
       ],},
      {
        title: "Dịch vụ chuyên nghiệp RUCKUS",
         routerPath: '',
         children: [
              {
                title: "",
                routerPath: '',
         children: [
                  {
                    title: "Drop Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor & Outdoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Outside Plant Cables",
                    routerPath: '',
                  },
                  {
                    title: "Optical Fiber",
                    routerPath: '',
                  }
                ]
              }
       ],},
      {
        title: "Xử lý video",
         routerPath: '',
         children: [
              {
                title: "",
                routerPath: '',
         children: [
                  {
                    title: "Drop Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor & Outdoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Indoor Cables",
                    routerPath: '',
                  },
                  {
                    title: "Outside Plant Cables",
                    routerPath: '',
                  },
                  {
                    title: "Optical Fiber",
                    routerPath: '',
                  }
                ]
              }
       ],},
]
export const resourceSubMenuFake :TypeSub[] = [
      {
        title: "Danh sách dữ liệu",
        routerPath: publicPath.resource.index
      },
      {
        title: "Chính sách chung",
        routerPath: publicPath.resource.policy
      },
      // {
      //   title: "Chính sách bảo hành 25 năm",
      //   routerPath: "",
      // },
      {
        title: "Chứng nhận",
        routerPath: publicPath.resource.certificate
      },
      {
        title: "case-study",
        routerPath: publicPath.resource.caseStudy,
      },
      {
        title: "Video",
        routerPath: publicPath.resource.videos
      },
      {
        title: "trainning",
        routerPath: publicPath.resource.training
      },
]
export const partnerSubMenuFake :TypeSub[]  = [
      {
        title: "Đối tác của LS Cable & System Việt Nam",
        routerPath: publicPath.partner.index
      },
      {
        title: "Đăng ký trở thành đối tác",
        routerPath: publicPath.partner.register
      },
      {
        title: "Kiểm tra chứng nhận bảo hành",
        routerPath: publicPath.partner.checking_certificate
      }
]
export const companySubMenuFake :TypeSub[] = [
      {
        title: "Giới thiệu tổng quan LS Cable & System Vietnam",
        routerPath: publicPath.company.index
      },
      {
        title: "Lịch sử hình thành",
        routerPath: publicPath.company.history
      },
      {
        title: "Đội ngũ nhân viên",
        routerPath: publicPath.company.staff
      },
      {
        title: "Tin tức",
        routerPath: publicPath.company.news
      }
]

export const introduceGroupLeaders = [
  {
    education: {
      1979.02: "Thạc sĩ Quốc tế học, Trường Sau đại học Đại học Hàn Quốc",
      1969.02: "Trường trung học Kyungbock"
    },
    experiens: {
      2013.01: "Chủ tịch LS Cable & System",
      2009.01: " Chủ tịch, LSIS/Gaon Cable",
      2008.04: "Phó Chủ tịch Hệ thống Công nghiệp LS",
      2004.04: " Phó Chủ tịch kiêm Tổng Giám đốc Gaon Cable",
      2000.03: "Phó Chủ tịch Điều hành Cấp cao, LG Kỹ thuật & Xây dựng",
      1993.03 : "Phó Chủ tịch cấp cao, Bảo hiểm LG",
      1976.11:"Bảo hiểm LG (nay là Bảo hiểm LIG)"
    }
  },
  {
    education: {
      1979.02: "Thạc sĩ Quốc tế học, Trường Sau đại học Đại học Hàn Quốc",
      1969.02: "Trường trung học Kyungbock"
    },
    experiens: {
      2013.01: "Chủ tịch LS Cable & System",
      2009.01: " Chủ tịch, LSIS/Gaon Cable",
      2008.04: "Phó Chủ tịch Hệ thống Công nghiệp LS",
      2004.04: " Phó Chủ tịch kiêm Tổng Giám đốc Gaon Cable",
      2000.03: "Phó Chủ tịch Điều hành Cấp cao, LG Kỹ thuật & Xây dựng",
      1993.03 : "Phó Chủ tịch cấp cao, Bảo hiểm LG",
      1976.11:"Bảo hiểm LG (nay là Bảo hiểm LIG)"
    }
  },
]