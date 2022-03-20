import ContentHeading from '../ContentHeading';
import PlanetImage from '../PlanetImage';
import data from '../../data.json';
import { useState } from 'react';
import DestinationTab from '../DestinationTab';
import PlanetDescription from '../PlanetDescription';

export default function DestinationContent({
  paddingTop = '',
  height = '',
  width = '',
}) {
  const [dataIndex, setDataIndex] = useState(0);
  const destinationData = data.destinations[dataIndex];

  return (
    <main>
      <div className={`flex ${paddingTop} ${height} ${width}`}>
        <div className="container">
          <ContentHeading
            height="h-19px sm:h-[24px] xl:h-[34px]"
            width="w-221px sm:w-[273px] xl:w-[383px]"
            span="01"
            text="PICK YOUR DESTINATION"
          />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 mt-[32px] sm:mt-[60px]">
            <div className="justify-self-center xl:justify-self-start xl:ml-[230px]">
              <PlanetImage
                height="h-[170px] sm:h-[300px] xl:h-[445px]"
                width="w-[170px] sm:w-[300px] xl:w-[445px]"
                src={destinationData.images.webp}
              />
            </div>
            <div className="container">
              <div className="justify-self-center mt-[26px] sm:mt-[53px] xl:mt-[0px]">
                <DestinationTab
                  data={data.destinations}
                  id={dataIndex}
                  onClick={(e) => setDataIndex(e.target.value)}
                />
              </div>
              <div className="justify-self-center mt-[20px] sm:mt-[32px]">
                <PlanetDescription data={destinationData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
