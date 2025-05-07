"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/Card";

type ProjectProps = {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  stack: ReadonlyArray<{
    icon: StaticImageData;
    name: string;
  }>;
};

const projectVariants = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      type: "spring",
      stiffness: 120,
      staggerChildren: 0.3,
    },
  },
};

const Project = ({ name, description, image, stack }: ProjectProps) => (
  <motion.div variants={projectVariants}>
    <Card className="mx-auto flex h-full w-full flex-col bg-zinc-950 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
      <div className="relative w-full overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="flex justify-center"
        >
          <Image
            src={image}
            alt={name}
            quality={100}
            width={600}
            height={400}
            className="h-auto max-h-[300px] w-full rounded-lg object-contain"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </motion.div>
      </div>

      <CardHeader className="mb-1 pb-0 pt-2">
        <CardTitle className="flex items-center px-2 py-0 font-montserrat text-slate-200">
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 1.2,
            }}
            className="text-xl"
          >
            {name}
          </motion.span>
        </CardTitle>
        <CardDescription className="px-2 font-nunito text-base text-slate-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <div className="flex flex-wrap items-center justify-start gap-2 text-center">
          {stack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex cursor-pointer items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-1 font-raleway font-medium text-gray-300 transition-all duration-150 hover:bg-white/10"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                quality={100}
                width={20}
                height={20}
                className="rounded-sm"
              />
              <span className="text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default Project;
