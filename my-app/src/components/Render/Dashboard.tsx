// components/Dashboard.tsx
import React, { useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Users, Car, Calendar, Home } from "lucide-react";

const Dashboard: React.FC = () => {
  
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      firstName: "Ahmed",
      lastName: "Benali",
      phone: "+213 555 123 456",
      email: "ahmed.benali@tbhl.dz",
      address: "Alger, Algérie",
    },
    
  ]);

  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      registrationNumber: "12345 AL",
      brand: "Mercedes",
      model: "Sprinter",
      purchaseDate: "2022-01-15",
      revisions: [
        { date: "2023-06-01", type: "Routine Maintenance" },
        { date: "2023-11-15", type: "Brake System Check" },
      ],
    },
  ]);
  const [missions, setMissions] = useState([
    {
      id: 1,
      date: "2024-01-20",
      startTime: "08:00",
      endTime: "16:00",
      vehicle: "12345 AL",
      driver: "Ahmed Benali",
    },
  ]);
  return (
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">
          TBHL Transport Management Dashboard
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="flex items-center p-6">
              <Users className="w-10 h-10 mr-4 text-blue-600" />
              <div>
                <CardTitle>Total Drivers</CardTitle>
                <CardDescription className="text-2xl font-bold">
                  {drivers.length}
                </CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Car className="w-10 h-10 mr-4 text-green-600" />
              <div>
                <CardTitle>Total Vehicles</CardTitle>
                <CardDescription className="text-2xl font-bold">
                  {vehicles.length}
                </CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Calendar className="w-10 h-10 mr-4 text-purple-600" />
              <div>
                <CardTitle>Active Missions</CardTitle>
                <CardDescription className="text-2xl font-bold">
                  {missions.length}
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  );
};

export default Dashboard;
