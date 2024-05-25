import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  title: string;
  tags: {
    content: string;
    className: string;
  }[];
  children: ReactNode;
};

export const ProjectCard = ({ tags, title, children }: Props) => (
  <div className="rounded border-4 border-neutral-900 bg-white p-6">
    <p className="text-2xl">{title}</p>
    <div className="mt-4">{children}</div>
    <div className="mt-4 flex gap-x-2">
      {tags.map((tag) => (
        <div key={tag.content} className={clsx('rounded-sm px-1 py-0.5 text-sm', tag.className)}>
          {tag.content}
        </div>
      ))}
    </div>
  </div>
);
