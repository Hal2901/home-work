import { useNavigate } from "react-router";
import IcDelete from "../../../assets/icons/IcDelete";
import IcEdit from "../../../assets/icons/IcEdit";
import colors from "../../../common/colors";
import IcEye from "../../../assets/icons/IcEye";
import TitleAdminPage from "../../../components/admin/TitleAdminPage";
import { InputElement } from "../../../components/InputElement";
import { Button } from "../../../components/Button";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import IcPlus from "../../../assets/icons/IcPlus";
import { privatePath } from "../../../utils/routers";
import { ModalContext } from "../../../context";
import { ConfirmModal } from "../../../context/ConfirmModal";
import { WarrantyType, WarrantyTypeRes } from "../../../types/WarrantyType";
import { Params } from "../../../utils/constants";
import { guaranteeService } from "../../../services/guaranteeService";
import { useSearchParamHook } from "../../../hooks/useSearchParam";


// // MOCK DATA
// const itemRegister = {
//   id: 0,
//   warrantyId: "BH12344",
//   fullName: "Châu Kim Ngọc",
//   projectName: 'Lorem ipsum donor sit amet consectetur. Id amet quis.',
//   startDate: "null",
//   endDate: "null"
// }
// 
// const item = [itemRegister, itemRegister, itemRegister];

interface Cache {
  triggerer: boolean
  param: Params
  data: WarrantyType[]
  keysearch: string
  totalPages: number
}

const WarrantyManagement = () => {
  const navigator = useNavigate();
  const {searchParams} = useSearchParamHook();
  const { setModal } = useContext(ModalContext);

  const [cache] = useState<Cache>({
    triggerer: false, // Refresh FE
    param: {
      page: 0,
      size: 10,
      sort: "createdDate,asc"
    },
    data: [],
    keysearch: "",
    totalPages: 100
  });
  const [triggerer, setInner] = useState<boolean>(cache.triggerer); // Refresh handler 1
  const setTriggerer = () => { // exit trigger
    cache.triggerer = !cache.triggerer;
    setInner(cache.triggerer);
  }

  // Api handler (tu dong cap nhat giao dien khi goi api)
  const getData = () => {
    const setter = (result:WarrantyTypeRes) => {
      cache.data = result.data;
      setTriggerer()
    }
    
    (cache.keysearch.length === 0?
      guaranteeService.getGuarantees(cache.param) // get all
      .then((result:WarrantyTypeRes) => {
        setter(result);
       }):
      guaranteeService.searchGuarantees(cache.keysearch,cache.param) // search
      .then((result:WarrantyTypeRes) => {
        setter(result);
      })
    ).catch( () => {
        cache.data = [];
        setTriggerer();
      }
    )
  }


  useEffect(() => {
    // Check param
    const page = searchParams.get("page");
    if (page) {
      const intPage = Number(page);
      cache.param.page = (intPage > 0 && intPage <= cache.totalPages? intPage: 1) - 1;
    } else {
      cache.param.page = 0;
    }
    // goi api
    getData()
  },[true])


  // Search handler
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const currentInputValue = e.target.value;
    cache.keysearch = currentInputValue;
    // rate limiter = 0.5 second per api call
    setTriggerer();
    setTimeout(() => { 
      if (cache.keysearch === currentInputValue){
        cache.param.page = 0
        getData()
      }
    },
    currentInputValue.length === 0? 0:500 );
  }

  // Handle delete icon 
  const handleShowDeleteIcon = (id:number | string) => {
    setModal(
      <ConfirmModal onDelete={() => {
        guaranteeService.deleteGuarantee(id)
        .then(() => {
          getData();
        }).catch(() => {
          alert("that bai");
        })
      }} message="message_comfirm.warantee" />
    );
  }

  return (
    <div>
      <TitleAdminPage text={""} />
      <div className="grid grid-cols-2 my-8">
        <div>
          <InputElement
            placeholder="input_key_search"
            value={cache.keysearch}
            reSearch={true}
            onChange={handleSearch}
          />
        </div>
        <div className="flex items-center justify-end gap-6">
          <Button
            color="empty"
            text="add_warranty_btn"
            className="px-6 py-3 !w-fit"
            imageLeft={
              <span className="pr-1">
                <IcPlus />
              </span>
            }
            onClick={() => navigator(privatePath.guarantee.create)}
          />
        </div>
      </div>
      <table className="w-full requesRegister">
        <thead>
          <tr className="border-b border-b-gray-_A1A0A3 text-left">
            <th className='pb-2 text-base font-semibold leading-150% text-black02 whitespace-nowrap'>Số chứng nhận bảo hành</th>
            <th className='text-base font-semibold leading-150% text-black02 whitespace-nowrap'>Tên chủ đầu tư</th>
            <th className='text-base font-semibold leading-150% text-black02 whitespace-nowrap'>Tên dự án</th>
            <th className='text-base font-semibold leading-150% text-black02 whitespace-nowrap'>Bắt đầu</th>
            <th className='text-base font-semibold leading-150% text-black02 whitespace-nowrap'>Kết thúc</th>
            <th className='text-base font-semibold leading-150% text-black02 whitespace-nowrap text-right'>Chức năng</th>
          </tr>
        </thead>

        <tbody className="text-sm font-normal">
          {cache.data?.map((item, index) => {
            return (
              <tr key={index} className='border-b border-b-gray-_A1A0A3 text-sm font-normal text-black02 text-left' >
                <td className="py-4">{item.code}</td>
                <td>{item.fullname}</td>
                <td>{item.fullname}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>

                <td>
                  <div className="flex items-center justify-end gap-2 cursor-pointer">
                    <div onClick={() => {navigator(privatePath.guarantee.view.replace(":id",item?.id + ""))} }>
                      <IcEye color={colors.gray01}/>
                    </div>
                    <div onClick={() => {navigator(privatePath.guarantee.edit.replace(":id",item?.id + ""))} }>
                      <IcEdit color={colors.gray01}/>
                    </div>
                    <div onClick={() => handleShowDeleteIcon(item?.id? item.id : 0)}>
                      <IcDelete/>
                    </div>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default WarrantyManagement