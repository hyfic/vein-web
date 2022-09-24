import React from 'react';
import { DateTime } from '@/types/discharge';
import { SetState } from '@/types/react';
import { Input, Td, Tr } from '@chakra-ui/react';

interface Props {
  date: DateTime;
  setDate: SetState<DateTime>;
  title: string;
}

export const DischargeSummaryDate: React.FC<Props> = ({
  date,
  setDate,
  title,
}) => {
  return (
    <Tr>
      <Td>{title}</Td>
      <Td>
        <Input
          size='lg'
          type='date'
          variant='filled'
          value={date.date}
          onChange={(e) =>
            setDate({
              date: e.target.value,
              time: date.time,
            })
          }
        />
      </Td>
      <Td>
        <Input
          size='lg'
          type='time'
          variant='filled'
          value={date.time}
          onChange={(e) =>
            setDate({
              time: e.target.value,
              date: date.date,
            })
          }
        />
      </Td>
    </Tr>
  );
};
