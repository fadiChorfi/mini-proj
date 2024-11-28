// components/DriverManagement.tsx
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

const DriverManagement: React.FC = () => {

  const [drivers, setDrivers] = useState([
    {
      id: 1,
      firstName: 'Ahmed',
      lastName: 'Benali',
      phone: '+213 555 123 456',
      email: 'ahmed.benali@tbhl.dz',
      address: 'Alger, Algérie'
    },
  ]);
  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);

  return (
    <div className="p-6 space-y-6 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Driver Management</h2>
        <Dialog open={isDriverModalOpen} onOpenChange={setIsDriverModalOpen}>
          <DialogTrigger asChild>
            <Button>Add New Driver</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Driver</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="firstName" className="text-right">
                  First Name
                </Label>
                <Input id="firstName" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lastName" className="text-right">
                  Last Name
                </Label>
                <Input id="lastName" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input id="phone" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" type="email" className="col-span-3" />
              </div>
              <Button type="submit" className="w-full">Save Driver</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardContent className= { drivers.length >6 ? "overflow-y-scroll max-h-[400px]" : "" }>
          
          <div className="overflow-x-auto ">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left border">ID</th>
                  <th className="p-3 text-left border">First Name</th>
                  <th className="p-3 text-left border">Last Name</th>
                  <th className="p-3 text-left border">Phone</th>
                  <th className="p-3 text-left border">Email</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver) => (
                  <tr key={driver.id} className="hover:bg-gray-50">
                    <td className="p-3 border">{driver.id}</td>
                    <td className="p-3 border">{driver.firstName}</td>
                    <td className="p-3 border">{driver.lastName}</td>
                    <td className="p-3 border">{driver.phone}</td>
                    <td className="p-3 border">{driver.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DriverManagement;
