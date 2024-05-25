import { personalInfo } from 'shared';

import {
  BaseHead,
  Education,
  Header,
  Mdx,
  SectionHeader,
  WorkExperience,
} from '../components';
import styles from '../styles/resume.module.css';

const Resume = () => (
  <div className="m-auto w-[1000px] p-12">
    <BaseHead title={`${personalInfo.getName('full', 'legal')} Resume`} />
    <Header />
    <main className="flex flex-col gap-6 pt-2">
      <section className={styles.section}>
        <h3>Experience</h3>
        <hr />
        <section>
          <SectionHeader
            title="Delivery Hero SE"
            subtitle="Senior Software Engineer"
            location="Berlin, Germany"
            dateFrom={new Date('August 2022')}
          />
          <Mdx>{`
At Delivery Hero, my role spanned a wide spectrum of frontend and backend
responsibilities:

- Managed the deprecation of a legacy PHP backoffice from the frontend side.
- Pioneered the development of a new React micro frontend.
- Engaged closely with backend engineers from multiple teams to synchronize APIs.
- Operated under a stringent deadline, ensuring the timely deployment of the project.
- Concurrently developed multiple features, utilizing feature flags and the proposed
  API. This strategic approach bolstered the development pace, keeping me largely
  unblocked throughout the project.
- Integrated localization into the micro frontend using react-i18n.
- Leveraged GH actions for global deployment, both configurations handled by me.
- Transitioned from Material UI to an adaptable internal design system for the vendor
management team.
- Established a new design system layered atop our internal platform, leading the
multi-team transition to this system.
- Spearheaded the integration of internationalization for the vendor management team.
- Contributed actively to the design system team's codebase and collaborated on the
  creation of functional yet extendable components.
- Facilitated smooth migration to the new design system across different teams.

This role underscored my versatility, allowing me to seamlessly pivot between frontend
and backend tasks as required, and my commitment to meeting deadlines without
compromising on quality.
          `}</Mdx>
        </section>
        <WorkExperience
          title="Frontend Engineer"
          dateFrom={new Date('March 2020')}
          dateTo={new Date('May 2022')}
          location="Moscow, Russia (Hybrid)"
          company="Avito"
          techStack={[
            'React',
            'Redux',
            'JavaScript',
            'TypeScript',
            'Webpack',
            'Go',
            'PHP',
          ]}
        >
          <Mdx>
            {`
Built Order Management system for professional sellers using React, Redux and
JavaScript, completely covered it with unit and snapshot tests with Jest.

- Proposed its migration to TypeScript to stakeholders and implemented it.
- Removed legacy PHP server. Replaced it with new Go micro-service.

Suggested an improvement to the way how teams in our cluster implement backoffice
dashboards. Conducted research and implemented new order management system for internal
support using React, Redux, TypeScript and micro-service architecture.

Evangelized and adopted TypeScript to all projects where applicable

Embraced API driven UI, thus significantly decreasing development time

Help each colleague to grow

- By providing extensive Code Reviews
- Organized meetups about micro-frontend architecture with webpack module federation
and code coverage analysis.
- Mentored junior frontend developers. Held regular 1 on 1 talks, assessing current
problems and planning their growth
            `}
          </Mdx>
        </WorkExperience>
        <WorkExperience
          title="Fullstack Developer"
          dateFrom={new Date('November 2020')}
          dateTo={new Date('Febraury 2022')}
          company="pr-mebel.ru"
          techStack={['React', 'Redux', 'TypeScript', 'Next.js', 'MySQL']}
        >
          <Mdx>
            {`
Migrated slow legacy PHP monolithic web app to modern tech stack.

Built with React, TypeScript and Next.js, served as static generated from CDN

Backend with serverless functions on vercel.com

- REST API for sending invoices through email
- GraphQL for connection to contentfulCMS

Database was implemented using cloud first MySQL platform planetscale.com
Styling is made with emotions.js and latest version of Material UI library
Set up CI/CD with gitlab pipelines and vercel automatic deploy from git
            `}
          </Mdx>
        </WorkExperience>
      </section>
    </main>
    <section className={styles.section}>
      <h3>Education</h3>
      <hr />
      <Education
        title="Bachelor’s Degree in Applied Mathematics"
        graduatedAt={new Date('June 2021')}
        place="Higher School of Economics"
        location="Moscow, Russia"
      >
        <p>Learned C/C++, Python, OOP patterns, Data Structures, Algorithms.</p>
      </Education>
      <Education
        title="Web Developer Online Course"
        graduatedAt={new Date('January 2020')}
        place="Yandex Practicum"
        location="Moscow, Russia (Remote)"
      >
        <p>
          Learned how to do responsive websites with HTML/CSS/JS, how to
          efficiently bundle them with webpack and how to deploy them to github
          pages
        </p>
        <p>
          Implemented several backend services written in Node.js with MongoDB
          and deployed them to VPS
        </p>
      </Education>
    </section>
  </div>
);

export default Resume;
