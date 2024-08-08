import * as Avatar from '@radix-ui/react-avatar';
import * as Tooltip from '@radix-ui/react-tooltip';

interface ContactCardProps {
  name: string;
  location: string;
  phoneNumber: string;
  email: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, location, phoneNumber, email }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 w-80">
      <div className="flex items-center space-x-4">
        <Avatar.Root className="w-12 h-12 rounded-full overflow-hidden">
          <Avatar.Image
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`}
            alt={name}
            className="w-full h-full object-cover"
          />
          <Avatar.Fallback className="bg-gray-200 text-gray-500 font-medium w-full h-full flex items-center justify-center">
            {name
              .split(' ')
              .map((part) => part.charAt(0))
              .join('')}
          </Avatar.Fallback>
        </Avatar.Root>
        <div>
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-gray-500">{location}</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="flex items-center space-x-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-500">{phoneNumber}</span>
              </div>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="bg-gray-800 text-white px-2 py-1 rounded-md text-sm">
                {phoneNumber}
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="flex items-center space-x-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <span className="text-gray-500">{email}</span>
              </div>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="bg-gray-800 text-white px-2 py-1 rounded-md text-sm">
                {email}
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    </div>
  );
};

export default ContactCard;
