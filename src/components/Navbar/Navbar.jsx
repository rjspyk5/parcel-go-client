import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const mobileItems = ["A", "B", "C"];
  return (
    <div>
      <header className="w-full border-b">
        <div className="flex h-14 items-center px-4">
          <div className="mr-4 hidden gap-2 md:flex">
            {mobileItems.map((item, index) => (
              <Button key={index} variant="link">
                {item}
              </Button>
            ))}
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                Open
              </Button>
            </SheetTrigger>
            <h1>Nav</h1>

            <SheetContent side="left">
              <div className="flex flex-col items-start">
                {mobileItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="link"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
};
