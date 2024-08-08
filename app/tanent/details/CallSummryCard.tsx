import { Button } from '@/components/ui/button';
import React from 'react';

interface CallSummaryProps {
  date: string;
  callDescription: string;
}

const CallSummaryCard: React.FC<CallSummaryProps> = ({ date, callDescription }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="bg-gray-50 p-4 rounded-md">
        <div>
          <h3 className="text-lg font-medium">Call Summary</h3>
          <div className="">
            <span className="text-gray-500">{date}</span>
          </div>
        </div>
        <p className="mt-2 w-full text-gray-500">{callDescription}</p>
      </div>
      <div className="mt-4 flex ">
        <Button variant="outline">Call Details</Button>
      </div>
    </div>
  );
};

export default CallSummaryCard;
