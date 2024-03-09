import React from 'react';
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {USERS} from "../data";
import { useState } from "react";



const PriceTablePage = () => {
    const columnHelper = createColumnHelper()


    const columns = [
        columnHelper.accessor("", {
           id: "#",
           cell: (info) => <span>{info.row.index + 1}</span>,
           header: "#",
        }),
        columnHelper.accessor("Token",{
            cell: (info)=> (
                <img src={info?.getValue()} alt="" className="rounded-full w-10 h-10 object-cover" />
            ),
            header: "Token",
        }),
        columnHelper.accessor("Price",{
            cell: (info)=> <span>{info.getValue()}</span>,
            header: "Price",
        }),

    ]

    const [data] = useState(()=>[...USERS])


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel()
    })


    return (

        <div className="p-2 max-w-5xl mx-auto text-white fill-gray-400">
            <table className="border border-gray-700 w-full text-left">
                <thead className="bg-indigo-600">
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id} className="capitalize px-3.5 py-3">
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>

                <tbody>
                {table.getRowModel().rows.length ? (
                    table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))
                ) : null}
                </tbody>
            </table>


        </div>
    );
};

export default PriceTablePage;