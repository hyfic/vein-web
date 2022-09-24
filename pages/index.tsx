import type { NextPage } from 'next';
import React from 'react';
import { Button, useColorMode } from '@chakra-ui/react';

const HomePage: NextPage = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <div className='m-5'>
      <h1 className='text-2xl font-medium underline'>Vein</h1>
      <p>An application to create discharge sheet fast</p>
      <Button onClick={toggleColorMode}>Toggle</Button>
    </div>
  );
};

export default HomePage;
