import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import JobItem from './JobItem';
import CallSummaryCard from './CallSummryCard';
type Props = {};

export default function Jobs({}: Props) {
  return (
    <Tabs defaultValue="maintain" className="w-full bg-gray-50">
      <TabsList className="">
        <TabsTrigger value="maintain">For maintainence (2)</TabsTrigger>
        <TabsTrigger value="inquiry">For Inquiry (2)</TabsTrigger>
      </TabsList>
      <TabsContent className="space-y-5" value="maintain">
        <JobItem
          date="20 Aug 2024, 01:46 PM"
          contractor="Not Assigned"
          urgency="Emergency"
          frequency="One time"
          status="In Progress"
          callSummary="Holt Debra reported that their heater is turning on but not producing any heat. The AI Assistant asked about the urgency of the issue and confirmed it was a minor inconvenience but still needed timely attention. A maintenance visit has been scheduled for either after 4 PM on a weekday or at a convenient time during the weekend."
          callDetails="View Job"
        />
        <JobItem
          date="20 Aug 2024, 01:46 PM"
          contractor="Not Assigned"
          urgency="Emergency"
          frequency="One time"
          status="In Progress"
          callSummary="Holt Debra reported that their heater is turning on but not producing any heat. The AI Assistant asked about the urgency of the issue and confirmed it was a minor inconvenience but still needed timely attention. A maintenance visit has been scheduled for either after 4 PM on a weekday or at a convenient time during the weekend."
          callDetails="View Job"
        />
      </TabsContent>
      <TabsContent className=" grid grid-cols-1 xl:grid-cols-2 gap-5" value="inquiry">
        <CallSummaryCard
          date="20 Aug 2024, 01:46 PM"
          callDescription="Holt Debra reported that their heater is turning on but not producing any heat. The AI Assistant asked about the urgency of the issue and confirmed it was a minor inconvenience but still needed timely attention. A maintenance visit has been scheduled for either after 4 PM on a weekday or at a convenient time during the weekend."
        />
        <CallSummaryCard
          date="20 Aug 2024, 01:46 PM"
          callDescription="Holt Debra reported that their heater is turning on but not producing any heat. The AI Assistant asked about the urgency of the issue and confirmed it was a minor inconvenience but still needed timely attention. A maintenance visit has been scheduled for either after 4 PM on a weekday or at a convenient time during the weekend."
        />
      </TabsContent>
    </Tabs>
  );
}
