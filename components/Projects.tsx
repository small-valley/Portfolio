import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, index) => {
          return (
            <div
              key={index}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              {/* <motion.img
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src={project.iconUrl}
                        alt={project.alt} /> */}
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Projects {index + 1} of {projects.length}:
                  </span>{" "}
                  {project.title}
                </h4>

                <div className="flex items-center space-x-2">
                  {project.technologies?.map((technology) => {
                    return (
                      <img
                        key={technology.key}
                        className="h-10 w-10"
                        src={technology.iconUrl}
                        alt={technology.iconAlt}
                      />
                    );
                  })}
                </div>

                <div className="text-lg text-center md:text-left">
                  {project.summary.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>

                <div className="flex flex-col space-y-4">
                  {project.links.map((link, index) => {
                    return (
                      <Link
                        key={index}
                        href={link.url}
                        className="italic text-[#F7AB0A]/80"
                      >
                        {link.text}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]-skew-y-12" />
    </motion.div>
  );
}
