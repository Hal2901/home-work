import IcArrowsNex from "../../../../assets/icons/IcArrowsNex";
import IcPlus from "../../../../assets/icons/IcPlus";
import { ImageContactCard } from "../../../../assets/images";
import { Button } from "../../../../components/Button";

export function Introduce() {
  const renderPlus = (count: number) => {
    const listPlusE: any = [];
    for (let i = 1; i <= count; i++) {
      listPlusE.push(<IcPlus key={i} />);
    }
    return listPlusE;
  };
  return (
    <div className="sc1800:px-300 xl:px-[155px] lg:px-100 xs:px-10 px-5 pb-[88px] bg-white">
      <div className="relative z-10">
        <div className="w-full grid xl:grid-cols-2 grid-cols-1 gap-y-10 pb-10 xl:mt-[120px] mt-14">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 h-full xl:pl-12">
            <div className="flex flex-col gap-6 items-center justify-center h-full">
              <img
                src={ImageContactCard}
                alt=""
                className="w-full h-[430px] object-cover"
              />
              <video
                controls
                className="w-full xl:h-160 lg:h-[240px] sm:h-200 h-300 object-cover"
              >
                <source
                  src="https://www.youtube.com/watch?v=8E6gHyeSeaM"
                  type="video/mp4"
                />
                <source
                  src="https://www.youtube.com/watch?v=8E6gHyeSeaM"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="flex flex-col gap-6 items-center justify-center h-full">
              <img
                src={ImageContactCard}
                alt=""
                className="w-full h-[290px] object-cover"
              />
              <video
                controls
                className="w-full  xl:h-160 lg:h-[240px] sm:h-200 h-300 object-cover"
              >
                <source
                  src="https://www.youtube.com/watch?v=8E6gHyeSeaM"
                  type="video/mp4"
                />
                <source
                  src="https://www.youtube.com/watch?v=8E6gHyeSeaM"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="sm:px-12 px-5 py-14 h-fit relative">
              <div className="bg-[#F2F5F8] h-full xl:w-[200%] w-full absolute top-0 right-0 z-[-1]"></div>
              <p className="2xl:text-40 text-2xl line-clamp-2 font-semibold text-[#262626] mb-5">
                Giới thiệu về LS Cable & System Việt Nam
              </p>
              <p className="text-[#262626] text-base mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuri.of type and scrambled it to
                make a type specimen book. It has survived not only five
                centuri. It has survived not only five centuri.
              </p>
              <Button
                color="primary"
                text="see_more"
                className="px-6 py-3 !w-fit"
                image={<IcArrowsNex />}
              />
              <div className="flex items-center justify-end gap-4 mt-[10px]">
                {renderPlus(6)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
