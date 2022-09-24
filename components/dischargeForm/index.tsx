import React, { createContext, useState } from 'react';
import { Discharge } from '@/types/discharge';
import { SetState } from '@/types/react';
import { defaultDischargeData } from '@/utils/constants';
import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BioData } from './bioData';
import { DischargeHeader } from './dischargeHeader';
import { DischargeSummaryForm } from './dischargeSummaryForm';
import { Preview } from '../preview';
import { AiOutlineEye } from 'react-icons/ai';

export interface DischargeFromContextType {
  dischargeData: Discharge;
  setDischargeData: SetState<Discharge>;
}

export const DischargeFormContext =
  createContext<DischargeFromContextType | null>(null);

export const DischargeForm: React.FC = () => {
  const [dischargeData, setDischargeData] =
    useState<Discharge>(defaultDischargeData);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();

  return (
    <DischargeFormContext.Provider value={{ dischargeData, setDischargeData }}>
      <DischargeHeader />
      <BioData />
      <DischargeSummaryForm />
      <Center mt={8}>
        <Button size='lg' ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Preview Data <AiOutlineEye size={23} className='ml-2' />
        </Button>
      </Center>

      <Drawer
        isOpen={isOpen}
        placement='bottom'
        size='full'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size='lg' />
          <DrawerHeader>Preview data</DrawerHeader>

          <DrawerBody>
            <Preview dischargeData={dischargeData} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </DischargeFormContext.Provider>
  );
};
