import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Lists = (props) => {
  console.log(props);
  let listrows = [];
  props.alldata.forEach((ele) => {
    listrows.push(
      <tr key={ele.id}>
        <td>{ele.id}</td>
        <td>{ele.title}</td>
        <td>{ele.author}</td>
      </tr>
    );
  });
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{listrows}</tbody>
    </table>
  );
};

export default Lists;
