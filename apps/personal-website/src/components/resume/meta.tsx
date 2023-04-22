import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

export const Meta = ({ children }: Props) => {
  return <p className='absolute top-0 left-0 text-white -z-10'>{children}</p>
}