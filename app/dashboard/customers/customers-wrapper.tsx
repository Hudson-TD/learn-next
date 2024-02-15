import { fetchCustomerProfilesData } from '@/app/lib/data';
import CustomerCard from './customer-card';

export default async function CustomersWrapper() {
  const profiles = await fetchCustomerProfilesData();
  console.log(profiles);
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {profiles.map((customer, index) => (
        <CustomerCard key={index} customerData={customer} />
      ))}
    </div>
  );
}
