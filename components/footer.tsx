import React from 'react';
import { Flex, Link, useColorMode, Text, Divider } from '@chakra-ui/react';

export const Footer: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex mt={8} mb={10} direction='column'>
      <Divider my={5} />
      <Text className='opacity-40 text-sm'>Powered by</Text>
      <Link href='https://hyfic.github.io' target='_blank'>
        <img
          src={
            colorMode === 'dark'
              ? 'https://raw.githubusercontent.com/hyfic/artery/main/src/assets/hyfic_logo_white.svg'
              : 'https://raw.githubusercontent.com/hyfic/artery/main/src/assets/hyfic_logo_black.svg'
          }
          alt='Hyfic'
          className='w-14 opacity-40 hover:opacity-100'
        />
      </Link>
    </Flex>
  );
};
