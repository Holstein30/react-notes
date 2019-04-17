import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.showSidebar = this.showSidebar.bind(this);
  }

  showSidebar(e) {
    e.preventDefault();
    this.sidebar.classList.toggle("show");
  }

  render() {
    return (
      <div>
        <header className="mainHeader">
          <h1>Noted</h1>
          <nav>
            <a href="" onClick={this.showSidebar}>
              Add New Note
            </a>
            <section className="notes">
              <div className="noteCard">
                <i className="fa fa-edit" />
                <i className="fa fa-times" />
                <h4>Test Note</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reiciendis perferendis corrupti itaque quos alias. Nobis
                  obcaecati ipsa iure molestias. Sequi sint amet, dignissimos
                  soluta dolores quos quasi porro perspiciatis optio.
                </p>
              </div>
            </section>
            <aside className="sidebar" ref={ref => (this.sidebar = ref)}>
              <form>
                <h3>Add New Note</h3>
                <div className="close-btn" onClick={this.showSidebar}>
                  <i className="fa fa-times" />
                </div>
                <label htmlFor="note-title">Title:</label>
                <input type="text" name="note-title" />
                <label htmlFor="note-text">Text:</label>
                <textarea name="note-text" />
                <input type="submit" value="Add New Note" />
              </form>
            </aside>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
