import React, { useState } from "react";
import "./Table.css";
export default function Table({ data }) {
  const [tableData, setTableData] = useState(data)
  console.log('This from table and table data',tableData)
  return (
    <table className="table">
      <thead className="table-heads-wrapper">
        <tr>
          <th>
            <input type="checkbox" id="selector"></input>
          </th>
          <th>NAME</th>
          <th className="expand">EMAIL</th>
          <th>ROLE</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((element, index) => {
          return (
            <tr key={element.id}>
              <td>
                <input type="checkbox" id="selector"></input>
              </td>

              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.role}</td>
              <td className="action-buttons">
                <a className="button-links" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" id="edit">
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M19 13.66V19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.34"></path>
                      <path d="m17 1 4 4-10 10H7v-4z"></path>
                    </g>
                  </svg>
                </a>
                &nbsp;
                <a className="button-links" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" id="trash">
                    <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path>
                  </svg>
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
