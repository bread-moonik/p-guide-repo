import React from 'react';

export interface PageProps {
  title: string;
}

const MainTitle = ({title} : PageProps) => {
  return (
    <div>
      <h1 className="title">{title}</h1>
    </div>
  )
}

export default MainTitle