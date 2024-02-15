import Image from 'next/image';

type customerProfileProps = {
  customerData: {
    id: string;
    name: string;
    email: string;
    image_url: string;
  };
};

export default function CustomerCard({ customerData }: customerProfileProps) {
  return (
    <div className="border-gray/25 flex w-[15rem] flex-col items-center justify-center gap-10 rounded-md border bg-gray-50 p-4">
      <Image
        className="rounded-full"
        src={customerData.image_url}
        alt={`Profile picture of ${customerData.name}`}
        width={64}
        height={64}
      />
      <div className="flex flex-col text-center">
        <a className="font-bold">{customerData.name}</a>
        <a className="text-blue-400 hover:scale-110 hover:text-blue-600 cursor-pointer" href={`mailto:${customerData.email}`}>
          {customerData.email}
        </a>
      </div>
      <a
        className="pt-5 text-sm text-blue-800 underline"
        href={`/dashboard/invoices?page=1&query=${customerData.name}`}
      >
        View Invoice History
      </a>
    </div>
  );
}
