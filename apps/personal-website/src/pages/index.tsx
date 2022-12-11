import { personalInfo, work } from 'shared';
import { BaseHead } from '../components';
import { ProjectCard } from '../components/home/project-card';
import Timeline from '../components/timeline';
import { SITE_DESCRIPTION, SITE_TITLE } from '../config';

export default function Home() {
  return (
    <div>
      <BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />
      <main>
        <section className="h-screen bg-neutral-900 py-10 px-16">
          <div className="h-full relative">
            <div className="absolute top-0 right-0">
              <span className="text-gray-400">
                {personalInfo.address.city}, {personalInfo.address.country}
              </span>
            </div>
            <div className="flex flex-col pt-32 mx-auto w-fit">
              <h1 className="text-4xl text-green-500 font-bold">{personalInfo.getName('full')}</h1>
              <p className="text-8xl max-w-[950px] font-bold text-white">{work.position}</p>
            </div>
            <div className="absolute bottom-0 left-0">
              <span className="text-gray-400">Projects</span>
            </div>
            <div className="absolute bottom-0 right-0 flex gap-x-8 text-gray-400">
              <a href="/resume" className="hover:underline">
                {' '}
                Resume
              </a>
              <a href={personalInfo.contacts.linkedinLink} className="hover:underline">
                {' '}
                LinkedIn
              </a>
              <a href={`https://t.me/${personalInfo.contacts.tg}`} className="hover:underline">
                Telegram
              </a>
            </div>
          </div>
        </section>
        <section className="h-screen bg-neutral-50 py-10 px-16">
          <div className="h-full relative">
            <Timeline />
          </div>
        </section>
        <section className="h-screen bg-neutral-50 py-10 px-16">
          <div className="h-full relative">
            <h2 className="text-5xl">Projects</h2>
            <ul className="mt-10 grid grid-cols-2 gap-4">
              <li>
                <ProjectCard
                  title="Predator and Prey model visualization"
                  tags={[
                    {
                      content: 'TypeScript',
                      className: 'bg-blue-500',
                    },
                    {
                      content: 'React',
                      className: 'bg-blue-500',
                    },
                    {
                      content: 'Vite',
                      className: 'bg-blue-500',
                    },
                  ]}
                >
                  <p>Some kind of description</p>
                </ProjectCard>
              </li>
              <li>
                <ProjectCard
                  title="Predator and Prey model visualization"
                  tags={[
                    {
                      content: 'TypeScript',
                      className: 'bg-blue-500',
                    },
                    {
                      content: 'React',
                      className: 'bg-blue-500',
                    },
                    {
                      content: 'Vite',
                      className: 'bg-blue-500',
                    },
                  ]}
                >
                  <p>Some kind of description</p>
                </ProjectCard>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
