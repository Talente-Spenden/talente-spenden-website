// src/types/config.d.ts or src/config/types.ts

// ------------ Routing ------------

// Define the shape of a single navigation bar item
export interface NavigationItem {
  name: string;
  path: string;
  color: string; // Based on the data, this is a string like "yellow", "green", etc.
}

// Define the type for the navigationBarConfig array
export type NavigationBarConfig = NavigationItem[];

// ------------ Content ------------

// Define the shape of a link within a Q&A item
export interface QALink {
  type: "internal" | "external"; // Use a union type for known values
  text: string;
  url: string;
}

// Define the shape of a single Q&A item
export interface QAItem {
  question: string;
  answer: string;
  links: QALink[]; // An array of QALink objects
}

// Define the type for the qaHome array
export type QaHomeConfig = QAItem[];

// Define the shape of a single project spotlight item
export interface ProjectSpotlightItem {
  id: string;
  text: string;
}

// Define the type for the projectSpotlight array
export type ProjectSpotlightConfig = ProjectSpotlightItem[];

// ------------ Team Page ------------

// Define the shape of a single team member
export interface TeamMember {
  name: string;
  role: string;
  job: string;
  email: string;
  image: string; // Assuming this is the path string
}

// Define the type for the managementTeam array
export type ManagementTeamConfig = TeamMember[];

// Define the shape of a single milestone item
export interface MilestoneItem {
  year: number;
  title: string;
  description: string;
}

// Define the type for the milestones array
export type MilestonesConfig = MilestoneItem[];

// ------------ Projects Page ------------

// Define the shape of a single project tag
export interface ProjectTag {
  name: string;
  color: string; // Again, a string based on the data
}

// Define the type for the projectTags array
export type ProjectTagsConfig = ProjectTag[];

// Define the shape of a single project item
export interface ProjectItem {
  name: string;
  descriptionShort: string;
  descriptionLong: string;
  image: string; // Assuming this is the file name string
  type: "Project"; // Based on data, currently only "Project"
  tags: string[]; // An array of strings, likely corresponding to ProjectTag.name
  track: "TSCT" | "TSET"; // Based on data, currently only "TSCT"
}

// Define the type for the projects array
export type ProjectsConfig = ProjectItem[];

export interface openRole {
  role: string;
  track: string;
  requirements: string;
  shortDescription: string;
}

export type openRolesConfig = openRole[];
// Exporting all configs as types
// This allows you to import them like:
// import { NavigationBarConfig, QaHomeConfig, etc. } from './types/config';
