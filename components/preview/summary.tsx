import React from 'react';
import { DischargeSummary } from '@/types/discharge';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { displayTime } from '@/utils/time';

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
                <Td>Patient Allergic To</Td>
                <Td>
                  {dischargeSummary.patientAllergicTo.split('\n').map((val) => (
                    <p>{val}</p>
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
                <Td>Patient Allergic To</Td>
                <Td>
                  {dischargeSummary.department.split('\n').map((val) => (
                    <p>{val}</p>
                  ))}
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
      {(dischargeSummary.admission?.date ||
        dischargeSummary.discharge?.date ||
        dischargeSummary.surgery?.date) && (
        <div className='mt-3 border'>
          <Table fontSize='lg' variant='simple'>
            <Thead>
              <Tr>
                <Th>Date of</Th>
                <Th>Date</Th>
                <Th>Time</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dischargeSummary.admission?.date && (
                <Tr>
                  <Td>Date of Admission</Td>
                  <Td>{dischargeSummary.admission.date}</Td>
                  {dischargeSummary.admission.time && (
                    <Td>{displayTime(dischargeSummary.admission.time)}</Td>
                  )}
                  {!dischargeSummary.admission.time && <Td>-</Td>}
                </Tr>
              )}
              {dischargeSummary.discharge?.date && (
                <Tr>
                  <Td>Date of Discharge</Td>
                  <Td>{dischargeSummary.discharge.date}</Td>
                  {dischargeSummary.discharge.time && (
                    <Td>{displayTime(dischargeSummary.discharge.time)}</Td>
                  )}
                  {!dischargeSummary.discharge.time && <Td>-</Td>}
                </Tr>
              )}
              {dischargeSummary.surgery?.date && (
                <Tr>
                  <Td>Date of Surgery (if any) (Delivery)</Td>
                  <Td>{dischargeSummary.surgery.date}</Td>
                  {dischargeSummary.surgery.time && (
                    <Td>{displayTime(dischargeSummary.surgery.time)}</Td>
                  )}
                  {!dischargeSummary.surgery.time && <Td>-</Td>}
                </Tr>
              )}
            </Tbody>
          </Table>
        </div>
      )}
      <div>
        {Object.entries(dischargeSummary.summaryValues).map(
          ([key, summaryValue]: [string, any]) =>
            summaryValue.content && (
              <div key={key} className='mt-3'>
                <h2 className='text-lg font-medium'>
                  {summaryValue.title.toUpperCase()}
                </h2>
                <p className='text-lg mt-2'>
                  {summaryValue.content.split('\n').map((val: string) => (
                    <p>{val.toUpperCase()}</p>
                  ))}
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
};
