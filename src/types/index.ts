import { string } from "astro:schema";

export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string; image: string}[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  organizations: OrganizationProps[];
  awards:AwardProps[]
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  image: string
}

export interface ExperienceProps {
  company: string;
  sub_experience: SubExperienceProps[]
}

export interface SubExperienceProps{
  position: string;
  startDate: string;
  endDate: string;
  summary: string[];
  work_description: string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  link: string;
  github?: string;
  link_enabled:boolean;
  github_public?:boolean;
  link_disabled_warning?:string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
}

export interface OrganizationProps {
  name:string,
  timeline: OrganizationTimelineProps[]
}

export interface OrganizationTimelineProps{
  position:string,
  startDate:string,
  endDate:string,
  summary:string[]
}

export interface AwardProps {
  name:string,
  date:string,
  heldBy:string,
  credentialLink?:string,
  summary:string[]
}