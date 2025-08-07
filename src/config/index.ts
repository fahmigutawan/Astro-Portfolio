import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Fahmi Noordin Rumagutawan — Mobile Developer",
  author: "Fahmi Noordin Rumagutawan",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/fahmi.png",
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/fahmi-noordin-rumagutawan-0b506521b/", image: "/ic_linkedin.png" },
    { text: "Github", href: "https://github.com/fahmigutawan", image: "/ic_github.webp" },
    { text: "Instagram", href: "https://www.instagram.com/fahmigutawan/", image: "ic_instagram.png" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Fahmi Noordin Rumagutawan",
    specialty: "Mobile Developer",
    summary:
      "Developer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
    email: "fahmigutawan@gmail.com",
    image: "/fahmi.png",
  },
  experience: [
    {
      company: "PT Awan Data Indonesia",
      sub_experience: [
        {
          position: "Android Developer",
          startDate: "June 2024",
          endDate: "Present",
          summary: [
            "As an Android developer, I **singlehandedly** developing an **Android e-payment application** by using **Jetpack Compose**, that the app contents can be dynamicly configured through website",
            "Being a **team leader** and **managing weekly task** of my team",
          ],
          work_description: [
            "Setuping project with **multi-module** and **MVVM** concept",
            "Slicing UI from **Figma to Kotlin** codebase using **Jetpack Compose**, from **scratch**",
            "Integrating application with **REST-API** by using **Ktor**",
            "Handling **push notification** that integrated with **Firebase Cloud Messaging (FCM)**",
            "Using**Keystore** to double the **security** layer of the application"
          ]
        }
      ]
    },
    {
      company: "PT Mahkota Giri Suprana",
      sub_experience: [
        {
          position: "Outsource Android Developer",
          startDate: "Sept 2024",
          endDate: "Present",
          summary: [
            "As an Android Developer, I **singlehandedly** developing an **Android business accounting application** by using **Jetpack Compose**"
          ],
          work_description: [
            "Slicing the UI from **Figma to Kotlin** codebase using **Jetpack Compose**, from **scratch**",
            "Integrating the application with **REST-API** by using **Ktor**",
            "Managing the application to be **offline-first**"
          ]
        },
        {
          position: "Frontend Developer",
          startDate: "Oct 2023",
          endDate: "Aug 2024",
          summary: [
            "Contributed in a team of Frontend, that can handle both **Mobile (Jetpack Compose)** and **Web (VueJS)**",
            "**Singlehandedly** developed android application named **Vobis** from **scratch**"
          ],
          work_description: [
            "Setup the project with **multi-module** and **MVVM** concept",
            "Sliced the UI from **Figma to Kotlin** codebase using **Jetpack Compose**, from **scratch**",
            "Integrated the application with **REST-API** by using **Ktor**",
            "Managed the application to be **offline-first**"
          ]
        }
      ]
    }
  ],
  projects: [
    {
      name: "Millipoint",
      summary: "Gaming topup website that integrated with payment gateway",
      image: "/millipoint.jpg",
      link: "https://millipoint.id",
      github: "",
      link_enabled: true,
      github_public: false,
      link_disabled_warning: ""
    },
    {
      name: "Vobis",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      image: "/vobis.jpg",
      link: "",
      github: "",
      link_enabled: false,
      github_public: false,
      link_disabled_warning: "Vobis is a member-only app, and not publicly released"
    },
    {
      name: "Qofee: E-Katalog Kopi Kaliabu",
      summary: "Qofee is an application that promoting local coffee product from Kalibaru, Banyuwangi",
      image: "/qofee.jpg",
      link: "",
      github: "",
      link_enabled: false,
      github_public: false,
      link_disabled_warning: "Qofee had released, but now it is taken down due to newer Google Play terms"
    },
    {
      name: "Sidomulyo Villtech App",
      summary: "Villtech is an application that promoting local attraction in Sidomulyo Village, Lumajang",
      image: "/villtech.jpg",
      link: "",
      github: "",
      link_enabled: false,
      github_public: false,
      link_disabled_warning: "Villtech had released, but now it is taken down due to newer Google Play terms"
    },
    {
      name: "Delima Bank Sampah",
      summary: "Waste bank application that developed for a client from an area in Malang",
      image: "/delima.jpg",
      link: "",
      github: "",
      link_enabled: false,
      github_public: false,
      link_disabled_warning: "Delima had released, but now it is taken down due to newer Google Play terms"
    },
  ],
  organizations: [], //TODO Later
  awards: [
    {
      name: "1st Winner of Ciputra Hackfest",
      date: "May 2023",
      summary: [
        "Developed an application within 2 days and integrated it with REST-API, Google Map, and Payment Gateway"
      ],
      credentialLink: "https://drive.google.com/file/d/1y4Zt2iO-pEujWljcValNylMMAzBCiVst/view",
      heldBy: "Ciputra University"
    },
    {
      name: "2nd Winner of Mage 9 Competition",
      date: "March 2024",
      summary: [
        "Contributed as an Android developer, compete with other teams across universities in Indonesia",
        "Developed an application from UI Slicing and integrated it with Firebase and Mapbox"
      ],
      heldBy: "Institut Teknologi Sepuluh November"
    },
    {
      name: "1st Winner of Ciputra Hackfest",
      date: "November 2022",
      summary: [
        "Contributed as an Android developer, compete with other teams across universities in Indonesia",
        "Developed an application from UI Slicing and integrated it with Firebase"
      ],
      heldBy: "Brawijaya University",
      credentialLink: "https://drive.google.com/file/d/10JItR9K-3X76GfgiovMZTV9GyaquG1jc/view"
    }
  ]
};