import clsx from "clsx";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "accent" | "outline" | "label" | "action" | "disabled" | "ico";
    icon?: any;
    iconTheme?: "accent" | "neutral";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
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

}: Props) => {

 let variantStyles: string = "", sizeStyles: string = "", icoSize: number = 0;

    switch (variant) {
        case "accent":
            variantStyles = "text-sm bg-primary hover:bg-neutral-50 text-neutral-950 rounded";
            break;

        case "outline":
            variantStyles = "text-sm border border-primary text-primary hover:border border-neutral-50 text-neutral-50 rounded";
            break;

        case "label":
            variantStyles = "text-sm text-primary hover:text-neutral-50";
            break;

        case "action":
            variantStyles = "text-sm bg-primary-700 hover:bg-neutral-50 text-neutral-950 rounded";
            break;
        
        case "disabled":
            variantStyles = "text-sm bg-primary-300 text-neutral-950";
            break;

        case "ico":
            variantStyles = "";
            break;
    }

    switch (size) {
        case "small":
            sizeStyles = "";
            break;

        case "medium":
            sizeStyles = "";
            break;

        case "large":
            sizeStyles = "";
            break;
    }



    return(
        <>
            <button 
            type="button"
            className={clsx(variantStyles, icoSize, "")}
            disabled = {disabled}
            > {children}</button>
        </>
    )
}