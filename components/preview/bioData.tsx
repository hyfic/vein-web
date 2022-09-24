import React from 'react';
import { BioData } from '@/types/discharge';
import { LightMode, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

interface Props {
  dischargeBioData: BioData;
}

export const PreviewBioData: React.FC<Props> = ({ dischargeBioData }) => {
  return (
    <div className='border'>
      <Table fontSize='lg' variant='simple'>
        <Tbody>
          {dischargeBioData.name && (
            <Tr>
              <Td>Name of patient</Td>
              <Td>{dischargeBioData.name}</Td>
            </Tr>
          )}
          {dischargeBioData.age && (
            <Tr>
              <Td>Age</Td>
              <Td>{dischargeBioData.age}</Td>
            </Tr>
          )}
          {dischargeBioData.sex && (
            <Tr>
              <Td>Sex</Td>
              <Td>{dischargeBioData.sex}</Td>
            </Tr>
          )}
          {dischargeBioData.weight && (
            <Tr>
              <Td>Weight</Td>
              <Td>{dischargeBioData.weight}</Td>
            </Tr>
          )}
          {dischargeBioData.MRDNumber && (
            <Tr>
              <Td>MRD Number</Td>
              <Td>{dischargeBioData.MRDNumber}</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </div>
  );
};
