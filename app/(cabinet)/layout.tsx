import CabinetList from '@/components/layouts/cabinetList';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import React, { FC, ReactNode } from 'react';

interface ICabinetLayoutProps {
  children: ReactNode;
};

const CabinetLayout: FC<ICabinetLayoutProps> = ({
  children
}) => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sheet>
        <div className="hidden md:block bg-blue-950 text-white min-h-screen p-4 w-[300px]">
          <CabinetList />
        </div>
        <SheetTrigger asChild className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="bg-blue-950 text-white">
          <CabinetList />
        </SheetContent>
      </Sheet>
      {children}
    </div>
  )
};

export default CabinetLayout;