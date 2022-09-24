import { Discharge } from '@/types/discharge';
import { SetState } from '@/types/react';
import { defaultDischargeData } from '@/utils/constants';
import React, { createContext, useState } from 'react';
import { BioData } from './bioData';
import { DischargeHeader } from './dischargeHeader';

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
      <DischargeHeader />
      <BioData />
    </DischargeFormContext.Provider>
  );
};
