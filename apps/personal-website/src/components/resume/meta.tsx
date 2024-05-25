import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Meta = ({ children }: Props) => {
  return <p className="absolute left-0 top-0 -z-10 text-white">{children}</p>;
};
