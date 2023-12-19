import { useNavigate } from "react-router";
import IcDelete from "../../../assets/icons/IcDelete";
import IcEdit from "../../../assets/icons/IcEdit";
import colors from "../../../common/colors";
import IcEye from "../../../assets/icons/IcEye";
import { privatePath } from "../../../utils/routers";
import { Pagination } from "../../../components/Paginnation";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ModalContext } from "../../../context";
import { ConfirmModal } from "../../../context/ConfirmModal";
import TitleAdminPage from "../../../components/admin/TitleAdminPage";
import { InputElement } from "../../../components/InputElement";
import { Button } from "../../../components/Button";
import { partnerService } from "../../../services/partnerService";
import { Params } from "../../../utils/constants";
import { useSearchParamHook } from "../../../hooks/useSearchParam";
import { PartnerCompanyRes, PartnerCompanyType, PartnerTypeMock } from "../../../types/PartnerType";
import IcPlusAdd from "../../../assets/icons/IcPlusAdd";



interface Cache {
  triggerer: boolean
  param: Params
  data: PartnerCompanyType[]
  keysearch: string
  checkbox: {
    [index: number]: boolean
  }
  totalPages: number
}

// const itemRegister:PartnerTypeMock = {
//   id: 0,
//   distributor: "ok",
//   fullName: 'Nguyễn thị chi',
//   address: 'Quỳnh Nguyên, Quỳnh Phụ, Thái Bình',
//   taxNumber: "90123",
//   contactPerson: "Nguyễn Thị tri",
//   phoneNumber: '012933283',
//   email: 'xinhgainhungoban.com',
//   imageLink: "anshin an zai",
//   mapLink: "anshin an zai"
// }
// 
// const mocks = [itemRegister, itemRegister, itemRegister];


