import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateList from "./UpdateList";
import DeleteList from "./DeleteList";

const Lists = (props) => {
  let listrows = [];
  props.alldata.forEach((ele) => {
    listrows.push(
      <tr key={ele.id}>
        <td>{ele.title}</td>
        <td>{ele.author}</td>
        <td>
          <UpdateList
            elementId={ele._id}
            singledata={props.singledata}
            getList={props.getList}
            updateList={props.updateList}
            handleChange={props.handleChange}
          />
          <DeleteList
            elementId={ele._id}
            singledata={props.singledata}
            getList={props.getList}
            deleteList={props.deleteList}
          />
        </td>
      </tr>
    );
  });
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{listrows}</tbody>
    </table>
  );
};

export default Lists;
