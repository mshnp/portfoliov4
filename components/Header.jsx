import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background-start z-50">
      <div className="container max-w-7xl sm:py-8 py-4 pl-4 sm:pl-8">
        <Link href="/">
          <div className="cursor-pointer block w-24 sm:w-36 h-8 sm:h-12 bg-blue-500 transition-colors duration-300 ease-in-out hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700"></div>
        </Link>
      </div>
    </header>
  );
};
