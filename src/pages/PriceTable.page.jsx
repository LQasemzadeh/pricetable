import React from 'react';
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {USERS} from "../data";
import { useState } from "react";



const PriceTablePage = () => {
    const columnHelper = createColumnHelper()


    const columns = [
        columnHelper.accessor("Token",{
            cell: (info)=> <span>{info.getValue()}</span>

        })
    ]

    const [data] = useState(()=>[...USERS])


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel()
    })


    return (

        <div className="p-2 max-w-5xl mx-auto text-white fill-gray-400">
            <table>
                {
                    table.getHeaderGroups().map((headerGroup)=>(
                        <tr key={headerGroup.id}>
                            {
                                headerGroup.headers.map(header=>(
                                    <th key={header.id}>
                                        {
                                            flexRender(header.column.columnDef.header, header.getContext())
                                        }
                                    </th>
                                ))
                            }
                        </tr>

                    ))

                }
            </table>

        </div>
    );
};

export default PriceTablePage;