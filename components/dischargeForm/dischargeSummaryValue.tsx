import React, { useState, useEffect } from 'react';
import { DischargeSummaryValues } from '@/types/discharge';
import { Flex, IconButton, Input, Textarea } from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';
import { TodoForm } from '../common/todo';

interface Props {
  hashkey: string;
  summaryValue: DischargeSummaryValues;
  editDischargeSummaryValue: any;
  removeDischargeSummaryValue: any;
}

export const DischargeSummaryValue: React.FC<Props> = ({
  hashkey: key,
  summaryValue,
  editDischargeSummaryValue,
  removeDischargeSummaryValue,
}) => {
  const [title, setTitle] = useState(summaryValue.title);
  const [content, setContent] = useState(summaryValue.content);

  useEffect(() => {
    editDischargeSummaryValue(key, title, content, summaryValue.isList);
  }, [title, content]);

  return (
    <div className='mb-5'>
      <Flex alignItems='center'>
        <Input
          size='lg'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant='filled'
          placeholder='Title'
        />
        <IconButton
          aria-label='remove'
          size='lg'
          ml={2}
          colorScheme='red'
          icon={<FiTrash2 size={20} />}
          variant='ghost'
          onClick={() => removeDischargeSummaryValue(key)}
        />
      </Flex>
      {summaryValue.isList ? (
        <TodoForm title={title} value={content} setValue={setContent} />
      ) : (
        <Textarea
          size='lg'
          variant='filled'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Content'
          className='mt-3'
        />
      )}
    </div>
  );
};
