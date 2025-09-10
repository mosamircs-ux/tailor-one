
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, 
  SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarHeader, SidebarFooter, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { Database, ShieldCheck, User, Users } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import CustomButton from "@/components/ui/CustomButton";

const SupplierPortal = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="pb-2">
            <div className="flex items-center gap-2 px-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Supplier Portal</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={true} tooltip="Dashboard">
                      <Database className="h-4 w-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Inventory">
                      <Database className="h-4 w-4" />
                      <span>Inventory</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Orders">
                      <Database className="h-4 w-4" />
                      <span>Orders</span>
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
                S
              </div>
              <span className="ml-2 font-medium">Supplier Name</span>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset className="p-4 md:p-6">
          <SidebarTrigger className="mb-4" />
          <h1 className="text-3xl font-bold mb-6">Supplier Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-medium mb-2">Inventory Status</h2>
              <p className="text-3xl font-bold">245</p>
              <p className="text-sm text-gray-500">Materials in stock</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-medium mb-2">Pending Orders</h2>
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm text-gray-500">Orders to fulfill</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-medium mb-2">Delivered</h2>
              <p className="text-3xl font-bold">89</p>
              <p className="text-sm text-gray-500">This month</p>
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg p-4 mb-6">
            <h2 className="text-xl font-medium mb-4">Latest Customer Designs</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4">Design ID</th>
                    <th className="text-left py-2 px-4">Customer</th>
                    <th className="text-left py-2 px-4">Item</th>
                    <th className="text-left py-2 px-4">Date</th>
                    <th className="text-left py-2 px-4">Status</th>
                    <th className="text-left py-2 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">#D1234</td>
                    <td className="py-2 px-4">John Smith</td>
                    <td className="py-2 px-4">Dress Shirt</td>
                    <td className="py-2 px-4">May 10, 2025</td>
                    <td className="py-2 px-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Pending</span></td>
                    <td className="py-2 px-4">
                      <CustomButton size="sm" variant="outline">View</CustomButton>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">#D1235</td>
                    <td className="py-2 px-4">Emily Johnson</td>
                    <td className="py-2 px-4">Summer Dress</td>
                    <td className="py-2 px-4">May 9, 2025</td>
                    <td className="py-2 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Approved</span></td>
                    <td className="py-2 px-4">
                      <CustomButton size="sm" variant="outline">View</CustomButton>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-4">#D1236</td>
                    <td className="py-2 px-4">Michael Brown</td>
                    <td className="py-2 px-4">Suit Pants</td>
                    <td className="py-2 px-4">May 8, 2025</td>
                    <td className="py-2 px-4"><span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">In Review</span></td>
                    <td className="py-2 px-4">
                      <CustomButton size="sm" variant="outline">View</CustomButton>
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

export default SupplierPortal;
