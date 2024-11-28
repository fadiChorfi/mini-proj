import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const VehicleManagement: React.FC = () => {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      registrationNumber: '12345 AL',
      brand: 'Mercedes',
      model: 'Sprinter',
      purchaseDate: '2022-01-15',
      revisions: [
        { date: '2023-06-01', type: 'Routine Maintenance' },
        { date: '2023-11-15', type: 'Brake System Check' }
      ]
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newVehicle, setNewVehicle] = useState({
    registrationNumber: '',
    brand: '',
    model: '',
    purchaseDate: ''
  });

  const handleDialogToggle = () => setIsDialogOpen(!isDialogOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewVehicle((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddVehicle = () => {
    setVehicles((prev) => [
      ...prev,
      {
        ...newVehicle,
        id: prev.length + 1,
        revisions: []
      }
    ]);
    setNewVehicle({ registrationNumber: '', brand: '', model: '', purchaseDate: '' });
    handleDialogToggle();
  };

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Vehicle Management</h2>
        <Button onClick={handleDialogToggle}>Add New Vehicle</Button>
      </div>

      {/* Vehicle Table */}
      <Card>
        <CardContent className= { vehicles.length >6 ? "overflow-y-scroll max-h-[400px]" : "" }>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left border">Registration</th>
                  <th className="p-3 text-left border">Brand</th>
                  <th className="p-3 text-left border">Model</th>
                  <th className="p-3 text-left border">Purchase Date</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="hover:bg-gray-50">
                    <td className="p-3 border">{vehicle.registrationNumber}</td>
                    <td className="p-3 border">{vehicle.brand}</td>
                    <td className="p-3 border">{vehicle.model}</td>
                    <td className="p-3 border">{vehicle.purchaseDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Add New Vehicle Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={handleDialogToggle}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Vehicle</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              name="registrationNumber"
              placeholder="Registration Number"
              value={newVehicle.registrationNumber}
              onChange={handleInputChange}
            />
            <Input
              name="brand"
              placeholder="Brand"
              value={newVehicle.brand}
              onChange={handleInputChange}
            />
            <Input
              name="model"
              placeholder="Model"
              value={newVehicle.model}
              onChange={handleInputChange}
            />
            <Input
              name="purchaseDate"
              type="date"
              placeholder="Purchase Date"
              value={newVehicle.purchaseDate}
              onChange={handleInputChange}
            />
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={handleDialogToggle}>
              Cancel
            </Button>
            <Button onClick={handleAddVehicle}>Add Vehicle</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VehicleManagement;
