import React, { useEffect, useMemo, useState, useCallback } from "react";
import "./Search.css";
import SpeedIcon from "@mui/icons-material/Speed";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useTable, usePagination } from "react-table";
import { useDispatch } from "react-redux";
import { employeeDetail } from "../../featured/employee";
import toast from "react-hot-toast";

const Search = () => {
  const [data, setData] = useState([]);
  const [nameQuery, setNameQuery] = useState('');
  const [mobileQuery, setMobileQuery] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [filteredData, setFilteredData] = useState([]);

  const handleCall = async () => {
    try {
      const response = await axios.get("https://jala-site.vercel.app//employee/");
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleCall();
  }, []);

  const handleDelete = useCallback(async (id) => {
    try {
      await axios.delete(`https://jala-site.vercel.app//employee/${id}`);
      handleCall();
      toast.success("Employee Deleted Successfully");
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  }, []);

  const handleSearch = () => {
    const filtered = data.filter((employee) =>
      employee.firstName.toLowerCase().includes(nameQuery.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(nameQuery.toLowerCase())
    ).filter((employee) =>
      employee.mobile.toString().includes(mobileQuery)
    );
    setFilteredData(filtered);
  };

  const handleClear = () => {
    setNameQuery('');
    setMobileQuery('');
    setFilteredData([]);
  };

  const columns = useMemo(
    () => [

      {
        Header: "First Name",
        accessor: "firstName",
        filter: "globalFilter",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Mobile No.",
        accessor: "mobile",
      },
      {
        Header: "Email Id.",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "D.O.B.",
        accessor: "dob",
      },
      {
        Header: "country",
        accessor: "country",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Skill",
        accessor: "skill",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <div style={{ display: "flex", flexDirection: "column", gap: "3px", maxWidth: "4rem" }}>
            <button onClick={() => {
              navigate("/Employee/Update")
              dispatch(employeeDetail(row.original))
              console.log(row.original)
              }} className="edit-row">
              Edit
            </button>
            <button onClick={() => handleDelete(row.original._id)} className="delete-row">
              Delete
            </button>
          </div>
        ),
      },
    ],
    [navigate, dispatch, handleDelete]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      data: filteredData.length > 0 ? filteredData : data, // Use filteredData if available, otherwise use the entire dataset
    },
    usePagination
  );

  const { pageIndex } = state;



  return (
    <div className="search">
      <div style={{ display: "flex" }}>
        <h3 style={{ flex: 1, fontWeight: "500" }}>Search Employee</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <SpeedIcon />
          <p style={{ fontWeight: "300", fontSize: ".8rem" }}>
            <Link to="/Home">Home</Link> &gt; Employee &gt; Search
          </p>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          value={nameQuery}
          onChange={(e) => setNameQuery(e.target.value)}
          placeholder="Search by first or last name..."
        />
        <input
          type="text"
          value={mobileQuery}
          onChange={(e) => setMobileQuery(e.target.value)}
          placeholder="Search by mobile number..."
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      <div className="table-div">
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ flex: "1" }}>Search Employee</p>
          <Link to="/Employee/Create">
            <button className="add-btn">Add Employee</button>
          </Link>
        </div>
        <hr style={{ margin: "10px 0" }} />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div>
            <table {...getTableProps()} className="table">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()} className="tr">
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()} className="th">
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()} className="td">
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "flex-end", margin: "15px 30px" }}>
              <p>
                {pageIndex + 1} of {pageOptions.length}
              </p>
              <button onClick={() => previousPage()} disabled={!canPreviousPage} className="page-btn">
                Previous
              </button>
              <button onClick={() => nextPage()} disabled={!canNextPage} className="page-btn">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
