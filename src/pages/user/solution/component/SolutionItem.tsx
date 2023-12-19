import { useNavigate } from "react-router-dom";
import IcArrowsNex from "../../../../assets/icons/IcArrowsNex";
import { productCard } from "../../../../assets/images";
import colors from "../../../../common/colors";
import { Button } from "../../../../components/Button";
import { solutionType } from "../../../../types/solutionType";
import { getUrlImage, momentFormat } from "../../../../utils/constants";

interface Props {
  item: solutionType;
}
const SolutionItem = ({ item }: Props) => {
  const navigate = useNavigate();
  const handleViewDetails = (id: number) => {
    navigate(`/giai-phap/${id}`);
  };
  return (
    <div className="w-full h-[270px] flex flex-wap bg-white shadow-normal">
      <img
        src={getUrlImage(item.link)}
        alt=""
        className="w-[45%] h-full object-cover rounded-l-10"
      />
      <div className="w-[55%] p-10 flex flex-col justify-between">
        <div>
          <p className="text-xs text-disabled mb-4">
            {momentFormat(item.createdDate!)}
          </p>
          <p className="text-xl font-medium break-words line-clamp-2">
            {item.title}
          </p>
        </div>
        <Button
          color="normal"
          text="see_more"
          className="!h-8 px-4 !text-sm  !font-normal rounded-[4px] !w-fit"
          image={<IcArrowsNex color={colors.disable_color} />}
          onClick={() => handleViewDetails(item.id!)}
        />
      </div>
    </div>
  );
};

export default SolutionItem;
