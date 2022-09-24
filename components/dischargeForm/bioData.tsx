import React, { useContext, useEffect, useState } from 'react';
import { Input, Select, SimpleGrid } from '@chakra-ui/react';
import { DischargeFormContext, DischargeFromContextType } from '.';

export const BioData: React.FC = () => {
  const { dischargeData, setDischargeData } = useContext(
    DischargeFormContext
  ) as DischargeFromContextType;

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('Male');
  const [weight, setWeight] = useState('');
  const [MRDNumber, setMRDNumber] = useState('');

  useEffect(() => {
    setDischargeData({
      ...dischargeData,
      bioData: {
        name,
        age,
        sex,
        weight,
        MRDNumber,
      },
    });
  }, [name, age, sex, weight, MRDNumber]);

  return (
    <div className='mt-5'>
      <h1 className='text-xl font-semibold'>Biodata</h1>
      <SimpleGrid mt={3} columns={{ sm: 1, md: 2, lg: 3 }} gap={3}>
        <Input
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant='filled'
          size='lg'
        />
        <Input
          placeholder='Age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          variant='filled'
          size='lg'
        />
        <Select
          variant='filled'
          value={sex}
          defaultValue={sex}
          onChange={(e) => setSex(e.target.value)}
          size='lg'
        >
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Other'>Other</option>
        </Select>
        <Input
          placeholder='Weight'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          variant='filled'
          size='lg'
        />
        <Input
          placeholder='MRD Number'
          value={MRDNumber}
          onChange={(e) => setMRDNumber(e.target.value)}
          variant='filled'
          size='lg'
        />
      </SimpleGrid>
    </div>
  );
};
