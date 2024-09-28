"use client";
import { Menu, NotebookText, Package2, Search } from "lucide-react";
import Link from "next/link";

import { CaseCard } from "@/components/custom-components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { caseData, legalCasesData } from "@/helper/data";
import { useParams, useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Suspense, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

export default function CaseDetails({ params }: { params: { case: string } }) {
  const [caseStatus, setCaseStatus] = useState("Pending");
  const [summary, setSummary] = useState("");
  const [genSumm, setGenSumm] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://9cd9-2402-3a80-4224-f34b-a0a2-7720-c2b-ea25.ngrok-free.app/bot/summary",
        {
          content: caseData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setSummary(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Call the function in your component or page
  useEffect(() => {
    fetchData();
  }, [genSumm]);
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
          <Card className="w-full ">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-2xl font-bold">
                  Johnson v. Acme Corp.
                </CardTitle>
                <p className="text-sm text-muted-foreground mb-4">
                  Case Number: 2024-CV-00789
                </p>
              </div>
              <Badge
                variant="secondary"
                className={cn(
                  caseStatus == "Ongoing"
                    ? "bg-blue-500 text-white"
                    : caseStatus == "Pending"
                    ? "bg-yellow-400 text-black"
                    : "bg-green-500 text-black"
                )}
              >
                {caseStatus}
              </Badge>
            </CardHeader>
            <div className="px-6 pb-4">
              {!genSumm && (
                <Button className="" onClick={() => setGenSumm(true)}>
                  Generate Summary
                </Button>
              )}
              {genSumm && (
                <Suspense
                  fallback={
                    <Skeleton className="h-4 w-[250px] rounded-xl bg-gray-400" ></Skeleton>
                  }
                >
                  <CardFooter className="p-0 pt-4">
                    <div>
                      <h2 className="font-semibold mb-2">Case Summary</h2>
                      <p className="text-sm mb-4">{summary}</p>
                    </div>
                  </CardFooter>
                </Suspense>
              )}
            </div>

            <CardContent className="">
              

              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-semibold mb-2">Personal Injury</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p>
                      <span className="font-medium">Client Name:</span> John
                      Smith
                    </p>
                    <p>
                      <span className="font-medium">Incident Date:</span>{" "}
                      14.05.2021
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-medium">Registered Date:</span>{" "}
                      14.05.2021
                    </p>
                    <p>
                      <span className="font-medium">Contact Number:</span> +91
                      8457368963
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-medium">Gender:</span> Male
                    </p>
                    <p>
                      <span className="font-medium">Age:</span> 45
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div>
                <h2 className="font-semibold mb-2">Case Details</h2>
                <p className="text-sm mb-4">{caseData}</p>
              </div>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
}
