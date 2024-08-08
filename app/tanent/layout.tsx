/** @format */

import React from 'react';
import { Sidebar } from '@/components/common';

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div>
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
