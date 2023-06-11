import React from 'react';

const Card = ({ card }) => {
  const numCards = card.items?.length;
  let columnClass = '';

  if (numCards === 1) {
    columnClass = 'sm:grid-cols-1';
  } else if (numCards === 2) {
    columnClass = 'sm:grid-cols-2';
  } else if (numCards === 4) {
    columnClass = 'md:grid-cols-2 lg:grid-cols-4';
  } else {
    columnClass = 'sm:grid-cols-1 md:grid-cols-3';
  }

  return (
    <div className={`grid grid-cols-1 ${columnClass} gap-4 justify-center`}>
      {card.items?.map((item, _key) => (
        <div key={_key} className="flex justify-center max-w-none">
          <div className="max-w-sm p-8 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
            <h6 className="mb-2 mt-0 font-medium tracking-tight text-black dark:text-white" style={{ marginTop: '0' }}>{item.title}</h6>
            <p className="font-normal text-gray-700 dark:text-gray-300">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
