import { Typography } from '@/app/ui/design-system/typography/typography';
import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  icon: IconType;
  label: string;
}

const IconWithLabel: React.FC<IconProps> = ({ icon: Icon, label }) => {
  return (
    <div className='text-align mb-6'>
      <Icon />
      <Typography variant="body-two" component='p' className='mt-4 text-neutral-400'>
        {label}
      </Typography>
    </div>
  );
};

export default IconWithLabel;