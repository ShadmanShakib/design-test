import React from 'react';
import { Sidebar } from '@/components/common';

type Props = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: Props) {
  return (
    <div>
      <Sidebar>{children}</Sidebar>
    </div>
  );
}

export default DashboardLayout;
