
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

const AdminNav = () => {
  return (
    <div className="bg-primary text-white px-4 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="font-bold text-xl">Fashion App</Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-primary-dark text-white">Admin Portals</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/supplier-portal"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="font-medium leading-none">Supplier Portal</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Manage materials, inventory, and orders
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/tailor-portal"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="font-medium leading-none">Tailor Portal</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Manage customer orders, designs, and schedules
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/customer-portal"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="font-medium leading-none">Customer Portal</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Access customer design tools and order management
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      <div className="flex items-center space-x-4">
        <span className="text-sm">Welcome, Admin</span>
        <div className="h-8 w-8 rounded-full bg-white text-primary flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
