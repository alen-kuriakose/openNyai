"use client"
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface CaseCardProps{
    
        caseName: string,
        caseNo: string,
        status: string,
        regdate: string,
        client: string,
        category: string,
      
}


export function CaseCard({caseName,caseNo,status,regdate,client,category}:CaseCardProps) {
    const router=useRouter()
  return (
    <Card className="w-96 max-w-full h-full flex flex-col justify-between border-none shadow-none" onClick={()=>router.push("/cases/2024-CV-00789")}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-gray-500">{caseNo}</span>
          <Badge variant="secondary" className={cn(status=='Ongoing'?"bg-blue-500 text-white":status=="Pending"?"bg-yellow-400 text-black":"bg-green-500 text-black")}>
            {status}
          </Badge>
        </div>
        <h2 className="text-2xl font-bold mt-2">{caseName}</h2>
      </CardHeader>
      <CardContent className=" ">
        <div className="mt-4 border-t pt-1">
          <h3 className="text-xl font-medium text-blue-primary">{client}</h3>
          <div className="flex justify-between mt-2 items-end">
            <Badge variant="secondary" className="bg-gray-200 text-gray-800 font-medium">
              {category}
            </Badge>
            <div className="text-right">
              <span className="text-sm text-[#AEA6A6]">Reg Date</span>
              <p className="font-medium">{regdate}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
