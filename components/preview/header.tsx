import React from 'react';
import { Divider, Flex, Text } from '@chakra-ui/react';

interface Props {}

export const PreviewHeader: React.FC<Props> = ({}) => {
  return (
    <div>
      <Flex alignItems='center' justifyContent='space-between'></Flex>
      <Divider my={5} />
    </div>
  );
};
