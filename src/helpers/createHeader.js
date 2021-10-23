import React from "react";

const createHeader = (data) => {
  const header = data.map((item) => {
    if (item.value === "image") {
      return {
        Header: item.name,
        accessor: item.value,
        Cell: (row) => {
          return (
            <div>
              <img height={34} src={row.original.image} />
            </div>
          );
        },
        id: item.value,
        style: {
          textAlign: "center",
        },
      };
    }

    return {
      Header: item.name,
      accessor: item.value,
      style: {
        textAlign: "center",
      },
    };
  });

  return header;
};

export default createHeader;
