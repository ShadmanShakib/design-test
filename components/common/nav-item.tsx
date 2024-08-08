'use client';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function NavItem({ href, children }: Props) {
  const path = usePathname();
  return (
    <Link
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
        {
          'bg-muted text-primary': path === href,
        },
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