const PartnerManagement = () => {
  const navigator = useNavigate();
  const {searchParams} = useSearchParamHook();
  const { setModal } = useContext(ModalContext);
  const [cache] = useState<Cache>({
    triggerer: false, // Refresh FE
    param: {
      page: 0,
      size: 1000,
      sort: "id,desc"
    },
    data: [],
    keysearch: "",
    checkbox: {},
    totalPages: 10
  })
  const [triggerer, setInner] = useState<boolean>(cache.triggerer);
  const setTriggerer = () => { // Cap nhat giao dien
    cache.triggerer = !cache.triggerer;
    setInner(cache.triggerer);
  }


  // Api handler (tu dong cap nhat giao dien khi goi api)
  const getData = () => {
    cleanCheckbox();
    const setter = (result:PartnerCompanyRes) => {
      cache.data = result.data;
      setTriggerer()
    }

    (cache.keysearch.length === 0?
      partnerService.getPartnersCompany(cache.param) // get alll
      .then((result:PartnerCompanyRes) => {
        setter(result);
       }):
      partnerService.searchPartnersCompany(cache.keysearch,cache.param) // search
      .then((result:PartnerCompanyRes) => {
        setter(result);
      })
    ).catch( () => {
        cache.data = [];
        setTriggerer();
      }
    )
  }


  // Xu ly goi lan dau
  useEffect(() => {
    // Check param
    const page = searchParams.get("page");
    if (page) {
      const intPage = Number(page);
      setCurrentPage(intPage > 0 && intPage <= cache.totalPages? intPage: 1);
    } else {
      setCurrentPage(1);
    }
    
    // goi api
    getData()
  },[true])



  // Pagination handler
  const setCurrentPage = (page:number) => {
    cache.param.page = page - 1;
    getData();
  }
  // Search handler
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const currentInputValue = e.target.value;
    cache.param.keysearch = currentInputValue;
    // rate limiter = 0.5 second per api call
    setTriggerer();
    setTimeout(() => { 
      if (cache.param.keysearch === currentInputValue){
        cache.param.page = 0
        getData()
      }
    },
    currentInputValue.length === 0? 0:500 );
  }
  // Handle delete btn
  const handleShowDeleteBtn = () => {
    setModal(
      <ConfirmModal onDelete={() => {
        const promises:Promise<any>[] = [];        

        Object.keys(cache.checkbox).map((key) => {
          promises.push(new Promise((resolve, reject) => {
            const id = cache.data[parseInt(key)]?.id;
            partnerService.deletePartnerCompany(id? id: 0).then(() => {
              resolve(0)
            }).catch((e) => {
              reject(e);
            })
          }))
        })

        Promise.all(promises).then(() => {
          getData();
        })

        // let ids:string = "0"
        // partnerService.deletePartnersCompany(ids)
        // .then(() => {
        //   getData();
        // }).catch(() => {
        //   alert("that bai");
        // })
      }} message="message_comfirm.contact" />
    );
  }
  // Handle delete icon
  const handleShowDeleteIcon = (id: number) => {
    setModal(
      <ConfirmModal onDelete={() => {

        partnerService.deletePartnerCompany(id)
        .then(() => {
          getData();
        }).catch(() => {
          alert("that bai");
        })
      }} message="message_comfirm.contact" />
    );
  }

  // Handle checkbox
  const handleCheckboxClick = (index: number) => {
    cache.checkbox[index] = cache.checkbox[index]? !cache.checkbox[index]: true;
    setTriggerer();
  }
  const handleCheckAll = () => {
    const checkAllTrue = isCheckAll();
    checkAllTrue ? cleanCheckbox() :
      Object.keys(cache.data).reduce( (previous:number) => {
        cache.checkbox[previous] = true;
        return previous + 1;
      },0)
    setTriggerer();
  }
  const isChecked = (index:number) => {
    return cache.checkbox[index]?true:false;
  }
  const isCheckAll = () => {
    const count = Object.keys(cache.checkbox).reduce( (previous:number, key:string) => {
      return previous + (cache.checkbox[parseInt(key)]? 1:0)
    },0)
    return cache.data?.length === count;
  }
  const cleanCheckbox = () => {
    cache.checkbox = {};
  }


  return (
    <div>
      <TitleAdminPage text="partner_list" />
      <div className="grid grid-cols-2 my-8">
        <div>
          <InputElement
            placeholder="input_key_search"
            name="name"
            value={cache.param.keysearch}
            reSearch={true}
            onChange={handleSearch}
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <Button
            color="empty"
            text="add_partner_company"
            className="px-6 py-3 !w-fit"
            imageLeft={<IcPlusAdd />}
            onClick={() => navigator(privatePath.partner.create)}
          />
          <Button
            color="cancel"
            text={"delete"}
            className="px-6 py-3 !w-fit"
            imageLeft={<IcDelete />}
            onClick={handleShowDeleteBtn}
          />
        </div>
      </div>

      <table className="w-full requesRegister">
        <thead>
          <tr className="border-b border-b-gray-_A1A0A3 text-left">
            <th className='text-base font-semibold leading-150% text-black02 whitespace-nowrap px-2'>
              <input
                className="w-4 h-4"
                type="checkbox"
                checked={isCheckAll()}
                onClick={() => {handleCheckAll()}}
              />
            </th>
            <th className='pb-2 text-base font-semibold leading-150% text-black02 whitespace-nowrap'>Tên đối tác</th>
            <th className='text-base font-semibold leading-150% text-black02 whitespace-nowrap'>Địa chỉ</th>
            <th className='text-base font-semibold leading-150% text-black02 whitespace-nowrap'>Mã số thuế</th>
            <th className='text-base font-semibold leading-150% text-black02 whitespace-nowrap'>Người liên hệ</th>
            <th className='text-base font-semibold leading-150% text-black02 whitespace-nowrap'>Điện thoại</th>
            <th className='text-base font-semibold leading-150% text-black02 whitespace-nowrap'>Email</th>
            <th className='text-base font-semibold leading-150% text-black02 whitespace-nowrap text-right'>Chức năng</th>
          </tr>
        </thead>

        <tbody className="text-sm font-normal">
          {cache.data?.map((item, index) => {
            return (
              <tr key={index} className='border-b border-b-gray-_A1A0A3 text-sm font-normal text-black02 text-left' >
                <td className='px-2 py-4'>
                  <input 
                    className="w-4 h-4"
                    type="checkbox"
                    checked={isChecked(index)}
                    onClick={() => {handleCheckboxClick(index)}}
                  />
                </td>
                <td>{item.namePartner}</td>
                <td>{item.address}</td>
                <td>{item.vat}</td>
                <td>{item.nameContact}</td>
                <td>{item.phone}</td>
                <td>{item.email} </td>

                <td>
                  <div className="flex items-center justify-end gap-2 cursor-pointer">
                    <div onClick={() => navigator(privatePath.partner.view.replace(":id",item.id + ""))}>
                      <IcEye color={colors.gray01}/>
                    </div>
                    <div onClick={() => navigator(`/quan-ly/doi-tac/${item.id}`) }>
                      <IcEdit color={colors.gray01}/>
                    </div>
                    <div onClick={() => item.id && handleShowDeleteIcon(Number(item.id))}>
                      <IcDelete/>
                    </div>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="my-8 flex justify-end ">
        <Pagination
          currentPage={(cache.param?.page? cache.param.page : 0)  + 1}
          totalPages={cache.totalPages}
          disableEffect={true}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default PartnerManagement 
