import { PRODUCTS } from '@/entities/product/static/products';
import ProductChatForm from '@/entities/product/ui/ProductChatForm';
import ProductHeader from '@/entities/product/ui/ProuductHeader';
import React, { FC } from 'react';

interface ICabinetChatPageProps {

};

const CabinetChatPage:FC<ICabinetChatPageProps> = ({}) => {
  const [chat] = PRODUCTS;
  return (
    <div className="md:flex-1 flex flex-col justify-between h-[calc(100vh-50px)]">
      <ProductHeader {...chat} />
      <ProductChatForm />
    </div>
  )
};

export default CabinetChatPage;