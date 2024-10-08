import { Button } from '@/components/ui/button';
import React from 'react';

interface CallSummaryProps {
  date: string;
  contractor: string;
  urgency: string;
  frequency: string;
  status: string;
  callSummary: string;
  callDetails: string;
}

const JobItem: React.FC<CallSummaryProps> = ({
  date,
  contractor,
  urgency,
  frequency,
  status,
  callSummary,
  callDetails,
}) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 w-80 lg:w-auto">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
        <div className="bg-gray-50 p-2 rounded-md">
          <h3 className=" font-medium">Heater Malfunctioning</h3>
          <div className="mt-2 space-y-2 text-sm h-40">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Date</span>
              <span>{date}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Contractor</span>
              <span>{contractor}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Urgency</span>
              <span>{urgency}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Frequency</span>
              <span>{frequency}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Status</span>
              <span>{status}</span>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <Button className="w-60  ">View Job</Button>
          </div>
        </div>
        <div className="bg-gray-50 rounded-md p-2 text-sm">
          <h3 className=" font-medium">Call Summary</h3>
          <div className="h-40 ">
            <p className="mt-2 text-gray-500 ">{callSummary}</p>
          </div>
          <Button variant="outline" className="mt-4">
            {callDetails}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
