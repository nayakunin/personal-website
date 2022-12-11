import { ReactNode } from 'react';

import styles from  '../../styles/resume.module.css';

type Props = {
  title: string;
  graduated: string;
  place: string;
  location: string;
  children: ReactNode;
};

export const Education = ({ graduated, location, place, title, children }: Props) => (
  <article className={styles.article}>
    <div className={styles.details}>
      <p>{title}</p>
      <p>{graduated}</p>
      <p>{place}</p>
      <p>{location}</p>
    </div>
    <div className={styles.description}>
      {children}
    </div>
  </article>
);
