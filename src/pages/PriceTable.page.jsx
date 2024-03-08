import React from 'react';
import {createColumnHelper, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {USERS} from "../data";

const PriceTablePage = () => {
    const columnHelper = createColumnHelper()


    const colums = [
        columnHelper.accessor("Balance",{
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

                }
            </table>

        </div>
    );
};

export default PriceTablePage;