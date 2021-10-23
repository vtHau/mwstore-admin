import React, { useState } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

function Table(props) {
  const {
    data,
    pageSize,
    myClass,
    multiSelectOption,
    columns,
    pagination,
    signleDel,
    multiDel,
    handleEdit,
  } = props;
  const [checkedValues, setCheckedValues] = useState([]);
  const [myData] = useState(data);

  const selectRow = (e, i) => {
    if (!e.target.checked) {
      setCheckedValues(checkedValues.filter((item, j) => i !== item));
    } else {
      const newChecked = checkedValues;
      newChecked.push(i);
      setCheckedValues(newChecked);
    }
  };

  const handleRemoveRow = () => {
    if (multiDel !== null) {
      multiDel(checkedValues);
    }
  };

  if (multiSelectOption == true) {
    columns.push({
      Header: (
        <button
          className="btn btn-danger btn-sm btn-delete mb-0 b-r-4"
          onClick={(e) => {
            if (window.confirm("Are you sure you wish to delete this item?"))
              handleRemoveRow();
          }}
        >
          Delete
        </button>
      ),
      id: "delete",
      accessor: (str) => "delete",
      sortable: false,
      style: {
        textAlign: "center",
      },
      Cell: (row) => (
        <div>
          <span>
            <input
              type="checkbox"
              name={row.original.id}
              defaultChecked={checkedValues.includes(row.original.id)}
              onChange={(e) => selectRow(e, row.original.id)}
            />
          </span>
        </div>
      ),
    });
  } else {
    columns.push({
      Header: <b>Action</b>,
      id: "delete",
      accessor: (str) => "delete",
      Cell: (row) => (
        <div>
          <span
            onClick={() => {
              if (
                window.confirm("Are you sure you wish to delete this item?")
              ) {
                if (signleDel !== null) {
                  signleDel(row.original.id);
                }
              }
            }}
          >
            <i
              className="fa fa-trash"
              style={{
                width: 35,
                fontSize: 20,
                padding: 11,
                color: "#e4566e",
              }}
            ></i>
          </span>

          <span onClick={() => handleEdit(row.original)}>
            <i
              className="fa fa-pencil"
              style={{
                width: 35,
                fontSize: 20,
                padding: 11,
                color: "rgb(40, 167, 69)",
              }}
            ></i>
          </span>
        </div>
      ),
      style: {
        textAlign: "center",
      },
      sortable: false,
    });
  }

  columns.unshift({
    Header: "#",
    accessor: "stt",
    Cell: (row) => row.index + 1,
    id: "stt",
    style: {
      textAlign: "center",
    },
  });
  return (
    <>
      <ReactTable
        data={myData}
        columns={columns}
        defaultPageSize={pageSize}
        className={myClass}
        showPagination={pagination}
      />
    </>
  );
}

export default Table;
