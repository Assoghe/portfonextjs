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
            sizeStyles = "text-sm px-2 py-1 ";
            break;

        case "medium":
            sizeStyles = "text-base px-6 py-3";
            break;

        case "large":
            sizeStyles = "text-lg px-9 py-6";
            break;
    }



    return(
        <>
            <button 
            type="button"
            className={clsx(variantStyles,sizeStyles, icoSize, "")}
            disabled = {disabled}
            >            {icon && variant === "ico" ? (<icon.icon/>) : <>{children}</>}            
            </button>
        </>
    )
}