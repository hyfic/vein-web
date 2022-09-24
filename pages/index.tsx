import type { NextPage } from 'next';
import React from 'react';
import { Heading } from '@chakra-ui/react';
import { Layout } from '@/components/layout';
import { DischargeForm } from '@/components/dischargeForm';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Heading>Discharge form</Heading>
      <DischargeForm />
    </Layout>
  );
};

export default HomePage;
