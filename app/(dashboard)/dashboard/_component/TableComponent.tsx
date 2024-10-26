'use client';
import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import ElectionInfo, { ElectionInfoProps } from './ElectionInfo';
import { CandidateInfo, ElectionProps } from './CandidateInfo';
import { useRouter } from 'next/navigation';
import LgaResults from './LgaResults';

type TableComponentProps = {
  electionInfo?: ElectionInfoProps;
  arr?: ElectionProps[];
  issues?: string;
  onClick?: () => void;
};

export default function TableComponent({
  arr,
  electionInfo,
  onClick,
  issues,
}: TableComponentProps) {
  // Define the table columns
  const columns = React.useMemo(
    () => [
      {
        header: 'Wards under Oshi bridge result',
        accessorKey: 'wards',
      },
      {
        header: 'Accumulated votes',
        accessorKey: 'votes',
      },
      {
        header: 'Active voters',
        accessorKey: 'counts',
      },
      {
        header: 'Status',
        accessorKey: 'status',
      },
      {
        header: 'Report',
        accessorKey: 'report',
        cell: ({
          getValue,
        }: {
          getValue: () => 'Successful' | 'Issue' | 'Pending';
        }) => {
          const reportStatus = getValue(); // Get the report status value
          const getDotColor = (report: 'Successful' | 'Issue' | 'Pending') => {
            switch (report) {
              case 'Successful':
                return 'bg-green-500'; // Green dot for "Successful"
              case 'Issue':
                return 'bg-red-500'; // Red dot for "Issue"
              case 'Pending':
                return 'bg-yellow-500'; // Yellow dot for "Pending"
              default:
                return 'bg-gray-500'; // Gray dot for undefined status
            }
          };
          return (
            <div className="flex items-center justify-center">
              <span
                className={`w-3 h-3 rounded-full mr-2 ${getDotColor(
                  reportStatus,
                )}`}
              ></span>
              <span>{reportStatus}</span>
            </div>
          );
        },
      },
    ],
    [],
  );

  // Define sample data
  const data = React.useMemo(
    () => [
      {
        wards: 'Idumota P / School (Umarha hr)',
        votes: '847 voters',
        counts: '847 voters',
        status: 'Completed',
        report: 'Issue',
      },
      {
        wards: 'Idumagbo-Small Market Square',
        votes: '847 voters',
        counts: '847 voters',
        status: 'Ongoing',
        report: 'Pending',
      },
      {
        wards: 'Idumagbe Town Hall',
        votes: '847 voters',
        counts: '847 voters',
        status: 'Completed',
        report: 'Issue',
      },
      {
        wards: 'Ovbiedo Comp Square',
        votes: '847 voters',
        counts: '847 voters',
        status: 'Completed',
        report: 'Successful',
      },
      {
        wards: 'Akinaja Primary School',
        votes: '847 voters',
        counts: '847 voters',
        status: 'Ongoing',
        report: 'Pending',
      },
      // Add more rows as needed to match the design
    ],
    [],
  );

  // Set up the table instance using useReactTable
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Custom function to style rows based on status
  const getRowStyle = (
    status: 'Successful' | 'Issue' | 'Pending',
    tableRrow?: any,
    id?: number,
  ) => {
    switch (status) {
      case 'Successful':
        return `bg-green-200 ${id === 0 ? 'rounded-l-md' : ''}
                  ${
                    id === tableRrow?.getVisibleCells().length - 1
                      ? 'rounded-r-md'
                      : ''
                  }`; // Light green background for "Successful" status
      case 'Issue':
        return `bg-red-300 ${id === 0 ? 'rounded-l-md' : ''}
                  ${
                    id === tableRrow?.getVisibleCells().length - 1
                      ? 'rounded-r-md'
                      : ''
                  }`; // Beige background for "Issue"
      case 'Pending':
        return `bg-slate-200 ${id === 0 ? 'rounded-l-md' : ''}
                  ${
                    id === tableRrow?.getVisibleCells().length - 1
                      ? 'rounded-r-md'
                      : ''
                  }`; // Beige background for "Pending"
      default:
        return `bg-red-200 ${id === 0 ? 'rounded-l-md' : ''}
                  ${
                    id === tableRrow?.getVisibleCells().length - 1
                      ? 'rounded-r-md'
                      : ''
                  }`; // Light red for "Issue"
    }
  };

  const [hover, setHover] = useState(-1);
  const handleHover = (id: number) => {
    setHover((prev) => (prev === id ? -1 : id));
  }

  return (
    <table className="w-full border-collapse rounded-md">
      <thead className="bg-gray-100">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="p-3 text-center font-bold text-gray-700"
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="relative">
        {table.getRowModel().rows.map((row, id) => (
          <React.Fragment key={row.id}>
            <tr
              key={row.id}
              className={`${
                hover === id &&
                getRowStyle(
                  row.original.report as 'Successful' | 'Issue' | 'Pending',
                )
              } text-center relative cursor-pointer`}
              onMouseEnter={() => handleHover(id)}
              onMouseLeave={() => handleHover(id)}
              onClick={() => {
                setHover((prev) => (prev === id ? -1 : id));
                onClick && onClick();
              }}
            >
              {row.getVisibleCells().map((cell, id) => (
                <td
                  key={cell.id}
                  className={`p-3 text-center border-b border-slate-300
                    ${id === 0 ? 'rounded-l-md' : ''}
                    ${
                      id === row.getVisibleCells().length - 1
                        ? 'rounded-r-md'
                        : ''
                    }
                    `}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
            <LgaResults
              arr={arr}
              onMouseEnter={() => handleHover(id)}
              onMouseLeave={() => handleHover(id)}
              issues={issues}
              className={`absolute mx-10 w-[80%] transition-all duration-300
                  ${
                    hover === id && electionInfo
                      ? 'max-h-max overflow-auto z-10 opacity-100'
                      : 'z-[-10] max-h-0 overflow-hidden opacity-0'
                  }`}
            />
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
