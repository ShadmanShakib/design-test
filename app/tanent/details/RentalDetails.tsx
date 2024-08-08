import * as React from 'react';
import Image from 'next/image';

import RentalChart from './RentalChart';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface RentalDetailsProps {
  remainingDuration: string;
  rentAmount: string;
  rentDueDate: string;
  rentStatus: string;
  rentDuration: string;
  propertyType: string;
  location: string;
  postalCode: string;
}

const RentalDetails: React.FC<RentalDetailsProps> = ({
  remainingDuration,
  rentAmount,
  rentDueDate,
  rentStatus,
  rentDuration,
  propertyType,
  location,
  postalCode,
}) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 lg:w-80">
      <div>
        <div className="">
          <div className="flex gap-10">
            <h1>Rental Details</h1>
            <span>12</span>
          </div>
          <RentalChart />
        </div>
        <div className="flex justify-between gap-5">
          <div className="">
            <h1 className="text-gray-700">Rent amount</h1>
            <h1 className="font-bold">
              <span> {rentAmount}/month</span>
            </h1>
          </div>
          <div className="">
            <h1 className="text-gray-700">Rent Due Date</h1>
            <h1 className="font-bold ">1st of each month</h1>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="w-1/2">
            <h1 className="text-gray-700">Rent status</h1>
            <div className="bg-green-100 py-1 w-20 rounded-2xl text-center">
              <span className="text-green-500">{rentStatus}</span>
            </div>
          </div>
          <div className="">
            <h1 className="text-gray-700">Rent Due Date</h1>
            <h1 className="font-semibold">12 months</h1>
            <h4 className="text-xs font-semibold">(1 Jan 2024 - 31 Dec 2024)</h4>
          </div>
        </div>
        <div className="h-[2px] my-3 bg-gray-300"></div>
        <div>
          <h1 className="font-semibold mb-3">Property</h1>
          <Image className=" rounded-md" src="/house.jpg" width={600} height={400} alt="house" />
          <div className="flex justify-between items-center mt-2">
            <div className="">
              <h1 className="font-semibold ">House in London</h1>
              <div className="flex gap-3 my-2">
                <p>Hidia Bark, London, UK</p>
                <ExternalLink />
              </div>
            </div>
            <Badge className="h-10 bg-gray-300 text-black">House</Badge>
          </div>
          <div>
            <span>Postal Code</span>
            <span>E16AN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalDetails;
