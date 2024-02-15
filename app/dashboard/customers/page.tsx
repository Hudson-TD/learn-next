import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { Metadata } from 'next';
import CustomersWrapper from './customers-wrapper';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers', active: true },
        ]}
      />
      <CustomersWrapper />
    </main>
  );
}
