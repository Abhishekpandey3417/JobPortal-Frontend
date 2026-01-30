import React from "react";
import { Table,TableBody,TableCell, TableCaption, TableHeader, TableHead, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";


const AppliedJobTable = () => {
  return (
    <div>
       <Table>
         <TableCaption>A list of your recent applied jobs</TableCaption>
         <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
         </TableHeader>
         <TableBody>
            {
            [1,2].map((item,index)=>(
                <TableRow key={index}>
                    <TableCell>12-08-2023</TableCell>
                    <TableCell>Frontend Developer</TableCell>
                    <TableCell>Google</TableCell>
                    <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
                </TableRow>
            ))

            }
         </TableBody>
       </Table>
    </div>
  );
}

export default AppliedJobTable;