import { Button } from "@/app/ui/design-system/button/button";
import { SocialNetwork } from "./app-links";
import { FaGithub } from "react-icons/fa";
import clsx from "clsx";

interface Props {
    className?: string;
    size?: "small" | "medium" | "large";
}

export const SocialNetworkButtonsWhite = ({ className, size = "medium" }: Props) => {
    const handleButtonClick = (baseUrl: string) => {
        window.open(baseUrl, "_blank");
    };

    const icoList = SocialNetwork.map((social) => (
        <Button
            key={social.label}
            variant="ico"
            size={size} // Taille de l'icône
            icon={{
                icon: social.icon ? social.icon : FaGithub,
            }}
            iconTheme="neutral"
            action={() => handleButtonClick(social.baseUrl)}
            linkType={social.type}
        />
    ));

    return (
        <div className={clsx(className, "flex flex-wrap items-center justify-center flex-1 gap-10")}>
            {icoList}
        </div>
    )
};
