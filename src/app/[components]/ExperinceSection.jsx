import React from "react";
import { MdOutlineWork } from "react-icons/md";
import Image from "next/image";
import TimelineItem from "./TimelineItem";

function ExperinceSection() {
  return (
    <div>
      <div className="text-myblue text-base font-bold mt-5">Experince</div>
      <div className="flex items-center gap-2 space-x-2 mt-2">
        <MdOutlineWork className="w-8 h-8 text-textcolor" />
        <p className="text-2xl font-semibold text-text-color ">Job Experince</p>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
        {/* Logo and Company Information */}
        <div className="flex items-center gap-4">
          <div>
            <Image
              src="/education/visiontechbs_logo.jpeg"
              width={50}
              height={50}
              alt="Vision Tech Business Solutions"
              className="rounded-full shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800 dark:text-white md:text-2xl">
              Vision Tech Business Solutions
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
              Kadawatha, Sri Lanka
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l-4 border-blue-500 pl-6">
        {/* Associate DevOps Engineer Role */}
        <TimelineItem
          role="Associate DevOps Engineer"
          period="Aug 2024 - Present"
          location="Onsite"
          points={[
            "Provisioned and managed infrastructure using Terraform and Ansible, ensuring efficient and reliable resource deployment.",
            "Automated code deployment with CI/CD pipelines using GitHub Actions, streamlining the development and release lifecycle.",
            "Set up container management and monitoring with Portainer, improving visibility and control over containerized workloads.",
            "Designed and implemented backup solutions using Cron jobs and Amazon S3, ensuring data reliability and disaster recovery.",
            "Established application monitoring with Grafana and AWS CloudWatch, enhancing performance insights and system observability.",
            "Wrote Bash scripts to automate processes and enhance functionality within ERP systems, improving efficiency.",
          ]}
        />

        {/* Software Engineer Intern Role */}
        <TimelineItem
          role="Software Engineer Intern"
          period="Feb 2024 - Aug 2024"
          location="Onsite"
          points={[
            "Developed ERP systems using Python backend and JavaScript frontend within the Frappe framework.",
            "Built dynamic web applications with the MERN stack and Next.js.",
            "Created custom websites and applications using WordPress.",
            "Analyzed and understood business processes to design and implement effective ERP systems.",
          ]}
        />
      </div>
    </div>
  );
}

export default ExperinceSection;
