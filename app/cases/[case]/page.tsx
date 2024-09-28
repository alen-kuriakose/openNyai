"use client";
import { Menu, NotebookText, Package2, Search } from "lucide-react";
import Link from "next/link";

import { CaseCard } from "@/components/custom-components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { legalCasesData } from "@/helper/data";
import { useParams, useRouter } from "next/navigation";

export default function CaseDetails({ params }: { params: { case: string } }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[218px_1fr] bg-[#F3F5F8]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">OpenNyai</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <NotebookText className="h-4 w-4" />
                Summary
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="">OpenNyai</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <NotebookText className="h-4 w-4" />
                  Summary
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="">
            <h1 className="text-lg font-semibold md:text-2xl">{params.case}</h1>
            <span className="text-sm font-semibold text-gray-500">caseNo</span>
          </div>

          <div>
            <div className="text-sm">
              In Johnson v. Acme Corp., the plaintiff, Emily Johnson, alleges
              that Acme Corp. is responsible for damages resulting from a faulty
              product. The case stems from an incident where the plaintiff
              suffered injuries due to a malfunction of Acme’s home appliance,
              which was purchased in 2022. Emily claims that the company failed
              to adhere to safety standards, resulting in significant physical
              harm and emotional distress. She is seeking compensation for
              medical expenses, lost wages, and pain and suffering.
            </div>

            <div className="text-right flex items-center gap-2">
              <span className="text-sm text-[#AEA6A6]">Reg Date</span>
              <p className="font-medium">regdate</p>
            </div>
            <div className="text-right flex items-center gap-2">
              <span className="text-sm text-[#AEA6A6]">Reg Date</span>
              <p className="font-medium">regdate</p>
            </div>
            <div className="text-right flex items-center gap-2">
              <span className="text-sm text-[#AEA6A6]">Reg Date</span>
              <p className="font-medium">regdate</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
