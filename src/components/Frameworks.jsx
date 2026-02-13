import React from "react";
import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "auth0",
    "django",
    "blazor",
    "css3",
    "git",
    "pytorch",
    "html5",
    "javascript",
    "react",
    "sqlite",
    "flask",
    "tailwindcss",
    "vitejs",
    "nodejs",
    "mongodb",
    "clerk",
    "gemini",
    "py",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} name={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} name={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ name }) => {
  const [src, setSrc] = React.useState(`assets/logos/${name}.svg`);

  return (
    <img
      src={src}
      onError={() => {
        if (src.endsWith(".svg")) {
          setSrc(`assets/logos/${name}.png`);
        }
      }}
      className="duration-200 rounded-sm hover:scale-110"
      alt={name}
    />
  );
};
