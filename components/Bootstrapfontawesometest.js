function BootstrapFontawesomeTest() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">
          Confirmation of Bootstrap and Fontawesome working!
        </h1>
        <p className="lead">
          This message should be contained in a bootstrap jumbotron, and the
          list below is all the fontawesome icons used in the app.
        </p>
      </div>
      <ul>
        <li>
          <i className="fa fa-coffee fa-lg"></i>
        </li>
        <li>
          <i className="fa fa-thumbtack fa-lg"></i>
        </li>
        <li>
          <i className="fa fa-thumbtack fa-rotate-90"></i>
        </li>
        <li>
          <i className="fa fa-times-circle"></i>
        </li>
        <li>
          <i className="fa fa-edit fa-lg "></i>
        </li>
        <li>
          <i className="fa fa-trash"></i>
        </li>
        <li>
          <i className="fa fa-star fa-lg"></i>
        </li>
        <li>
          <i className="fa fa-star fa-hollow-black fa-lg"></i>
        </li>
      </ul>
    </div>
  );
}
export default BootstrapFontawesomeTest;