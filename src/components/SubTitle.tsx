import React from 'react';

export interface SubProps {
  subTitle: string;
}

const SubTitle = ({subTitle} : SubProps) => {
  return (
    <div>
      <h2 className="title">{subTitle}</h2>
    </div>
  )
}

export default SubTitle