"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                About <span className="text-primary-cyan">Me</span>
              </h2>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  Hi! I'm{" "}
                  <span className="text-primary-cyan font-semibold">
                    Akhmad Faizal
                  </span>
                  , an experienced <strong>Front End Engineer</strong>{" "}
                  specializing in architecting high-performance,
                  industrial-grade web applications. I deeply focus on the{" "}
                  <strong>React ecosystem (Next.js & TypeScript)</strong>{" "}
                  leveraging <strong>Clean Architecture</strong> principles and
                  advanced state management like
                  <strong> Tanstack Query and Zustand</strong> to build
                  scalable, type-safe systems.
                </p>
                <p>
                  At <strong>Wings Group Indonesia</strong>, i architect and
                  engineer centralized{" "}
                  <strong>Master Data Givernance (MDG) </strong>
                  modules that seamlessly integrate with <strong>SAP</strong>.
                  My journey also includes developing mission-critical system
                  like <strong>Fleet Management System (FMS)</strong> with
                  real-time geospatial data, a{" "}
                  <strong>
                    Workshop Monitoring APP (001M Plant Management)
                  </strong>{" "}
                  and CRM platforms. I thrive in driving cross-functional
                  collaboration and turning rigid enterprise data structures
                  into high-performance, user-friendly experiences.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative shine-border">
                <Image
                  src="/My_logo.png"
                  alt="My Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-cyan/10 to-transparent rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
