import React from "react";
import usePagination from "../utils/paginate"

const DataTable = props => {
  if (!props.headers || !props.data) return null;
  const { current, display, pages, next, previous, first, last, set } = usePagination({ items: props.data, size: props.pagination })
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
        {display.map(row => {
          return (props.children(row))
        })}
      </tbody>
    </table>
  );
};

export default DataTable