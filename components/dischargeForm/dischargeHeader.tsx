import React, { useContext, useEffect, useState } from 'react';
import { SimpleGrid, Textarea, useToast } from '@chakra-ui/react';
import { AiOutlineUpload } from 'react-icons/ai';
import { DischargeFormContext, DischargeFromContextType } from '.';

export const DischargeHeader: React.FC = () => {
  const { dischargeData, setDischargeData } = useContext(
    DischargeFormContext
  ) as DischargeFromContextType;

  const toast = useToast();
  const fileInputRef = React.useRef<any>();

  const [image, setImage] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    setDischargeData({
      ...dischargeData,
      header: {
        image,
        text,
      },
    });
  }, [image, text]);

  return (
    <div className='mt-5'>
      <h1 className='text-2xl font-semibold'>Page header</h1>
      <SimpleGrid mt={3} columns={{ sm: 1, md: 2 }} gap={3} className='h-fit'>
        <div onClick={() => fileInputRef.current.click()}>
          {!image ? (
            <div className='h-full flex items-center justify-center text-lg border border-dashed rounded p-5 cursor-pointer transition-all duration-200 hover:opacity-50'>
              Upload logo <AiOutlineUpload className='ml-2 text-xl' />
            </div>
          ) : (
            <img
              src={image}
              alt='uploaded image'
              className='w-full h-full object-contain'
            />
          )}
          <input
            type='file'
            ref={fileInputRef}
            className='hidden'
            accept='image/*'
            onChange={(e) => {
              if (!e.target.files || e.target.files.length === 0) {
                setImage('');
                return;
              }

              if (e.target.files[0].type.includes('image/')) {
                let file = e.target.files[0];
                let reader = new FileReader();

                reader.onloadend = () => {
                  setImage(URL.createObjectURL(file));
                };

                if (file) reader.readAsDataURL(file);
              } else {
                toast({
                  title: 'Unsupported file type',
                  description: 'please select an image',
                  status: 'error',
                  isClosable: true,
                  duration: 3000,
                  position: 'top-right',
                });
              }
            }}
          />
        </div>
        <div>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            variant='filled'
            placeholder='details'
          />
        </div>
      </SimpleGrid>
    </div>
  );
};
