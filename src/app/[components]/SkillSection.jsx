import React from "react";
import Skill from "./Skill";

function SkillSection() {
  return (
    <div id="skills">
      <div className="text-myblue text-base font-bold my-5">Skills</div>
      <div className="text-textcolor text-xl lg:text-2xl font-bold">
        DevOps Skills
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <div className="text-lg text-textcolor font-semibold my-8 lg:text-xl ">
            Orchestration & Containerization
          </div>
          <Skill
            icon="https://img.icons8.com/?size=100&id=zFAYIdFZlGxP&format=png&color=000000"
            name="Docker"
            progress={70}
          />
          <Skill
            icon="https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000"
            name="Kubernetes"
            progress={50}
          />
          <div className="text-lg text-textcolor font-semibold my-8 lg:text-xl ">
            Continuous Integration & Delivery (CI/CD)
          </div>
          <Skill
            icon="/skills/github-action.png"
            name="GitHub Actions"
            progress={60}
          />
          <Skill
            icon="https://img.icons8.com/?size=100&id=39292&format=png&color=000000"
            name="Jenkins"
            progress={50}
          />

          <div className="text-lg text-textcolor font-semibold my-8 lg:text-xl ">
            Automation & Configuration Management
          </div>
          <Skill
            icon="https://img.icons8.com/?size=100&id=kEkT1u7zTDk5&format=png&color=000000"
            name="Terraform"
            progress={80}
          />
          <Skill
            icon="https://img.icons8.com/?size=100&id=bHzVh76DVogj&format=png&color=000000"
            name="Ansible"
            progress={70}
          />
        </div>
        <div>
          <div className="text-lg text-textcolor font-semibold my-8 lg:text-xl ">
            Container Registry & Package Management:
          </div>
          <Skill
            icon="https://img.icons8.com/?size=100&id=zFAYIdFZlGxP&format=png&color=000000"
            name="Docker Hub"
            progress={90}
          />
          <Skill
            icon="/skills/JFrog-artifactory.png"
            name="JFrog Artifactory"
            progress={75}
          />
          <Skill
            icon="/skills/github-package.png"
            name="GitHub Package Registry"
            progress={85}
          />

          <div className="text-lg text-textcolor font-semibold my-8 lg:text-xl ">
            Version Control
          </div>
          <Skill
            icon="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
            name="Git"
            progress={95}
          />
          <Skill
            icon="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
            name="GitHub"
            progress={90}
          />
          <Skill
            icon="https://img.icons8.com/?size=100&id=20907&format=png&color=000000"
            name="Bitbucket"
            progress={70}
          />
          <Skill
            icon="https://img.icons8.com/?size=100&id=34886&format=png&color=000000"
            name="GitLab"
            progress={80}
          />
        </div>
        <div>
          <div className="text-lg text-textcolor font-semibold my-8 lg:text-xl ">
            Scripting Languages
          </div>
          <Skill
            icon="https://img.icons8.com/?size=100&id=8gWOBXY72Osj&format=png&color=000000"
            name="Bash"
            progress={80}
          />
          <Skill
            icon="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
            name="Python"
            progress={70}
          />
          <div className="text-lg text-textcolor font-semibold my-8 lg:text-xl ">
            Cloud Providers
          </div>
          <Skill
            icon="https://img.icons8.com/?size=100&id=33039&format=png&color=000000"
            name="AWS"
            progress={70}
          />
          <Skill
            icon="https://img.icons8.com/?size=100&id=81727&format=png&color=000000"
            name="Azure"
            progress={40}
          />
          <div className="text-lg text-textcolor font-semibold my-8 lg:text-xl ">
            Monitoring & Logging
          </div>
          <Skill
            icon="https://img.icons8.com/?size=100&id=Ei4ZhVQvIMHE&format=png&color=000000"
            name="Prometheus"
            progress={60}
          />
          <Skill
            icon="https://img.icons8.com/?size=100&id=bMkmDxPRZAld&format=png&color=000000"
            name="Grafana"
            progress={60}
          />
          <Skill
            icon="/skills/fluentd_logo.webp"
            name="FluentD"
            progress={50}
          />
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
