import { FaGithub, FaBehance, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";


export const navLinks = [
    {
      label: "Portfolio",
      url: "/",
    },
    {
      label: "A propos",
      url: "/a-propos",
    },
    {
      label: "Livre blanc",
      url: "/livre-blanc",
    },
    {
      label: "Contact",
      url: "/contact",
    },
  ];

  export const socialLinks = [
    {
      id: 1,
      icon: FaGithub,
      url: "#",
    },
    {
      id: 2,
      label: "Behance",
      icon: FaBehance,
      url: "#",
    },
    {
      id: 3,
      label: "Twitter",
      icon: FaLinkedin,
      url: "#",
    },
    {
        id: 4,
        label: "Mail",
        icon: HiMail,
        url: "#",
      },
  ];
