import clsx from "clsx";
import { Component, ReactNode } from "react";
import { Typography } from "../design-system/typography/typography";
import Divider from "../design-system/divider/divider";

interface Props {
    title?: string;
    content?: ReactNode;
    theme?: "primary" | "secondary";
    className?: string;
}

export const BlocColor = ({
    theme = "primary",
    content,
    title,
}:Props) => {
    let themeStyle: string = ""; 

    switch (theme) {
        case "primary":
        themeStyle = "bg-primary rounded-xl p-9";
        break;

        case "secondary":
        themeStyle = "bg-secondary rounded-xl p-9";
        break;
    }

    return (
        <div className={clsx(themeStyle)}>
            {title && (
                <Typography variant='h4' component='h4' className='text-neutral-950 mb-4'>
                    {title}
                </Typography>
            )}
            <Divider />
            {content && (
                <Typography variant='body-one' component='p' className='mt-4 text-neutral-950'>
                    {content}
                </Typography>
            )}
        </div>
    )
}





