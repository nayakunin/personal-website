import {
  BaseHead,
  Header,
  Mdx,
  Section,
  SectionHeader,
} from '../../components';

const name = 'Nikita Yakunin';
const title = 'Senior Software Enigneer | React, TypeScript, Next.js, Go';

const Resume = () => (
  <div className="m-auto w-[1000px] p-12">
    <BaseHead title={name} description={title} />
    <Header
      name={name}
      title={title}
      phone="+4915753553799"
      email="nayakunin99@gmail.com"
      location="Berlin, Germany"
      tg="nayakunin"
      linkedin="https://www.linkedin.com/in/nikita-yakunin-30511b1b5/"
    />
    <main className="flex flex-col gap-6 pt-2">
      <Section title="Experience">
        <SectionHeader
          title="HelloFresh SE"
          subtitle="Senior Frontend Engineer"
          location="Berlin, Germany"
          dateFrom="Jun 2024"
        />
        <Mdx>{`
- Architected and developed a new experimentation framework for the team using CloudFlare Workers.
Removed the need for Marketing to involve developers for A/B testing. Was later adopted by other teams.
- Improved the observability of the application by reworking tracing. This result in a discovery of a few 0-day issues and bugs.
- Worked on Web Vitals improvements that resulted in monetary gains by improving the architecture of the application.
          `}</Mdx>
        <SectionHeader
          title="Delivery Hero SE"
          subtitle="Senior Software Engineer"
          location="Berlin, Germany"
          dateFrom="Aug 2022"
          dateTo="May 2024"
        />
        <Mdx>{`
- Led a team of 5 engineers maintaining ~15 internal applications.
- Conducted research in mono-repo architecture, implemented it for the team and trained the team on it.
Implemented all the necessary CI/CD pipelines and other processes using GitHub Actions.
- Developed and integrated an i18n architecture for the team, which was later adopted by other projects.
- Managed the migration to an internal design system for several teams, by developing a domain specific abstraction layer.
- Migrated an old PHP application to a new React app in tight deadlines.
          `}</Mdx>
        <SectionHeader
          title="Avito"
          subtitle="Software Engineer"
          location="Moscow, Russia"
          dateFrom="Mar 2020"
          dateTo="May 2022"
        />
        <Mdx>
          {`
- Proposed and migrated several projects to TypeScript.
- Conducted research and implemented an order management system (OMS) for internal
support using React, Redux, TypeScript and micro-service architecture.
- Migrated OMS backend from PHP to Go, thus improving performance and maintainability.
- Improved processes by introducing API driven UI, thus improving onboarding speed for new order types.
- Hosted workshops on Micro Frontends and TypeScript.
- Mentored junior frontend developers.
            `}
        </Mdx>
      </Section>
    </main>
    <Section title="Education">
      <SectionHeader
        title="Go Development Bootcamp"
        dateFrom="Feb 2023"
        dateTo="Jul 2023"
        subtitle="Yandex Practicum"
        location="Remote"
      />
      <SectionHeader
        title="Web Development Bootcamp"
        dateFrom="Feb 2019"
        dateTo="Jan 2020"
        subtitle="Yandex Practicum"
        location="Remote"
      />
      <SectionHeader
        title="Bachelor’s Degree in Applied Mathematics"
        subtitle="Higher School of Economics"
        location="Moscow, Russia"
        dateFrom="Sep 2017"
        dateTo="Jun 2021"
      />
    </Section>
  </div>
);

export default Resume;
