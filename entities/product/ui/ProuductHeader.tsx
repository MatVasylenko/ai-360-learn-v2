import React, { FC, ReactNode } from 'react';

interface IProductHeaderProps {
  title: string;
  icon: ReactNode;
  description: string;
  color: string;
};

const ProductHeader: FC<IProductHeaderProps> = ({
  title,
  icon,
  description,
  color,
}) => {

  return (
    <div className="bg-black/5 p-4 md:px-6">
      <div className="flex gap-2 items-center">
        <div className={color}>
          {icon}
        </div>
        <div className="text-xl font-medium">
          {title}
        </div>
      </div>
      <div>
        {description}
      </div>
    </div>
  )
};

export default ProductHeader;