import { personalInfo } from 'shared';

import { BaseHead } from '../components';
import { Education } from '../components/resume/education';
import { Header } from '../components/resume/header';
import { WorkExperience } from '../components/resume/work-experience';
import styles from '../styles/resume.module.css';

const Resume = () => (
  <div className="w-[1000px] m-auto p-12">
    <BaseHead title={`${personalInfo.getName('full')} Resume`} />
    <Header />
    <main className="flex flex-col gap-6 pt-2">
      <section className={styles.section}>
        <h3>Experience</h3>
        <hr />
        <WorkExperience
          title="Senior Software Engineer"
          dateFrom={new Date('August 2022')}
          location="Berlin, Germany"
          company="Delivery Hero SE"
          type="Full-Time"
          techStack={['React', 'TypeScript', 'REST API']}
        >
          <p>
            At Delivery Hero, my role spanned a wide spectrum of frontend and backend
            responsibilities:
          </p>
          <ul>
            <li>Managed the deprecation of a legacy PHP backoffice from the frontend side.</li>
            <li>Pioneered the development of a new React micro frontend.</li>
            <li>
              Engaged closely with backend engineers from multiple teams to synchronize APIs.
            </li>
            <li>
              Operated under a stringent deadline, ensuring the timely deployment of the project.
            </li>
            <li>
              Concurrently developed multiple features, utilizing feature flags and the proposed
              API. This strategic approach bolstered the development pace, keeping me largely
              unblocked throughout the project.
            </li>
            <li>Integrated localization into the micro frontend using react-i18n.</li>
            <li>
              Leveraged GH actions for global deployment, both configurations handled by me.
            </li>
            <li>
              Transitioned from Material UI to an adaptable internal design system for the vendor
              management team.
            </li>
            <li>
              Established a new design system layered atop our internal platform, leading the
              multi-team transition to this system.
            </li>
            <li>
              Spearheaded the integration of internationalization for the vendor management team.
            </li>
            <li>
              Contributed actively to the design system team&apos;s codebase and collaborated on
              the creation of functional yet extendable components.
            </li>
            <li>Facilitated smooth migration to the new design system across different teams.</li>
          </ul>
          <p>
            This role underscored my versatility, allowing me to seamlessly pivot between frontend
            and backend tasks as required, and my commitment to meeting deadlines without
            compromising on quality.
          </p>
        </WorkExperience>
        <WorkExperience
          title="Middle Frontend Developer"
          dateFrom={new Date('March 2020')}
          dateTo={new Date('May 2022')}
          location="Moscow, Russia (Hybrid)"
          company="Avito"
          type="Full-Time"
          techStack={['React', 'Redux', 'JavaScript', 'TypeScript', 'Webpack', 'Go', 'PHP']}
        >
          <div>
            <p>
              Built Order Management system for professional sellers using React, Redux and
              JavaScript, completely covered it with unit and snapshot tests with Jest.
            </p>
            <ul>
              <li>Proposed its migration to TypeScript to stakeholders and implemented it.</li>
              <li>Removed legacy PHP server. Replaced it with new Go micro-service.</li>
            </ul>
          </div>
          <p>
            Suggested an improvement to the way how teams in our cluster implement backoffice
            dashboards. Conducted research and implemented new order management system for internal
            support using React, Redux, TypeScript and micro-service architecture.
          </p>
          <p>Evangelized and adopted TypeScript to all projects where applicable</p>
          <p>Embraced API driven UI, thus significantly decreasing development time</p>
          <div>
            <p>Help each colleague to grow</p>
            <ul>
              <li>By providing extensive Code Reviews</li>
              <li>
                Organized meetups about micro-frontend architecture with webpack module federation
                and code coverage analysis.
              </li>
              <li>
                Mentored junior frontend developers. Held regular 1 on 1 talks, assessing current
                problems and planning their growth
              </li>
            </ul>
          </div>
        </WorkExperience>
        <WorkExperience
          title="Fullstack Developer"
          dateFrom={new Date('November 2020')}
          dateTo={new Date('Febraury 2022')}
          company="pr-mebel.ru"
          type="Side Project"
          techStack={['React', 'Redux', 'TypeScript', 'Next.js', 'MySQL']}
        >
          <p>Migrated slow legacy PHP monolithic web app to modern tech stack.</p>
          <p>Built with React, TypeScript and Next.js, served as static generated from CDN</p>
          <div>
            <p>Backend with serverless functions on vercel.com</p>
            <ul>
              <li>REST API for sending invoices through email</li>
              <li>GraphQL for connection to contentfulCMS</li>
            </ul>
          </div>
          <p>Database was implemented using cloud first MySQL platform planetscale.com</p>
          <p>Styling is made with emotions.js and latest version of Material UI library</p>
          <p>Set up CI/CD with gitlab pipelines and vercel automatic deploy from git</p>
        </WorkExperience>
      </section>
    </main>
    <section className={styles.section}>
      <h3>Education</h3>
      <hr />
      <Education
        title="Bachelor’s Degree in Applied Mathematics"
        graduated="Graduated June 2021"
        place="Higher School of Economics"
        location="Moscow, Russia"
      >
        <p>Learned C/C++, Python, OOP patterns, Data Structures, Algorithms.</p>
      </Education>
      <Education
        title="Web Developer Online Course"
        graduated="Graduated January 2020"
        place="Yandex Practicum"
        location="Moscow, Russia (Remote)"
      >
        <p>
          Learned how to do responsive websites with HTML/CSS/JS, how to efficiently bundle them
          with webpack and how to deploy them to github pages
        </p>
        <p>
          Implemented several backend services written in Node.js with MongoDB and deployed them to
          VPS
        </p>
      </Education>
    </section>
  </div>
);

export default Resume;
