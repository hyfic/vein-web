import React, { useState } from 'react';
import { Discharge } from '@/types/discharge';
import {
  Button,
  Center,
  Flex,
  LightMode,
  Text,
  useToast,
} from '@chakra-ui/react';
import { BsPrinter } from 'react-icons/bs';
import { PreviewHeader } from './header';
import { PreviewBioData } from './bioData';
import { PreviewSummary } from './summary';
import { useReactToPrint } from 'react-to-print';

interface Props {
  dischargeData: Discharge;
}

export const Preview: React.FC<Props> = ({ dischargeData }) => {
  const toast = useToast();
  const printContentRef = React.useRef<any>();

  const [printLoading, setPrintLoading] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => printContentRef.current,
    documentTitle: `${dischargeData.bioData?.name}` || 'discharge_details',
    onBeforeGetContent() {
      setPrintLoading(true);
    },
    pageStyle: `
      @page { 
        size: auto;  
        margin: 0;
      }
      
      @media print { 
        body { 
          -webkit-print-color-adjust: exact; 
        } 
      }
      
      @print {
        @page :footer {
            display: none
        }
    
        @page :header {
            display: none
        }
      }
      @media print {
          @page {
              margin-top: 0;
              margin-bottom: 0;
          }
          body {
              padding-top: 72px;
              padding-bottom: 72px;
          }
          @page { 
            margin-top: 30px;
            margin-bottom: 20px;
          }
          @page :first {
            margin-top: 0;
          }
      }
      `,
    onAfterPrint() {
      setPrintLoading(false);
    },
    onPrintError(err) {
      setPrintLoading(false);
      toast({
        title: 'Failed to print',
        description: err,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  return (
    <div>
      <Button
        isLoading={printLoading}
        size='lg'
        colorScheme='blue'
        variant='outline'
        onClick={handlePrint}
      >
        Print <BsPrinter className='ml-2' strokeWidth={0.8} />
      </Button>
      <LightMode>
        <Center>
          <div className='overflow-x-scroll'>
            <div
              className='min-w-[1000px] max-w-[1000px] mt-10 bg-white text-black px-10 py-3'
              ref={printContentRef}
            >
              <PreviewHeader />
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
