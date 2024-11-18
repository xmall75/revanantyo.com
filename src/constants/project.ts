import { FaGithub, FaGlobe } from "react-icons/fa";

import { IListProject } from "@/types/project";

export const ListProject: IListProject[] = [
  {
    title: "Customer Relationship Management",
    role: "Software Engineer",
    date: "June 2024 - Present",
    description:
      "Customer Relationship Management (CRM) is a project for my thesis. This project is using microservices architecture to integrate with ERP and SRM.",
    links: [],
    images: ["/images/project/crm-1.png", "/images/project/crm-2.png"],
  },
  {
    title: "SkyAfra: Smart Steps to a Cleaner Earth",
    role: "Machine Learning Engineer",
    date: "April 2024 - June 2024",
    description:
      "SkyAfra is a mobile application to detect and classify waste segregation. SkyAfra's model is built using MobileNet V3. This project is associated with Bangkit 2024.",
    links: [
      {
        title: "Github",
        url: "https://github.com/SkyAfra/",
        icon: FaGithub,
      },
    ],
    images: ["/images/project/skyafra-1.png", "/images/project/skyafra-2.png"],
  },
  {
    title: "E-Waku: Support Aspiring Fish Farmers",
    role: "Software Engineer",
    date: "December 2024 - January 2024",
    description:
      "E-Waku is a project to help fish farmers to predict the success probability by providing information about their budget, fish, foods, etc. Built with Next.js, Firebase, and Tensorflow.js. This project is associated with Hackfest 2024.",
    links: [
      {
        title: "Github",
        url: "https://github.com/xmall75/e-Waku",
        icon: FaGithub,
      },
      {
        title: "Website",
        url: "https://e-waku.vercel.app/",
        icon: FaGlobe,
      },
    ],
    images: ["/images/project/e-waku-1.png", "/images/project/e-waku-2.png"],
  },
];
