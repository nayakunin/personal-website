import { format } from 'date-fns';
import { ReactNode } from 'react';

import styles from '../../styles/resume.module.css';

type Props = {
  title: string;
  graduatedAt: Date;
  place: string;
  location: string;
  children: ReactNode;
};
const dateTemplate = 'MMMM yyyy';

export const Education = ({
  graduatedAt,
  location,
  place,
  title,
  children,
}: Props) => (
  <article className={styles.article}>
    <div className={styles.details}>
      <p>{title}</p>
      <p>{format(graduatedAt, dateTemplate)}</p>
      <p>{place}</p>
      <p>{location}</p>
    </div>
    <div className={styles.description}>{children}</div>
  </article>
);
