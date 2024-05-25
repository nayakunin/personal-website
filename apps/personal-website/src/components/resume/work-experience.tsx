import { format } from 'date-fns';
import { ReactNode } from 'react';

import styles from '../../styles/resume.module.css';

export type WorkExperienceProps = {
  title: string;
  dateFrom: Date;
  dateTo?: Date;
  company: string;
  location?: string;
  techStack: string[];
  children: ReactNode;
};

export const WorkExperience = ({
  company,
  dateFrom,
  techStack,
  title,
  dateTo,
  location,
  children,
}: WorkExperienceProps) => {
  const dateTemplate = 'MMMM yyyy';

  const dateFromFormatted = format(dateFrom, dateTemplate);
  const dateToFormatted = dateTo ? format(dateTo, dateTemplate) : 'Present';

  return (
    <article className={styles.article}>
      <div className={styles.details}>
        <strong>{company}</strong>
        <p>{title}</p>
        <p>
          {dateFromFormatted} - {dateToFormatted}
        </p>
        {location && <p>{location}</p>}
        <p className={styles.techStack}>Tech Stack: {techStack.join(', ')}</p>
      </div>
      <div className={styles.description}>{children}</div>
    </article>
  );
};
