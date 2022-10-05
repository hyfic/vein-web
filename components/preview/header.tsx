import React from 'react';
import { Divider, Flex, Text } from '@chakra-ui/react';
import { BioData, DischargeSummary } from '@/types/discharge';
import { displayDate } from '@/utils/date';

interface Props {
  bioData: BioData;
  dischargeSummary: DischargeSummary;
}

export const PreviewHeader: React.FC<Props> = ({
  bioData,
  dischargeSummary,
}) => {
  return (
    <div>
      <Flex alignItems='center' justifyContent='space-between'>
        <div>
          {bioData.name && (
            <Text fontWeight='medium' fontSize='xl'>
              {bioData.name.toUpperCase()}, {bioData.age && bioData.age + '/'}
              {bioData.sex && bioData.sex[0]}
            </Text>
          )}
          {bioData.weight && (
            <Text fontSize='xl'>Weight: {bioData.weight}</Text>
          )}
          {bioData.MRDNumber && (
            <Text fontSize='xl'>MRD: {bioData.MRDNumber}</Text>
          )}
        </div>
        <div>
          {dischargeSummary.admission && (
            <Text fontSize='xl'>
              DATE OF ADMISSION: {displayDate(dischargeSummary.admission)}
            </Text>
          )}
          {dischargeSummary.discharge && (
            <Text fontSize='xl'>
              DATE OF DISCHARGE: {displayDate(dischargeSummary.discharge)}
            </Text>
          )}
          {dischargeSummary.surgery && (
            <Text fontSize='xl'>
              DATE OF SURGERY: {displayDate(dischargeSummary.surgery)}
            </Text>
          )}
        </div>
      </Flex>
      <Divider my={5} />
    </div>
  );
};
