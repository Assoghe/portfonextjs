import { LinksSocial } from "@/app/types/linksSocial";
import { AppLinks } from "next/dist/lib/metadata/types/extra-types";
import { FaBehance, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

export const SocialNetwork: LinksSocial[] = [
    {
        label: "Github",
        baseUrl: "https://github.com/Assoghe",
        type: "external",
        icon: FaGithub,
    },

    {
        label: "Soraya Gherras",
        baseUrl: "https://www.linkedin.com/in/soraya-gherras/",
        type: "external",
        icon: FaLinkedin,
    },
    {
        label: "Soraya Gherras",
        baseUrl: "mailto:soraya.gherras17@gmail.com",
        type: "external",
        icon: HiMail,
    }
]