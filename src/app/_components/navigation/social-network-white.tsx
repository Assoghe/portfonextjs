import { Button } from "@/app/ui/design-system/button/button";
import { SocialNetwork } from "./app-links";
import { FaGithub } from "react-icons/fa";
import clsx from "clsx";


interface Props {
    theme?: "neutral" | "accent";
    className?: string;
}

export const SocialNetworkButtonsWhite = ({ className}: Props) => {
    const handleButtonClick = (baseUrl: string) => {
        window.open(baseUrl, "_blank"); 
    };

    const icoList = SocialNetwork.map((SocialNetwork) => (
        <Button
            key={SocialNetwork.label}
            variant="ico"
            size="medium"
            icon={{
                icon: SocialNetwork.icon ? SocialNetwork.icon : FaGithub,
            }}
            iconTheme="neutral"
            action={() => handleButtonClick(SocialNetwork.baseUrl)} 
            linkType={SocialNetwork.type}
        />
    ));

    return (
        <div className={clsx(className, "flex flex-wrap items-center justify-center flex-1 gap-10")}>
            {icoList}
        </div>
    )
};
