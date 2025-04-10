
import React from "react";
import AnimatedWordCycle from "@/components/ui/animated-word-cycle";

export default function AnimatedWordCycleDemo() {
  return (
    <div className="p-4 max-w-[500px] mx-auto">
      <h1 className="text-4xl font-light text-center text-kwena-dark-gray">
        Your{" "}
        <AnimatedWordCycle 
          words={[
            "business",
            "team",
            "workflow",
            "productivity",
            "projects",
            "analytics",
            "dashboard",
            "platform"
          ]}
          interval={3000}
          className={"text-kwena-blue font-semibold"} 
        />{" "}
        deserves better tools
      </h1>
    </div>
  );
}
