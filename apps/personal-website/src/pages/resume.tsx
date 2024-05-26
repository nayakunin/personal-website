import { personalInfo } from 'shared';

import { BaseHead, Header, Mdx, Section, SectionHeader } from '../components';

const Resume = () => (
  <div className="m-auto w-[1000px] p-12">
    <BaseHead title={`${personalInfo.getName('full', 'legal')} Resume`} />
    <Header />
    <main className="flex flex-col gap-6 pt-2">
      <Section title="Experience">
        <SectionHeader
          title="Delivery Hero SE"
          subtitle="Senior Software Engineer"
          location="Berlin, Germany"
          dateFrom={new Date('Aug 2022')}
          dateTo={new Date('May 2024')}
        />
        <Mdx>{`
- Led a team of 5 engineers maintaining ~15 internal applications
- Conducted research in mono-repo architecture, implemented it for the team and trained the team on it.
Implemented all the necessary CI/CD pipelines and other processes using GitHub Actions
- Developed and integrated an i18n architecture for the team, which was later adopted by other projects
- Managed the migration to an internal design system for several teams, by developing a domain specific abstraction layer
- Migrated an old PHP application to a new React app in tight deadlines
          `}</Mdx>
        <SectionHeader
          title="Avito"
          subtitle="Software Engineer"
          location="Moscow, Russia"
          dateFrom={new Date('Mar 2020')}
          dateTo={new Date('May 2022')}
        />
        <Mdx>
          {`
- Proposed and migrated several projects to TypeScript
- Conducted research and implemented new order management system (OMS) for internal
support using React, Redux, TypeScript and micro-service architecture.
- Migrated OMS backend from PHP to Go, thus improving performance and maintainability
- Improved processes by introducing API driven UI, thus improving onboarding speed for new order types
- Hosted workshops on Micro Frontends and TypeScript
- Mentored junior frontend developers
            `}
        </Mdx>
        <SectionHeader
          title="pr-mebel.ru"
          subtitle="Fullstack Developer"
          location="Moscow, Russia"
          dateFrom={new Date('Nov 2020')}
          dateTo={new Date('Feb 2022')}
        />

        <Mdx>
          {`
- Full website rewrite using Next.js, TypeScript, React from PHP
- Up to 10x performance improvement
            `}
        </Mdx>
      </Section>
    </main>
    <Section title="Education">
      <SectionHeader
        title="Go Development Bootcamp"
        dateFrom={new Date('Feb 2023')}
        dateTo={new Date('Jul 2023')}
        subtitle="Yandex Practicum"
        location="Remote"
      />
      <SectionHeader
        title="Web Development Bootcamp"
        dateFrom={new Date('Feb 2019')}
        dateTo={new Date('Jan 2020')}
        subtitle="Yandex Practicum"
        location="Remote"
      />
      <SectionHeader
        title="Bachelor’s Degree in Applied Mathematics"
        subtitle="Higher School of Economics"
        location="Moscow, Russia"
        dateFrom={new Date('September 2017')}
        dateTo={new Date('June 2021')}
      />
    </Section>
  </div>
);

export default Resume;
