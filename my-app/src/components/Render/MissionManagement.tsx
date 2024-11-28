import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const MissionManagement: React.FC = () => {
  const [missions, setMissions] = useState([
    {
      id: 1,
      date: '2024-01-20',
      startTime: '08:00',
      endTime: '16:00',
      vehicle: '12345 AL',
      driver: 'Ahmed Benali',
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newMission, setNewMission] = useState({
    date: '',
    startTime: '',
    endTime: '',
    vehicle: '',
    driver: '',
  });

  const handleDialogToggle = () => setIsDialogOpen(!isDialogOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMission((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddMission = () => {
    setMissions((prev) => [
      ...prev,
      {
        ...newMission,
        id: prev.length + 1,
      },
    ]);
    setNewMission({
      date: '',
      startTime: '',
      endTime: '',
      vehicle: '',
      driver: '',
    });
    handleDialogToggle();
  };

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Mission Management</h2>
        <Button onClick={handleDialogToggle}>Schedule New Mission</Button>
      </div>

      {/* Mission Table */}
      <Card>
        <CardContent className= { drivers.length >6 ? "overflow-y-scroll max-h-[400px]" : "" }>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left border">Date</th>
                  <th className="p-3 text-left border">Start Time</th>
                  <th className="p-3 text-left border">End Time</th>
                  <th className="p-3 text-left border">Vehicle</th>
                  <th className="p-3 text-left border">Driver</th>
                </tr>
              </thead>
              <tbody>
                {missions.map((mission) => (
                  <tr key={mission.id} className="hover:bg-gray-50">
                    <td className="p-3 border">{mission.date}</td>
                    <td className="p-3 border">{mission.startTime}</td>
                    <td className="p-3 border">{mission.endTime}</td>
                    <td className="p-3 border">{mission.vehicle}</td>
                    <td className="p-3 border">{mission.driver}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Schedule New Mission Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={handleDialogToggle}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Schedule New Mission</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              name="date"
              type="date"
              placeholder="Mission Date"
              value={newMission.date}
              onChange={handleInputChange}
            />
            <Input
              name="startTime"
              type="time"
              placeholder="Start Time"
              value={newMission.startTime}
              onChange={handleInputChange}
            />
            <Input
              name="endTime"
              type="time"
              placeholder="End Time"
              value={newMission.endTime}
              onChange={handleInputChange}
            />
            <Input
              name="vehicle"
              placeholder="Vehicle"
              value={newMission.vehicle}
              onChange={handleInputChange}
            />
            <Input
              name="driver"
              placeholder="Driver"
              value={newMission.driver}
              onChange={handleInputChange}
            />
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={handleDialogToggle}>
              Cancel
            </Button>
            <Button onClick={handleAddMission}>Add Mission</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MissionManagement;
