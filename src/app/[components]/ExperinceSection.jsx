import React from "react";
import { MdOutlineWork } from "react-icons/md";
import Image from "next/image";
import TimelineItem from "./TimelineItem";

function ExperinceSection() {
  return (
    <div>
      <div id="experience" className="text-myblue text-base font-bold mt-5">
        Experince
      </div>
      <div className="flex items-center gap-2 space-x-2 mt-2">
        <MdOutlineWork className="w-8 h-8 text-textcolor" />
        <p className="text-2xl font-semibold text-textcolor ">Job Experince</p>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 mt-5">
        {/* Logo and Company Information */}
        <div className="flex items-center gap-4 ">
          <div className="">
            <Image
              src="/education/visiontechbs_logo.jpeg"
              width={50}
              height={50}
              alt="Vision Tech Business Solutions"
              className="rounded-full shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-textcolor md:text-2xl">
              Vision Tech Business Solutions
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
              Kadawatha, Sri Lanka
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l-2 border-blue-500 pl-3 md:pl-6 ml-5">
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
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 mt-5">
        {/* Logo and Company Information */}
        <div className="flex items-center gap-4 ">
          <div className="">
            <Image
              src="/education/insee-logo.png"
              width={50}
              height={50}
              alt="INSEE Cement Sri Lanka"
              className="rounded-full shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-textcolor md:text-2xl">
              INSEE Cement Sri Lanka
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
              Access Towers, Colombo, Sri Lanka
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l-2 border-blue-500 pl-3 md:pl-6 ml-5">
        {/* Associate DevOps Engineer Role */}
        <TimelineItem
          role="Industrial Trainee"
          period="June 2023 -  Jan 2024"
          location="Hybrid"
          points={[
            "During industrial training, enhanced the web application used by the Logistics Department to monitor vehicles and drivers, and subsequently provided training to application users.",
          ]}
        />
      </div>
      <div className="w-full h-[1px] bg-gray-400 lg:mt-6"></div>
    </div>
  );
}

export default ExperinceSection;
