import { IconType } from "react-icons";
import { LinkType } from "../lib/link-type";

export interface LinksSocial {
    label: string;
    baseUrl: string; // Modifier ici pour utiliser uniquement une chaîne de caractères
    type: LinkType;
    icon?: IconType;
}
