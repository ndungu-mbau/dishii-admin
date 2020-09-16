import React from "react";

const DataTable = props => {
  if (!props.headers || !props.data) return null;
  return (
    <table
      className={`table table-responsive ${props.className}`}
      // width="100%"
    >
      <thead>
        <tr>
          {props.headers.map(header => {
            return <th key={header.key} title={header.label}>{header.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.data.map(row => {
          return (props.children(row))
        })}
      </tbody>
    </table>
  );
};

export default DataTable