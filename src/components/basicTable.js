
import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import employeeData from './data.json'
import  {COLUMN} from './column'
import './table.css'

export const BasicTable = () => {

    const data = React.useMemo(()=> [
        {
        "userId":"rirani",
        "jobTitleName":"Developer",
        "firstName":"Romin",
        "lastName":"Irani",
        "preferredFullName":"Romin Irani",
        "employeeCode":"E1",
        "region":"CA",
        "phoneNumber":"408-1234567",
        "emailAddress":"romin.k.irani@gmail.com"
        },
        {
        "userId":"nirani",
        "jobTitleName":"Developer",
        "firstName":"Neil",
        "lastName":"Irani",
        "preferredFullName":"Neil Irani",
        "employeeCode":"E2",
        "region":"CA",
        "phoneNumber":"408-1111111",
        "emailAddress":"neilrirani@gmail.com"
        },
        {
        "userId":"thanks",
        "jobTitleName":"Program Directory",
        "firstName":"Tom",
        "lastName":"Hanks",
        "preferredFullName":"Tom Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"408-2222222",
        "emailAddress":"tomhanks@gmail.com"
        }
        ]
     , []);
      const columns = React.useMemo(()=>  
        [
            {
                Header: 'Id',
                accessor: 'userId'
            },
            {
                Header: 'jobTitleName',
                accessor: 'jobTitleName'
            },
            {
                Header: 'FirstName',
                accessor: 'firstName'
            },
            {
                Header: 'LastName',
                accessor: 'lastName'
        
            },
            {
                Header: 'employeeCode',
                accessor: 'employeeCode' 
            },
            {
                Header: 'region',
                accessor: 'region' 
            },
            {
                Header: 'phoneNumber',
                accessor: 'phoneNumber' 
            },
            {
                Header: 'emailAddress',
                accessor: 'emailAddress' 
            },
        ]
    , [] );
    const tableInstance = useTable({ columns, data })
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data })
      return (
        <div>
          <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
           <thead>
             {headerGroups.map(headerGroup => (
               <tr {...headerGroup.getHeaderGroupProps()}>
                 {headerGroup.headers.map(column => (
                   <th
                     {...column.getHeaderProps()}
                     style={{
                       borderBottom: 'solid 3px red',
                       background: 'aliceblue',
                       color: 'black',
                       fontWeight: 'bold',
                     }}
                   >
                     {column.render('Header')}
                   </th>
                 ))}
               </tr>
             ))}
           </thead>
           <tbody {...getTableBodyProps()}>
             {rows.map(row => {
               prepareRow(row)
               return (
                 <tr {...row.getRowProps()}>
                   {row.cells.map(cell => {
                     return (
                       <td
                         {...cell.getCellProps()}
                         style={{
                           padding: '10px',
                           border: 'solid 1px gray',
                           background: 'papayawhip',
                         }}
                       >
                         {cell.render('Cell')}
                       </td>
                     )
                   })}
                 </tr>
               )
             })}
           </tbody>
         </table>
        </div>
      );

   }