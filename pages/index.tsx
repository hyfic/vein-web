import type { NextPage } from 'next';
import React from 'react';
import { Layout } from '@/components/layout';
import { DischargeForm } from '@/components/dischargeForm';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <DischargeForm />
    </Layout>
  );
};

export default HomePage;
