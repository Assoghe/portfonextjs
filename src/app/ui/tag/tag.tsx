import { IconProps } from "../../../types/iconProps";
import clsx from "clsx";

interface Props {
    variant?: "default" | "outline";
    icons?: IconProps;
    iconTheme?: "accent" | "neutral";
    iconPosition?: "left" | "right";
    children: React.ReactNode;
}

export const Tag = ({
    variant = "default",
    icons,
    iconTheme = "neutral",
    children
}: Props) => {
    let variantStyle: string = "";

    switch (variant) {
        case "default":
            variantStyle = "w-fit px-6 py-3 text-neutral-300 text-neutral-50 bg-neutral-800 rounded-full";
            break;

        case "outline":
            variantStyle = "w-fit px-6 py-3 text-neutral-50 rounded rounded-full";
            break; 
    }

    return (
        <div className={clsx(variantStyle)}>
            {children}
        </div>
    )
}

