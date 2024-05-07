import React from "react";
import clsx from "clsx";


interface Props {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body-one" | "body-two" | "body-three";
    component?: "h1" | "h2"| "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"; 
    theme?: "neutral" | "primary";
    weight?: "light" | "regular"| "medium" | "semi-bold"| "bold";
    className?: string; 
    children: React.ReactNode;
}

export const Typography = ({ 
    variant = "h3", 
    component: Component = "h3", 
    theme= "neutral",
    weight= "medium",
    className,
    children}:Props) => {

    let variantStyles: string = "", colorStyles: string = "";

    switch (variant) {
        case "h1": 
        variantStyles = "text-[24px] tablet:text-5xl";
        break;

        case "h2": 
        variantStyles = "text-3xl tablet:text-4xl";
        break;

        case "h3": 
        variantStyles = "text-2xl tablet:text-3xl";
        break;

        case "h4": 
        variantStyles = "text-xl tablet:text-2xl";
        break;

        case "h5": 
        variantStyles = "text-lg tablet:text-xl";
        break;

        case "h6": 
        variantStyles = "text-lg";
        break;

        case "body-one": 
        variantStyles = "text-sm tablet:text-base";
        break;

        case "body-two": 
        variantStyles = "text-sm";
        break;

        case "body-three":
            variantStyles = "text-xs";
            break;
    }

    switch (theme) {
        case "neutral": 
        colorStyles = "text-neutral";
        break;

        case "primary": 
        colorStyles = "text-primary";
        break;
    }


    return (
        <Component className={clsx(variantStyles, colorStyles, className)}>
            {children}
        </Component>
    )
}

