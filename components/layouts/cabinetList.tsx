import { ROUTES } from '@/app/config/routes';
import { PRODUCTS } from '@/entities/product/static/products';
import { Gauge, User } from 'lucide-react';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { SheetClose } from '../ui/sheet';

interface ICabinetListProps {

};

type TMenuItem = {
  title: string;
  icon: ReactNode;
  color: string;
  link: string;
}

const MENU_ITEMS: TMenuItem[] = [
  {
    title: 'Dashboard',
    icon: <Gauge />,
    color: 'text-white',
    link: ROUTES.cabinet.dashboard,
  },
  ...PRODUCTS,
  {
    title: 'Profile',
    icon: <User />,
    color: 'text-white',
    link: ROUTES.cabinet.profile,
  }
]

const CabinetList: FC<ICabinetListProps> = ({ }) => {
  return (
    <div className="flex flex-col gap-2">
      {MENU_ITEMS.map((item) => (
        <SheetClose key={item.title} asChild>
          <Link href={item.link}  className="flex gap-2 p-3 hover:bg-black/10 cursor-pointer">
            <div className={item.color}>{item.icon}</div>
            <div>{item.title}</div>
          </Link>
        </SheetClose>
      ))}
    </div>
  )
};

export default CabinetList;