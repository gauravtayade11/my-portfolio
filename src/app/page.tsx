"use client";

import { useState } from "react";

export default function Home() {
  const [showAllCerts, setShowAllCerts] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-10 -left-20 w-64 h-64 sm:top-20 sm:left-10 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-64 h-64 sm:bottom-20 sm:right-10 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-12 relative z-10">

        {/* Hero Section */}
        <header className="mb-12 sm:mb-16 text-center">
          <div className="inline-block mb-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full animate-fadeIn animate-pulse-glow">
            <span className="text-cyan-400 font-medium text-xs sm:text-sm">Open to Opportunities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight animate-fadeInUp delay-100 drop-shadow-lg px-4">
            GAURAV TAYADE
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 font-medium animate-fadeInUp delay-200">
            DevOps / Cloud Engineer
          </p>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 animate-fadeInUp delay-300 mb-6 sm:mb-8 px-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="whitespace-nowrap">Pune, MH</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+917083548427" className="hover:text-cyan-400 transition-colors whitespace-nowrap">
                +91 7083548427
              </a>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-center">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:gauravtayade1192@gmail.com" className="hover:text-cyan-400 transition-colors truncate max-w-[200px] sm:max-w-none">
                gauravtayade1192@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 sm:gap-4 animate-fadeInUp delay-400 mb-6 sm:mb-8">
            <a href="https://linkedin.com/in/gauravtayade11" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-3 hover:bg-white/10 hover:border-cyan-400 transition-all hover:scale-110 group">
              <svg className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/gauravtayade11" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-3 hover:bg-white/10 hover:border-purple-400 transition-all hover:scale-110 group">
              <svg className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://twitter.com/gauravtayade11" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-3 hover:bg-white/10 hover:border-blue-400 transition-all hover:scale-110 group">
              <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>

          {/* Download Resume Button */}
          <div className="flex justify-center animate-fadeInUp delay-500">
            <a
              href="/resume.pdf"
              download="Gaurav_Tayade_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all hover:scale-105 shadow-lg shadow-cyan-500/30 group"
            >
              <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-12 bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 animate-fadeInUp delay-400 hover:bg-white/10 transition-all">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50"></div>
            Professional Summary
          </h2>
          <p className="text-gray-300 leading-relaxed">
            DevOps Engineer with 3+ years of experience in designing, automating, and maintaining secure,
            scalable cloud infrastructure. Strong expertise in AWS, Azure, GCP, Kubernetes, CI/CD pipelines,
            and Infrastructure as Code (Terraform, Ansible). Proven ability to analyze operational data,
            troubleshoot complex production issues, and improve system reliability, performance, and security
            in agile environments.
          </p>
        </section>

        {/* Core Skills */}
        <section className="mb-12 bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 animate-fadeInUp delay-500 hover:bg-white/10 transition-all">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-500/50"></div>
            Core Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {[
              { category: "Cloud Platforms", skills: "AWS, Azure, Google Cloud Platform" },
              { category: "DevOps & CI/CD", skills: "Jenkins, Azure DevOps, SonarQube" },
              { category: "Infrastructure as Code", skills: "Terraform, Ansible" },
              { category: "Containers & Orchestration", skills: "Docker (ECR, ACR), Kubernetes (EKS, AKS)" },
              { category: "Scripting & Automation", skills: "Python, Bash" },
              { category: "Monitoring & Observability", skills: "Prometheus, Grafana, CloudWatch, Azure Monitor" },
              { category: "Version Control", skills: "Git, Azure Repos" },
              { category: "Databases & Security", skills: "PostgreSQL, ArangoDB, Azure Key Vault" },
            ].map((item, index) => (
              <div key={index} className="group">
                <h3 className="font-semibold text-cyan-400 mb-1 group-hover:text-cyan-300 transition-colors">{item.category}</h3>
                <p className="text-gray-400 text-sm">{item.skills}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-red-500 rounded-full shadow-lg shadow-orange-500/50"></div>
            Professional Experience
          </h2>

          {/* Astreya */}
          <div className="mb-8 bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 hover:bg-white/10 transition-all">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">DevOps Engineer / Consultant</h3>
                <p className="text-cyan-400 font-medium">Astreya</p>
                <p className="text-gray-400 text-sm">Pune, Maharashtra</p>
              </div>
              <div className="text-gray-400 text-sm mt-2 sm:mt-0">
                August 2025 – Present
              </div>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Execute cloud infrastructure automation and technical troubleshooting for production environments.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Design and maintain secure, high-quality DevOps pipelines for containerized applications.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Analyze operational metrics and logs to drive continuous improvements in reliability and performance.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Identify patterns in system behavior to enhance automation, security, and cloud architecture.</span>
              </li>
            </ul>
          </div>

          {/* LTIMindtree */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 hover:bg-white/10 transition-all">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">DevOps Engineer</h3>
                <p className="text-cyan-400 font-medium">LTIMindtree</p>
                <p className="text-gray-400 text-sm">Pune, Maharashtra</p>
              </div>
              <div className="text-gray-400 text-sm mt-2 sm:mt-0">
                July 2022 – August 2025
              </div>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Designed and implemented cloud infrastructure solutions on AWS and Azure, ensuring scalability, security, and high availability.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Built and optimized CI/CD pipelines using Jenkins and Azure DevOps, reducing deployment time by ~30%.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Automated infrastructure provisioning using Terraform and Ansible for consistent and compliant deployments.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Deployed AWS services including VPC, ALB, EKS, IAM, and security groups.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Integrated SonarQube and CAST Imaging into pipelines to improve code quality.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Monitored production systems using Prometheus, Grafana, and CloudWatch.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Automated operational tasks using Python and Bash, reducing manual effort by ~25%.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Managed Dockerized microservices on Kubernetes with scaling and reliability best practices.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(() => {
              const allCertifications = [
                {
                  name: "AWS Certified Developer – Associate",
                  provider: "Amazon Web Services",
                  color: "from-orange-500 to-orange-600",
                  borderColor: "hover:border-orange-500/50",
                  textColor: "text-orange-400",
                  bgGlow: "group-hover:shadow-orange-500/20",
                  url: "https://www.credly.com/badges/6f61048c-a53a-4302-b994-24b07b1f6307/public_url"
                },
                {
                  name: "Google Cloud Professional DevOps Engineer",
                  provider: "Google Cloud",
                  color: "from-blue-500 via-red-500 to-yellow-500",
                  borderColor: "hover:border-blue-500/50",
                  textColor: "text-blue-400",
                  bgGlow: "group-hover:shadow-blue-500/20",
                  url: "https://www.credly.com/badges/9ff48324-a36a-4db6-9ffd-b76606cac19f/public_url"
                },
                {
                  name: "AWS Cloud Practitioner",
                  provider: "Amazon Web Services",
                  color: "from-orange-500 to-orange-600",
                  borderColor: "hover:border-orange-500/50",
                  textColor: "text-orange-400",
                  bgGlow: "group-hover:shadow-orange-500/20",
                  url: "https://www.credly.com/badges/80c838b5-3d1a-4668-af4e-47b22989210e/public_url"
                },
                {
                  name: "Microsoft AZ-900 (Azure Fundamentals)",
                  provider: "Microsoft Azure",
                  color: "from-blue-500 to-blue-600",
                  borderColor: "hover:border-blue-500/50",
                  textColor: "text-blue-400",
                  bgGlow: "group-hover:shadow-blue-500/20",
                  url: "https://www.credly.com/badges/25500f51-42b6-4678-8293-fa38c17761d1/public_url"
                },
              ];

              const displayedCerts = showAllCerts ? allCertifications : allCertifications.slice(0, 2);

              return displayedCerts.map((cert, index) => (
                <div key={index} className={`group bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/10 ${cert.borderColor} transition-all hover:scale-105 ${cert.bgGlow} relative overflow-hidden`}>
                  {/* Gradient accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`}></div>

                  <div className="flex items-start gap-4">
                    {/* Badge Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold mb-1 leading-tight">{cert.name}</h3>
                      <p className={`text-sm ${cert.textColor} mb-3`}>{cert.provider}</p>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs ${cert.textColor} hover:text-white transition-colors group/link`}
                      >
                        <span>View Certificate</span>
                        <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ));
            })()}
          </div>

          {/* See All / Show Less Button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAllCerts(!showAllCerts)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-400 transition-all group"
            >
              <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                {showAllCerts ? "Show Less" : "See All Certifications"}
              </span>
              <svg
                className={`w-4 h-4 text-gray-300 group-hover:text-cyan-400 transition-all ${showAllCerts ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-500/50"></div>
            Education
          </h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 hover:bg-white/10 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">
              Bachelor of Engineering (Electrical Engineering)
            </h3>
            <p className="text-cyan-400 font-medium mb-1">
              Savitribai Phule Pune University
            </p>
            <p className="text-gray-400">2019 – 2022</p>
          </div>
        </section>

        {/* Let's Connect CTA */}
        <section className="mb-12 bg-white/5 backdrop-blur-lg rounded-2xl p-10 sm:p-12 shadow-2xl border border-white/10 relative overflow-hidden group/connect hover:bg-white/10 transition-all">
          {/* Gradient accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

          {/* Ambient background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl group-hover/connect:bg-cyan-500/20 transition-all"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl group-hover/connect:bg-purple-500/20 transition-all"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Let's Connect</h2>
            </div>

            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
              Open to new opportunities and collaborations. Whether you're looking for a DevOps engineer or want to discuss cloud infrastructure solutions, I'd love to hear from you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "gauravtayade1192@gmail.com",
                  href: "mailto:gauravtayade1192@gmail.com",
                  color: "cyan"
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  ),
                  label: "LinkedIn",
                  value: "gauravtayade11",
                  href: "https://linkedin.com/in/gauravtayade11",
                  color: "blue"
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  ),
                  label: "GitHub",
                  value: "gauravtayade",
                  href: "https://github.com/gauravtayade",
                  color: "purple"
                }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-cyan-400 transition-all group/item"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`text-${contact.color}-400 group-hover/item:text-${contact.color}-300 transition-colors`}>
                      {contact.icon}
                    </div>
                    <span className="text-gray-400 text-sm font-medium">{contact.label}</span>
                  </div>
                  <p className="text-white text-sm font-medium truncate group-hover/item:text-cyan-400 transition-colors">
                    {contact.value}
                  </p>
                </a>
              ))}
            </div>

            <div className="text-center">
              <a
                href="mailto:gauravtayade1192@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all hover:scale-105 shadow-lg shadow-cyan-500/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            © 2026 Gaurav Tayade. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
