import React from 'react';
import { Typography } from '@/app/ui/design-system/typography/typography';
import Image from 'next/image';
import Divider from '@/app/ui/design-system/divider/divider';

interface InfoSectionProps {
    nameClient?: string;
    client?: string;
    nameTool?: string;
    tool?: string;
    nameRole?: string;
    role?: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ client, nameClient, nameTool, tool, nameRole, role }) => (
    <div className='px-6 tablet:px-40'>
        <div className=' tablet:flex tablet:justify-between'>
        <div>
            <Typography variant='h6' component='h6' className='text-neutral-300'>
                {nameClient}
            </Typography>
            <Typography variant='body-one' component='p' className='mb-12'>
                {client}
            </Typography>
        </div>
        <div>
            <Typography variant='h6' component='h6' className='text-neutral-300'>
                {nameTool}
            </Typography>
            <Typography variant='body-one' component='p' className='mb-12'>
                {tool}
            </Typography>
        </div>
        <div>
            <Typography variant='h6' component='h6' className='text-neutral-300'>
                {nameRole}
            </Typography>
            <Typography variant='body-one' component='p' className='mb-12'>
                {role}
            </Typography>
        </div>
        </div>
        <div className='mb-12' >
            <Divider />

        </div>
    </div>

);

export default InfoSection;
