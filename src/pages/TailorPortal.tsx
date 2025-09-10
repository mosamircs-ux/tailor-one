
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, 
  SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarHeader, SidebarFooter, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { Calendar, ShieldCheck, User } from "lucide-react";
import CustomButton from "@/components/ui/CustomButton";

const TailorPortal = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="pb-2">
            <div className="flex items-center gap-2 px-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Tailor Portal</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={true} tooltip="Dashboard">
                      <User className="h-4 w-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Orders">
                      <Calendar className="h-4 w-4" />
                      <span>Orders</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Calendar">
                      <Calendar className="h-4 w-4" />
                      <span>Calendar</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarGroup>
              <SidebarGroupLabel>Account</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Profile">
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Settings">
                      <User className="h-4 w-4" />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="p-2 flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                T
              </div>
              <span className="ml-2 font-medium">Tailor Name</span>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset className="p-4 md:p-6">
          <SidebarTrigger className="mb-4" />
          <h1 className="text-3xl font-bold mb-6">Tailor Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-medium mb-2">New Orders</h2>
              <p className="text-3xl font-bold">8</p>
              <p className="text-sm text-gray-500">Orders to review</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-medium mb-2">In Progress</h2>
              <p className="text-3xl font-bold">15</p>
              <p className="text-sm text-gray-500">Currently working on</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-medium mb-2">Completed</h2>
              <p className="text-3xl font-bold">42</p>
              <p className="text-sm text-gray-500">This month</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-medium mb-4">Customer Measurements</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">James Wilson</span>
                  <CustomButton size="sm" variant="outline">View Details</CustomButton>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Sarah Parker</span>
                  <CustomButton size="sm" variant="outline">View Details</CustomButton>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Robert Jones</span>
                  <CustomButton size="sm" variant="outline">View Details</CustomButton>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-medium mb-4">Upcoming Deadlines</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium">Evening Gown #G1234</p>
                    <p className="text-xs text-gray-500">Customer: Emma Davis</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-600">Tomorrow</p>
                    <CustomButton size="sm" variant="primary">Mark Complete</CustomButton>
                  </div>
                </div>
                
                <div className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium">Business Suit #S9876</p>
                    <p className="text-xs text-gray-500">Customer: Thomas Lee</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">May 15, 2025</p>
                    <CustomButton size="sm" variant="primary">Mark Complete</CustomButton>
                  </div>
                </div>
                
                <div className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium">Summer Shirts (3) #SH5432</p>
                    <p className="text-xs text-gray-500">Customer: Alex Johnson</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">May 20, 2025</p>
                    <CustomButton size="sm" variant="primary">Mark Complete</CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-medium mb-4">Recent Customer Designs</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4">Design ID</th>
                    <th className="text-left py-2 px-4">Customer</th>
                    <th className="text-left py-2 px-4">Item</th>
                    <th className="text-left py-2 px-4">Requested Date</th>
                    <th className="text-left py-2 px-4">Status</th>
                    <th className="text-left py-2 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">#D5678</td>
                    <td className="py-2 px-4">Claire White</td>
                    <td className="py-2 px-4">Wedding Dress</td>
                    <td className="py-2 px-4">May 10, 2025</td>
                    <td className="py-2 px-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">In Progress</span></td>
                    <td className="py-2 px-4">
                      <div className="flex space-x-2">
                        <CustomButton size="sm" variant="outline">View</CustomButton>
                        <CustomButton size="sm" variant="accent">Update</CustomButton>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">#D5679</td>
                    <td className="py-2 px-4">Daniel Martinez</td>
                    <td className="py-2 px-4">Tuxedo</td>
                    <td className="py-2 px-4">May 9, 2025</td>
                    <td className="py-2 px-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Material Pending</span></td>
                    <td className="py-2 px-4">
                      <div className="flex space-x-2">
                        <CustomButton size="sm" variant="outline">View</CustomButton>
                        <CustomButton size="sm" variant="accent">Update</CustomButton>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-4">#D5680</td>
                    <td className="py-2 px-4">Sophie Taylor</td>
                    <td className="py-2 px-4">Blouse</td>
                    <td className="py-2 px-4">May 8, 2025</td>
                    <td className="py-2 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Ready for Fitting</span></td>
                    <td className="py-2 px-4">
                      <div className="flex space-x-2">
                        <CustomButton size="sm" variant="outline">View</CustomButton>
                        <CustomButton size="sm" variant="accent">Update</CustomButton>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default TailorPortal;
