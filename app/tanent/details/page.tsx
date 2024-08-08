import React from 'react';
import { Sidebar } from '@/components/common';
import ContactCard from './ContractCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import Jobs from './Jobs';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import RentalDetails from './RentalDetails';

type Props = {};

export default function Details({}: Props) {
  return (
    <ScrollArea className="p-4 h-[calc(100vh-60px)]">
      <div className="py-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex gap-3 ">
        <div className="space-y-5">
          <ContactCard
            name="Holt Debra"
            location="Hidia Bark, London, UK"
            phoneNumber="(208) 555-0112"
            email="debra.holt@example.com"
          />
          <RentalDetails
            remainingDuration="12 Months, 15 Days"
            rentAmount="£1,200"
            rentDueDate="1st of each month"
            rentStatus="Paid"
            rentDuration="12 months (1 Jan 2024- 31 Dec 2024)"
            propertyType="House"
            location="Hidia Bark, London, UK"
            postalCode="E1 6AN"
          />
        </div>
        <Jobs />
      </div>
    </ScrollArea>
  );
}
