import React from 'react';
import { SetState } from '@/types/react';
import { DischargeSummaryValues } from '@/types/discharge';
import { DischargeSummaryValue } from './dischargeSummaryValue';
import { Button } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';

interface Props {
  summaryValues: any;
  setSummaryValues: SetState<any>;
}

export const DischargeSummaryValueForm: React.FC<Props> = ({
  summaryValues,
  setSummaryValues,
}) => {
  const editDischargeSummaryValue = (
    key: string,
    title: string,
    content: string,
    isList: boolean
  ) => {
    setSummaryValues({
      ...summaryValues,
      [key]: {
        title,
        content,
        isList,
      },
    });
  };

  const removeDischargeSummaryValue = (key: string) => {
    let filteredSummaryValues = summaryValues;
    delete filteredSummaryValues[key];
    setSummaryValues({ ...filteredSummaryValues });
  };

  const addDischargeSummaryValue = (isList: boolean) => {
    let key = Date.now().toString();

    setSummaryValues({
      ...summaryValues,
      [key]: {
        title: 'Untitled',
        content: '',
        isList,
      },
    });
  };

  return (
    <div className='mt-5'>
      {Object.entries(summaryValues).map(([key, summaryValue]) => (
        <DischargeSummaryValue
          key={key}
          hashkey={key}
          summaryValue={summaryValue as DischargeSummaryValues}
          editDischargeSummaryValue={editDischargeSummaryValue}
          removeDischargeSummaryValue={removeDischargeSummaryValue}
        />
      ))}
      <Button
        size='lg'
        variant='outline'
        onClick={() => addDischargeSummaryValue(true)}
      >
        Add list field <FiPlus className='ml-2' size={20} />
      </Button>
      <Button
        size='lg'
        variant='outline'
        onClick={() => addDischargeSummaryValue(false)}
        ml={2}
      >
        Add text field <FiPlus className='ml-2' size={20} />
      </Button>
    </div>
  );
};
