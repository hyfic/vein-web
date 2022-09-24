import type { NextPage } from 'next';
import React from 'react';
import { Button, useColorMode } from '@chakra-ui/react';
import { Layout } from '@/components/layout';

const HomePage: NextPage = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Layout>
      <h1 className='text-2xl font-medium underline'>Vein</h1>
      <p>An application to create discharge sheet fast</p>
      <Button onClick={toggleColorMode}>Toggle</Button>
    </Layout>
  );
};

export default HomePage;
