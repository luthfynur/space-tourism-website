import ContentHeading from '../ContentHeading';
import data from '../../data.json';
import { useState } from 'react';
import CrewImage from '../CrewImage';
import CrewIndicator from '../CrewIndicator';
import CrewDescription from '../CrewDescription';

export default function CrewContent({ height, width, paddingTop }) {
  const [dataIndex, setDataIndex] = useState(0);
  const crewData = data.crew[dataIndex];

  return (
    <main>
      <div className={`flex ${height} ${width} ${paddingTop}`}>
        <div className="container">
          <ContentHeading
            height="h-19px sm:h-[24px] xl:h-[34px]"
            width="w-221px sm:w-[273px] xl:w-[383px]"
            span="02"
            text="MEET YOUR CREW"
          />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 mt-[32px] sm:mt-[60px] xl:mt-[154px]">
            <div
              className="container xl:relative w-full h-full max-w-[327px] sm:max-w-[700px] xl:max-w-[1440px] 
              max-h-[223px] left-[24px] right-[24px] xl:left-[81.43px] xl:right-[0px] xl:bottom-[212px] ml-auto mr-auto xl:ml-[0px] xl:mr-[0px]"
            >
              <CrewImage
                src={crewData.images.webp}
                height="h-[222px] sm:h-[532px] xl:h-[712px] sm:mt-[40px] xl:mt-[0px] ml-auto mr-auto
                  xl:ml-0 xl:mr-0"
                alt={crewData.name}
              />
              <div className="relative w-full max-w-[327px] h-[1px] bg-[#383B4B] ml-auto mr-auto sm:hidden" />
            </div>
            <div className="justify-self-center mt-[32px] sm:mt-[40px] sm:-order-1 xl:hidden">
              <CrewIndicator
                data={data.crew}
                id={dataIndex}
                onClick={(e) => setDataIndex(e.target.value)}
              />
            </div>
            <div className="justify-self-center xl:justify-self-start mt-[32px] sm:mt-[0px] xl:mt-[0px] sm:-order-2">
              <CrewDescription data={crewData} />
              <div className="hidden xl:ml-[165.5px] xl:mt-[120px] xl:block">
                <CrewIndicator
                  data={data.crew}
                  id={dataIndex}
                  onClick={(e) => setDataIndex(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
