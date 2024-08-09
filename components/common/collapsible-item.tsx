'use client';
import React from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../ui/collapsible';
import NavItem from './nav-item';
import { ChevronDown, Package, UserPen } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {};

export default function CollapsibleItem({}: Props) {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="w-full ">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
            <Package className="h-4 w-4" />
            Viewings
          </div>
          <ChevronDown
            className={cn('transition-all duration-300 ease-in-out', {
              'rotate-180': open,
            })}
          />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-2">
        <NavItem href="#">
          <UserPen className="h-4 w-4" />
          Upcomming
        </NavItem>
      </CollapsibleContent>
    </Collapsible>
  );
}
