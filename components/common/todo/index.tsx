import React, { useState } from 'react';
import { SetState } from '@/types/react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import {
  IconButton,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

interface Props {
  title: string;
  value: string;
  setValue: SetState<string>;
}

export const TodoForm: React.FC<Props> = ({ title, value, setValue }) => {
  const [values, setValues] = useState<string[]>([]);
  const [val, setVal] = useState('');

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    if (val.trim().length === 0) return;

    let arr = [...values, val];
    setValues(arr);
    setValue(JSON.stringify(arr));
    setVal('');
  };

  return (
    <div className='mt-5'>
      <form className='flex items-center' onSubmit={handleFormSubmit}>
        <Input
          placeholder={`Add ${title}`}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          variant='outline'
          size='lg'
        />
        <IconButton
          aria-label='Add'
          icon={<FiPlus size={20} />}
          ml={2}
          size='lg'
          colorScheme='blue'
          disabled={val.trim().length === 0}
          type='submit'
        />
      </form>
      {values.length > 0 && (
        <Table fontSize='lg' mt={2}>
          <Thead>
            <Tr>
              <Th>Index</Th>
              <Th>Content</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {values.map((val, idx) => (
              <Tr key={idx}>
                <Td>{idx + 1}</Td>
                <Td wordBreak='break-word'>{val}</Td>
                <Td>
                  <IconButton
                    aria-label='remove'
                    colorScheme='red'
                    icon={<FiTrash2 size={18} />}
                    variant='ghost'
                    onClick={() => {
                      let arr = [...values];
                      arr.splice(idx, 1);
                      setValues(arr);
                      setValue(JSON.stringify(arr));
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </div>
  );
};
