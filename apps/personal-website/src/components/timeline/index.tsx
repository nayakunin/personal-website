import clsx from 'clsx';

import styles from './styles.module.css';

const arr = [1, 2, 3];

export const Timeline = () => {
  return (
    <ul className="flex flex-col gap-y-5">
      {arr.map((_, i) => (
        <li key={i} className={clsx(styles.listItem, 'relative pb-5')}>
          <div className={clsx(styles.dot, "bg-green-500 rounded")} />
          <div className={styles.line} />
          <div className={styles.description}>
            <p className="text-xl">Title</p>
            <p className="text-md mt-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam recusandae repellat
              possimus, aut incidunt quasi doloribus iure ipsum nemo aliquam fugiat officiis nulla
              cupiditate a rem. Accusantium sed eum officia.
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
