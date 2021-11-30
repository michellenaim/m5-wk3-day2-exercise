import React from "react";
import Lists from "./Lists";
import CreateList from "./CreateList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        title: "",
        author: "",
      },
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch("http://localhost:8080/api/posts")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          loading: false,
          alldata: result,
        });
      })
      .catch();
  }

  getLists = () => {
    fetch("http://localhost:8080/api/posts")
      .then((res) => res.json())
      .then((result) =>
        this.setState({
          loading: false,
          alldata: result,
        })
      )
      .catch();
  };

  handleChange = (event) => {
    let title = this.state.singledata.title;
    let author = this.state.singledata.author;
    if (event.target.name === "title") title = event.target.value;
    else author = event.target.value;

    this.setState({
      singledata: {
        title: title,
        author: author,
      },
    });
  };

  createList = () => {
    fetch("http://localhost:8080/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.singledata),
    }).then(() => {
      this.setState({
        singledata: {
          title: "",
          author: "",
        },
      });
      this.getLists();
    });
  };

  getList = (event, id) => {
    this.setState(
      {
        singledata: {
          title: "Loading...",
          author: "Loading...",
        },
      },
      () => {
        fetch("http://localhost:8080/api/post/" + id)
          .then((res) => res.json())
          .then((result) => {
            this.setState({
              singledata: {
                title: result.title,
                author: result.author ? result.author : "",
              },
            });
          });
      }
    );
  };

  updateList = (event) => {
    fetch("http://localhost:8080/api/post/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.singledata),
    })
      .then((res) => {
        res.json();
      })
      .then((result) => {
        this.setState({
          singledata: {
            title: "",
            author: "",
          },
        });
        this.getLists();
      })
      .catch((error) => console.log(error));
  };

  deleteList = (event, id) => {
    fetch("http://localhost:8080/api/post/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          singledata: {
            title: "",
            author: "",
          },
        });
        this.getLists();
      });
  };

  render() {
    if (this.state.loading) {
      return <p>Loading.....</p>;
    }

    const listTable = (
      <Lists
        alldata={this.state.alldata}
        singledata={this.state.singledata}
        getList={this.getList}
        updateList={this.updateList}
        deleteList={this.deleteList}
        handleChange={this.handleChange}
      />
    );

    return (
      <div className="container pt-4">
        <span className="title-bar">
          <CreateList
            singledata={this.state.singledata}
            handleChange={this.handleChange}
            createList={this.createList}
          />
        </span>
        <h3 className="pt-4">Book List</h3>
        {listTable}
      </div>
    );
  }
}

export default App;
