import React from 'react';

export const Header = () => {
  return (
    <header className="w-full flex justify-between items-center mb-6">
      <h1>
        {localStorage.getItem('isPreyOnly') === '0' ? 'Модель хищник-жертва' : 'Модель жертва'}
      </h1>
    </header>
  );
};
