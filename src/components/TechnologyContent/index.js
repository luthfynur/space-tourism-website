import ContentHeading from '../ContentHeading';
import data from '../../data.json';
import { useState } from 'react';
import TechnologyImage from '../TechnologyImage';
import TechnologyTab from '../TechnologyTab';
import TechnologyDesc from '../TechnologyDesc';

export default function TechnologyContent({
  height = '',
  width = '',
  paddingTop = '',
}) {
  const [dataIndex, setDataIndex] = useState(0);
  const techData = data.technology[dataIndex];

  return (
    <main>
      <div className={`flex ${height} ${width} ${paddingTop}`}>
        <div className="container xl:hidden">
          <ContentHeading
            height="h-19px sm:h-[24px]"
            width="w-221px sm:w-[273px]"
            span="03"
            text="SPACE LAUNCH 101"
          />
          <div className="grid grid-cols-1 w-screen mt-[32px] sm:mt-[60px]">
            <div className="w-full h-full">
              <TechnologyImage
                src={techData.images.landscape}
                height="h-[170px] sm:h-[310px] sm:object-cover"
                width="w-full"
                visibility="block xl:hidden"
              />
            </div>
            <div className="grid grid-cols-1 w-full gap-0 mt-[34px] sm:mt-[56px]">
              <TechnologyTab
                id={dataIndex}
                data={data.technology}
                onClick={(e) => setDataIndex(e.target.value)}
              />
              <TechnologyDesc data={techData} />
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="relative hidden xl:block xl:w-full">
          <ContentHeading
            height="h-19px sm:h-[24px] xl:h-[34px]"
            width="w-221px sm:w-[273px] xl:w-[400px]"
            span="03"
            text="SPACE LAUNCH 101"
          />
          <div className="flex">
            <TechnologyTab
              id={dataIndex}
              data={data.technology}
              onClick={(e) => setDataIndex(e.target.value)}
            />
            <TechnologyDesc data={techData} />
            <div className="w-[515px] absolute right-0">
              <TechnologyImage
                src={techData.images.portrait}
                height="h-[527px]"
                width="w-full"
                visibility="block object-cover z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
