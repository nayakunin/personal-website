import React, { ReactNode } from 'react';

type StatsBlockProps = {
  children: ReactNode;
};

export const StatsBlock = ({ children }: StatsBlockProps) => (
  <div className='relative mb-10 w-full last-of-type:after:hidden after:absolute after:w-full after:bg-black after:h-px after:-bottom-5'>
    {children}
  </div>
);
