import React from 'react';
import { DischargeHeader } from '@/types/discharge';
import { Divider, Flex, Text } from '@chakra-ui/react';

interface Props {
  dischargeHeader: DischargeHeader;
}

export const PreviewHeader: React.FC<Props> = ({ dischargeHeader }) => {
  return (
    <div>
      <Flex alignItems='center' justifyContent='space-between'>
        {dischargeHeader.image && (
          <img
            src={dischargeHeader.image}
            className='w-1/3 h-24 object-cover'
          />
        )}
        {dischargeHeader.text && (
          <Text
            fontSize='lg'
            fontWeight='medium'
            textAlign={dischargeHeader.image ? 'right' : 'left'}
          >
            {dischargeHeader.text.split('\n').map((val, idx) => (
              <p key={idx}>{val}</p>
            ))}
          </Text>
        )}
      </Flex>
      <Divider my={5} />
    </div>
  );
};
