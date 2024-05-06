import { Button } from "@/app/ui/design-system/button/button";
import { SocialNetwork } from "./app-links";
import { HiMail } from "react-icons/hi";
import clsx from "clsx";
import { FaGithub } from "react-icons/fa";

interface Props {
    theme?: "neutral" | "accent";
    className?: string;
}

export const SocialNetworkButtons = ({ className, theme = "neutral" }: Props) => {

    const handleButtonClick = (baseUrl: string) => {
        window.open(baseUrl, "_blank"); // Ouvre le lien dans un nouvel onglet
    };

    const icoList = SocialNetwork.map((SocialNetwork) => (
        <Button
            key={SocialNetwork.label}
            variant="accent"
            iconTheme={theme}
            size="medium"
            iconPosition="left"
            icon={{
                icon: SocialNetwork.icon ? SocialNetwork.icon : FaGithub
            }}
            action={() => handleButtonClick(SocialNetwork.baseUrl)} // Appel de la fonction handleButtonClick avec le baseUrl correspondant
            linkType={SocialNetwork.type}
        >
            {SocialNetwork.label}
        </Button>
    ));

    return (
        <div className={clsx(className, "flex flex-wrap items-center justify-center flex-1 gap-10")}>
            {icoList}
        </div>
    );
};
