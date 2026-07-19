export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Engr. Maruf Ahmed",
    role: "Team Leader & Principal Structural Engineer",
    imageUrl: "/images/team/alexander.png",
    bio: "Registered Structural Engineer (IEB Fellow) with over two decades of experience designing high-rise residential projects and premium landmarks across Dhaka.",
  },
  {
    name: "Sharmin Afroz Shumi",
    role: "Principal Architect",
    imageUrl: "/images/team/elena.png",
    bio: "Formally trained in architecture and a member of IAB, Sharmin leads the design language of Avenue projects, focusing on spatial geometry and natural ventilation.",
  },
  {
    name: "Engr. Md. Matiur Rahman",
    role: "Director of Structural Engineering & Compliance",
    imageUrl: "/images/team/marcus.png",
    bio: "Specializes in earthquake-resistant structural designs and RAJUK regulatory compliance, ensuring every construction satisfies local building codes.",
  },
];
