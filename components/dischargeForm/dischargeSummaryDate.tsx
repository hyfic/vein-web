import React from 'react';
import { SetState } from '@/types/react';
import { Input, Td, Tr } from '@chakra-ui/react';

interface Props {
  date: string;
  setDate: SetState<string>;
  title: string;
}

export const DischargeSummaryDate: React.FC<Props> = ({
  date,
  setDate,
  title,
}) => {
  return (
    <Tr>
      <Td fontSize='lg'>{title}</Td>
      <Td>
        <Input
          size='lg'
          type='date'
          variant='filled'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Td>
    </Tr>
  );
};
