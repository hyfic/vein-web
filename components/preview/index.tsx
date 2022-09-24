import React from 'react';
import { Discharge } from '@/types/discharge';
import { Button, Center, Flex, LightMode, Text } from '@chakra-ui/react';
import { BsPrinter } from 'react-icons/bs';
import { PreviewHeader } from './header';
import { PreviewBioData } from './bioData';
import { PreviewSummary } from './summary';

interface Props {
  dischargeData: Discharge;
}

export const Preview: React.FC<Props> = ({ dischargeData }) => {
  const printContentRef = React.useRef<any>();

  return (
    <div>
      <Button size='lg' colorScheme='blue' variant='outline'>
        Print <BsPrinter className='ml-2' strokeWidth={0.8} />
      </Button>
      <LightMode>
        <Center>
          <div className='overflow-x-scroll'>
            <div
              className='min-w-[1000px] max-w-[1000px] mt-10 bg-white text-black px-10 py-3'
              ref={printContentRef}
            >
              {dischargeData.header && (
                <PreviewHeader dischargeHeader={dischargeData.header} />
              )}
              {dischargeData.bioData && (
                <PreviewBioData dischargeBioData={dischargeData.bioData} />
              )}
              <h2 className='font-medium text-xl my-5 underline underline-offset-4'>
                DISCHARGE SUMMARY
              </h2>
              {dischargeData.dischargeSummary && (
                <PreviewSummary
                  dischargeSummary={dischargeData.dischargeSummary}
                />
              )}
            </div>
          </div>
        </Center>
      </LightMode>
    </div>
  );
};
