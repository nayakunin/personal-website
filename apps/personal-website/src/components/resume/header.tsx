import { personalInfo, work } from 'shared';

export const Header = () => (
  <header className='flex flex-row justify-between'>
    <div>
      <h1 className='text-3xl font-bold'>{personalInfo.getName('full', 'legal')}</h1>
      <h2 className='text-xl'>{work.position}</h2>
    </div>
    <div className='xl:text-right'>
      <p>
        <a className='underline' href={`tel:${personalInfo.contacts.phone}`}>
          {personalInfo.contacts.phone}
        </a>
      </p>
      <p>
        <a className='underline' href={`mailto:${personalInfo.contacts.email}`}>
          {personalInfo.contacts.email}
        </a>
      </p>
      <p>
        {personalInfo.address.city}, {personalInfo.address.country}
      </p>
      <p>
        <a className='underline' href={`https://t.me/${personalInfo.contacts.tg}`}>
          Telegram
        </a>
      </p>
      <p>
        <a className='underline' href={personalInfo.contacts.linkedinLink}>
          LinkedIn
        </a>
      </p>
    </div>
  </header>
);
