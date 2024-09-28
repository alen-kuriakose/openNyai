import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function CaseCard() {
  return (
    <Card>
      <CardDescription className="flex justify-between items-center">
        <p className="text-xs text-[#7E7D7D]">2024-CV-00789</p>

        <Badge className="px-[6px] py-[2px]">Ongoing</Badge>
      </CardDescription>
      <CardHeader>
        <CardTitle>Johnson v. Acme Corp.</CardTitle>
      </CardHeader>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}
