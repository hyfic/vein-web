import React, { createContext, useState } from 'react';
import { Discharge } from '@/types/discharge';
import { SetState } from '@/types/react';
import { defaultDischargeData } from '@/utils/constants';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { BioData } from './bioData';
import { DischargeSummaryForm } from './dischargeSummaryForm';
import { Preview } from '../preview';

export interface DischargeFromContextType {
  dischargeData: Discharge;
  setDischargeData: SetState<Discharge>;
}

export const DischargeFormContext =
  createContext<DischargeFromContextType | null>(null);

export const DischargeForm: React.FC = () => {
  const [dischargeData, setDischargeData] =
    useState<Discharge>(defaultDischargeData);

  return (
    <DischargeFormContext.Provider value={{ dischargeData, setDischargeData }}>
      <Tabs size='lg'>
        <TabList>
          <Tab fontSize='xl'>Discharge form</Tab>
          <Tab fontSize='xl'>Preview</Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
            <BioData />
            <DischargeSummaryForm />
          </TabPanel>
          <TabPanel my={3}>
            <Preview dischargeData={dischargeData} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </DischargeFormContext.Provider>
  );
};
