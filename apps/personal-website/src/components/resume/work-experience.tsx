import { format } from 'date-fns';
import { ReactNode } from 'react';
import styles from  '@/styles/resume.module.css';

export type Props = {
  title: string;
  dateFrom: Date;
  dateTo?: Date;
  company: string;
  location?: string;
  type: string;
  techStack: string[];
  children: ReactNode;
};

export const WorkExperience = ({
  company,
  dateFrom,
  techStack,
  title,
  type,
  dateTo,
  location,
  children,
}: Props) => {
  const dateTemplate = 'MMMM yyyy';

  const dateFromFormatted = format(dateFrom, dateTemplate);
  const dateToFormatted = dateTo ? format(dateTo, dateTemplate) : 'Present';

  return (
    <article className={styles.article}>
      <div className={styles.details}>
        <p>{title}</p>
        <p>
          {dateFromFormatted} - {dateToFormatted}
        </p>
        <p>
          {company}, {type}
        </p>
        {location && <p>{location}</p>}
        <p className={styles.techStack}>Tech Stack: {techStack.join(', ')}</p>
      </div>
      <div className={styles.description}>
        {children}
      </div>
    </article>
  );
};
