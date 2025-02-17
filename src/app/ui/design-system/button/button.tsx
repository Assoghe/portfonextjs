import React from "react";
import clsx from "clsx";
import { IconProps } from "../../../types/iconProps";
import Link from "next/link";
import { LinkType, LinkTypes } from "../../../lib/link-type";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "accent" | "outline" | "label" | "action" | "disabled" | "ico";
    icon?: IconProps;
    iconCondition?: any;
    iconTheme?: "accent" | "neutral";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    action?: Function | string;
    baseUrl?: string;
    linkType?: LinkType;
    className?: string;

}

export const Button = ({
    size = "medium",
    variant = "accent",
    icon,
    iconTheme = "accent",
    iconPosition = "right",
    disabled,
    isLoading,
    children,
    baseUrl,
    linkType,
    action = () => {},
    className,

}: Props) => {

    let variantStyles: string = "", sizeStyles: string = "", icoSize: number = 0;

    switch (variant) {
        case "accent":
            variantStyles = "text-base bg-primary hover:bg-neutral-50 text-neutral-950 rounded-md";
            break;

        case "outline":
            variantStyles = "text-base border border-primary text-primary hover:border border-neutral-50 text-neutral-50 rounded-md";
            break;

        case "label":
            variantStyles = "text-base text-primary hover:text-neutral-50 rounded-md";
            break;

        case "action":
            variantStyles = "text-base bg-primary-700 hover:bg-neutral-50 text-neutral-950 rounded-md";
            break;

        case "disabled":
            variantStyles = "text-base bg-primary-300 text-neutral-950 rounded-md";
            break;

        case "ico":
            if (iconTheme === "accent") {
                variantStyles = "text-primary";
            }
            if (iconTheme === "neutral") {
                variantStyles = "text-neutral hover:text-primary";
            }
            break;
    }

    switch (size) {
        case "small":
            sizeStyles = `text-sm  ${variant === "ico" ? "flex items-center justify-center w-[20px] h-[20px]" : "px-2 py-1"
                }`;
            icoSize = 20;
            break;

        case "medium":
            sizeStyles = `text-base ${variant === "ico" ? "flex items-center justify-center w-[24px] h-[24px]" : "px-6 py-3"
                }`;;
            icoSize = 24;
            break;

        case "large":
            sizeStyles = `text-lg ${variant === "ico" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-9 py-6"
                }`;
            icoSize = 38;
            break;
    }

    const handleClick = () => {
        if (typeof action === 'function') {
            action(); // Si action est une fonction, l'appeler
        } else if (typeof action === 'string') {
            window.open(action, '_blank'); // Si action est une chaîne de caractères, l'ouvrir dans un nouvel onglet
        }
    };

    const buttonContent = (
        <>
            {icon && variant === "ico" ? (<icon.icon size={icoSize} />) :
                (
                    <div className={clsx(icon && "flex items-center gap-1")}> {icon && iconPosition === "left" && (
                        <icon.icon size={icoSize} />
                    )}         {children}
                        {icon && iconPosition === "right" && (
                            <icon.icon size={icoSize} />
                        )}
                    </div>)
            }
        </>
    )

    const buttonElement = (
        <button
            type="button"
            className={clsx(variantStyles, sizeStyles, icoSize, "animate")}
            onClick={handleClick}
            disabled={disabled}
        >
            {buttonContent}
        </button>
    )

    if (baseUrl) {
        if (linkType === LinkTypes.EXTERNAL) {
            return (
                <a href={baseUrl} target="_blank">
                    {buttonElement}
                </a>
            )
        } else {
            return <Link href={baseUrl}>{buttonElement}</Link>
        }
    }

    return buttonElement
}