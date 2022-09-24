import type { NextPage } from 'next';
import React from 'react';
import { Layout } from '@/components/layout';
import { Heading } from '@chakra-ui/react';
import { DischargeForm } from '@/components/dischargeForm';
import { BioData } from '@/components/dischargeForm/bioData';

const FormPage: NextPage = () => {
  return (
    <Layout>
      <Heading>Discharge form</Heading>
      <DischargeForm />
    </Layout>
  );
};

export default FormPage;
