
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";

// const skillCategories = [
//   {
//     title: "Backend",
//     skills: ["Java", "Python", "C#", "Golang", "Shell", "Node.js"]
//   },
//   {
//     title: "Frontend Technologies", 
//     skills: ["HTML5", "JavaScript", "React", "TypeScript", "CSS", "Tailwind"]
//   },
//   {
//     title: "Frameworks & Libraries",
//     skills: ["Spring Boot", "Spring MVC", "Maven", "RPC", "JUnit", "Kafka", "Microservices", "RESTful APIs"]
//   },
//   {
//     title: "Cloud & DevOps",
//     skills: ["Git", "Docker", "Kubernetes", "CI/CD", "AWS", "Monitoring", "Logging"]
//   },
//   {
//     title: "System Design & Architecture",
//     skills: ["Software Architecture", "System Design", "OOD", "Distributed System"]
//   },
//   {
//     title: "Database & Storage",
//     skills: ["SQL", "MySQL", "NoSQL (Redis)", "Elasticsearch"]
//   }
// ];

// export const Skills = () => {
//   return (
//     <section id="skills" className="py-20 px-4 relative bg-white">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-800">
//             Technical Skills
//           </h2>
//           <p className="text-stone-600 text-lg max-w-2xl mx-auto font-bold">
//             A comprehensive toolkit built through 5+ years of hands-on experience and continuous learning
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skillCategories.map((category, index) => (
//             <Card 
//               key={category.title} 
//               className="bg-violet-100 backdrop-blur-sm border-stone-200 hover:bg-stone-100/80 transition-all duration-300 hover:scale-105 animate-fade-in shadow-sm"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-semibold text-stone-800 mb-4">{category.title}</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {category.skills.map((skill) => (
//                     <Badge 
//                       key={skill} 
//                       variant="secondary" 
//                       className="bg-white text-stone-700 hover:bg-stone-100 transition-colors border-stone-200"
//                     >
//                       {skill}
//                     </Badge>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// import React from "react";
// import {
//   SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiSap,
//   SiSass, SiBootstrap, SiNodedotjs, SiNestjs, SiExpress, SiMysql, SiPostgresql,
//   SiMongodb, SiPrisma, SiGit
// } from "react-icons/si";

// // 技术栈数据
// const frontend = [
//   { icon: <SiJavascript className="text-yellow-400" />, name: "Javascript" },
//   { icon: <SiTypescript className="text-blue-500" />, name: "Typescript" },
//   { icon: <SiReact className="text-cyan-400" />, name: "React" },
//   { icon: <SiNextdotjs className="text-gray-100" />, name: "Next.Js" },
//   { icon: <SiRedux className="text-purple-400" />, name: "Redux" },
//   { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind CSS" },
//   { icon: <SiSap className="text-green-400" />, name: "GSAP" },
//   { icon: <SiSass className="text-pink-400" />, name: "SASS" },
//   { icon: <SiBootstrap className="text-purple-600" />, name: "Bootstrap" },
// ];

// const backend = [
//   { icon: <SiNodedotjs className="text-green-500" />, name: "Node.Js" },
//   { icon: <SiNestjs className="text-red-500" />, name: "Nest.Js" },
//   { icon: <SiExpress className="text-gray-200" />, name: "Express.Js" },
// ];

// const database = [
//   { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
//   { icon: <SiPostgresql className="text-blue-500" />, name: "PostgreSQL" },
//   { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
//   { icon: <SiPrisma className="text-gray-100" />, name: "Prisma" },
// ];

// const tools = [
//   { icon: <SiGit className="text-orange-500" />, name: "Git" },
// ];

// // Section 组件
// const Section = ({
//   title,
//   items,
// }: {
//   title: string;
//   items: { icon: JSX.Element; name: string }[];
// }) => (
//   <div>
//     <h2 className="text-4xl font-extrabold text-gray-200 mb-6">{title}</h2>
//     <div className="flex flex-wrap gap-8 mb-12">
//       {items.map(({ icon, name }) => (
//         <div key={name} className="flex items-center gap-3 min-w-[150px]">
//           <span className="text-4xl">{icon}</span>
//           <span className="text-lg text-gray-100">{name}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default function Skills() {
//   return (
//     <section className="min-h-screen bg-[#232323] py-20 px-4 flex flex-col items-center">
//       <div className="max-w-5xl w-full">
//         <div className="mb-12">
//           <span className="text-gray-400 text-6xl font-semibold tracking-widest flex items-center gap-2">
//            Tech Skills
//           </span>
//         </div>
//         <Section title="FRONTEND" items={frontend} />
//         <Section title="BACKEND" items={backend} />
//         <Section title="DATABASE" items={database} />
//         <Section title="TOOLS" items={tools} />
//       </div>
//     </section>
//   );
// }





import React from "react";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiSap,
  SiFramer, SiSass, SiBootstrap, SiNodedotjs, SiNestjs, SiExpress, SiMysql, SiPostgresql,
  SiMongodb, SiPrisma, SiGit, SiHtml5, SiRedis, SiPython, SiCplusplus, SiGoland, SiOpenjdk,
  SiElasticsearch,
  SiSpringboot,
  SiSpring,
  SiApachemaven,
  SiJunit5,
  SiApachekafka,
  SiDocker,
  SiKubernetes,
  SiAmazon
} from "react-icons/si";

const skills = [
  {
    category: "BACKEND",
    items: [
      { icon: <SiOpenjdk className="text-green-500" />, name: "Java" },
      { icon: <SiPython className="text-green-500" />, name: "Python" },
      { icon: <SiCplusplus className="text-green-500" />, name: "C++" },
      { icon: <SiNodedotjs className="text-green-500" />, name: "Node.Js" },
      { icon: <SiGoland className="text-red-500" />, name: "Golang" },
    ],
  },
  {
    category: "FRONTEND",
    items: [
      { icon: <SiHtml5 className="text-green-400" />, name: "HTML" },
      { icon: <SiJavascript className="text-yellow-400" />, name: "Javascript" },
      { icon: <SiTypescript className="text-blue-500" />, name: "Typescript" },
      { icon: <SiReact className="text-cyan-400" />, name: "React" },
      { icon: <SiNextdotjs className="text-gray-100" />, name: "Next.Js" },
      { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind CSS" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { icon: <SiSpringboot className="text-green-400" />, name: "SpringBoot" },
      { icon: <SiApachemaven className="text-blue-500" />, name: "Maven" },
      { icon: <SiJunit5 className="text-cyan-400" />, name: "Junit" },
      { icon: <SiApachekafka className="text-gray-100" />, name: "Kafka" },
      { icon: <SiOpenjdk className="text-cyan-300" />, name: "Microservices" },
      { icon: <SiOpenjdk className="text-cyan-300" />, name: "RESTful APIs" },
    ],
  },
  {
    category: "Cloud DevOps",
    items: [
      { icon: <SiGit className="text-green-400" />, name: "Git" },
      { icon: <SiDocker className="text-yellow-400" />, name: "Docker" },
      { icon: <SiKubernetes className="text-blue-500" />, name: "Kubernetes" },
      { icon: <SiAmazon className="text-cyan-300" />, name: "AWS" },
      { icon: <SiOpenjdk className="text-cyan-300" />, name: "Monitoring" },
      { icon: <SiOpenjdk className="text-cyan-300" />, name: "Logging Tool" },
    ],
  },
  {
    category: "DATABASE",
    items: [
      { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
      { icon: <SiPostgresql className="text-blue-500" />, name: "PostgreSQL" },
      { icon: <SiRedis className="text-green-400" />, name: "Redis" },
      { icon: <SiElasticsearch className="text-gray-100" />, name: "ElasticSearch" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-[#232323] py-20 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        {/* Tech Skills 标题 */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-300 mb-20 tracking-wide">
          Tech Skills
        </h2>
        <div className="flex flex-row">
          {/* 左侧大类 */}
          <div className="flex flex-col items-start w-60 mr-60">
            {skills.map((group, idx) => (
              <div
                key={group.category}
                className={`mb-32 text-4xl font-extrabold text-gray-500 tracking-wider`}
                style={{ letterSpacing: "0.05em" }}
              >
                {group.category}
              </div>
            ))}
          </div>
          {/* 右侧技能 */}
          <div className="flex-1 flex flex-col">
            {skills.map((group) => (
              <div
                key={group.category}
                className="mb-20 flex flex-wrap gap-x-8 gap-y-6"
              >
                {group.items.map(({ icon, name }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 min-w-[160px]"
                  >
                    <span className="text-3xl">{icon}</span>
                    <span className="text-2xl text-gray-100">{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}