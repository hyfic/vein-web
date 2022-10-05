import React from 'react';
import { DischargeSummary } from '@/types/discharge';
import { ListItem, OrderedList, Table, Tbody, Td, Tr } from '@chakra-ui/react';

interface Props {
  dischargeSummary: DischargeSummary;
}

export const PreviewSummary: React.FC<Props> = ({ dischargeSummary }) => {
  return (
    <div className='mt-5'>
      <div className='border'>
        <Table fontSize='lg' variant='simple'>
          <Tbody>
            {dischargeSummary.patientAllergicTo && (
              <Tr>
                <Td>PATIENT ALLERGIC TO</Td>
                <Td>
                  {dischargeSummary.patientAllergicTo
                    .split('\n')
                    .map((val, idx) => (
                      <p key={idx}>{val}</p>
                    ))}
                </Td>
              </Tr>
            )}
            <Tr>
              <Td>MLC</Td>
              <Td>{dischargeSummary.mlc?.toString()}</Td>
            </Tr>
            {dischargeSummary.department && (
              <Tr>
                <Td>DEPARTMENT</Td>
                <Td>
                  {dischargeSummary.department.split('\n').map((val, idx) => (
                    <p key={idx}>{val}</p>
                  ))}
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
      <div>
        {Object.entries(dischargeSummary.summaryValues).map(
          ([key, summaryValue]: [string, any]) => (
            <div key={key}>
              {summaryValue.content && (
                <div className='mt-3'>
                  <h2 className='text-lg font-medium underline underline-offset-2'>
                    {summaryValue.title.toUpperCase()}
                  </h2>
                  {summaryValue.isList && (
                    <OrderedList fontSize='xl'>
                      {JSON.parse(summaryValue.content).map(
                        (val: string, idx: number) => (
                          <ListItem key={idx}>{val.toUpperCase()}</ListItem>
                        )
                      )}
                    </OrderedList>
                  )}
                  {!summaryValue.isList && (
                    <p className='text-lg mt-2'>
                      {summaryValue.content
                        .split('\n')
                        .map((val: string, idx: number) => (
                          <p key={idx}>{val.toUpperCase()}</p>
                        ))}
                    </p>
                  )}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};
