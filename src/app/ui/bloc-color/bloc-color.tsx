import React from 'react';
import clsx from "clsx";
import { Component, ReactNode } from "react";
import { Typography } from "../design-system/typography/typography";
import Divider from '../design-system/divider/divider';

interface Props {
    title?: any;
    content?: React.ReactNode;
    theme?: "one" | "two" | "three" | "four";
    className?: string;
    key?: any;
}

export const BlocColor = ({
    theme = 'one',
    content,
    title,
}: Props) => {
    let themeStyle: string = '';

    switch (theme) {
        case 'one':
            themeStyle = 'bg-[#FDA566] rounded-xl p-5 tablet:p-9';
            break;

        case 'two':
            themeStyle = 'bg-[#FC9273] rounded-xl p-5 tablet:p-9';
            break;

        case 'three':
            themeStyle = 'bg-[#F97389] rounded-xl p-5 tablet:p-9';
            break;

        case 'four':
            themeStyle = 'bg-[#F7589C] rounded-xl p-5 tablet:p-9';
            break;
    }

    return (
        <div className={clsx(themeStyle)}>
            {title && (
                <Typography variant="h4" component="h4" className="text-neutral-950 mb-4 text-xl">
                    {title}
                </Typography>
            )}
            <Divider />
            {content && (
                <Typography variant="body-one" component="p" className="mt-4 text-sm text-neutral-950">
                    {content}
                </Typography>
            )}
        </div>
    );
};