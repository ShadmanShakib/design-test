import React from 'react';
import { Sidebar } from '@/components/common';
import { ChevronLeft } from 'lucide-react';
import ContactCard from './ContractCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
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
    <ScrollArea className="px-4 pt-4 h-[calc(100vh-60px)]">
      <div className="py-3 flex items-center gap-2">
        <Button className="rounded-2xl" variant="ghost">
          <ChevronLeft className="h-5 w-5" />
          Back
        </Button>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Tanent</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Tanent Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col gap-3 pb-10 md:flex-row items-center md:items-start ">
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
