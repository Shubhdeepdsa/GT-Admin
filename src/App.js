import "./App.css";
import React, { useEffect, useState } from "react";
import Table from "./components/Table";
function App() {
  const [search, setSearch] = useState("");
  const [pageNum, setPageNum] = useState(0);
  const [ogData, setOgData] = useState([]);
  const [data, setData] = useState([]);
  const [debounce, setDebounceTime] = useState();
  const URL =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        let information = res;
        // console.log('This is information',information)
        return information
      });
  };
  const tableSearch = (keyword) => {
    if (keyword === "") {
      console.log('Loading keyword', ogData)
      setData(ogData);
      pageData(data, pageNum);
      return;
    }
    setSearch(keyword.toLowerCase());
    let ans = ogData.filter((item) => {
      return (
        item.name.toLowerCase().includes(keyword) ||
        item.email.toLowerCase().includes(keyword) ||
        item.role.toLowerCase().includes(keyword)
      );
    });
    setData(ans);
    return pageData(data, pageNum);
  };
  const searchFunction = (keyword) => {
    tableSearch(keyword);
    pageData(data, pageNum);
  };
  const pageData = (totalData, num) => {
    console.log('This is totaldata',totalData)
    let totalEntries = totalData.length;
    let totalPages = Math.floor(totalEntries / 10);
    let start = num * 10;
    let end = (num + 1) * 10;
    if (end > totalEntries) {
      let page_data = totalData.slice(start);
      return page_data
    } else if (end < totalEntries) {
      let page_data = totalData.slice(start, end);
      let temp = page_data;
      return page_data
    }
  };
  useEffect(() => {
    let apiData = fetchData();
    console.log('')
    setOgData(apiData)
    setData(apiData)

  }, []);
  useEffect(() => {
    let currentPageData = tableSearch("");
    setData(currentPageData)
  }, [data])
  return (
    <div className="App">
      <div className="search">
        <input
          className="search-bar"
          key="search-bar"
          placeholder={"Search here..."}
          onChange={(e) => {
            searchFunction(e.target.value);
          }}
        ></input>
      </div>
      <Table data={ data } />
    </div>
  );
}

export default App;
