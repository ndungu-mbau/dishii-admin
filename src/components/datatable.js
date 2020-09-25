import React from "react";
import usePagination from "../utils/paginate"

const DataTable = props => {
  const { current, display, pages, next, previous, set } = usePagination({ items: props.data, size: props.pagination })
  return (
    <div className={`card border-light shadow-md mb-4 ${props.styles?.card}`}>
      <div className={`card-header ${props.styles?.header}`}>
        <h3 className={props.styles?.title}>{props.title}</h3>
      </div>
      <div className={`card-body ${props.styles?.body}`}>
        <table
          className={`table table-responsive ${props.styles?.table}`}
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
      </div>
      <div className={`cardFooter ${props.styles?.footer}`}>
        <nav>
          <ul class={`pagination mb-0 ${props.styles?.pagination}`}>
            <li class={`page-item ${current === 1 ? "disabled" : ''}`}>
              <a className="page-link" onClick={previous}>
                <i class="fas fa-arrow-left"></i>
              </a>
            </li>
            {Array(pages).fill(0).map((num, i) => i+1).map(page => (
              <li class={`page-item ${current === page ? "active" : ''}`}>
                <a className="page-link" onClick={() => set(page)}>{page}</a>
              </li>
            ))}
            <li class={`page-item ${current === Math.ceil(props.data/props.pagination) ? "disabled" : ''}`}>
              <a className="page-link" onClick={next}>
                <i class="fas fa-arrow-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DataTable