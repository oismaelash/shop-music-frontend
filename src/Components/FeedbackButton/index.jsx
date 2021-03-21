import { Fragment } from "react";

const FeedbackButton = ({ icon, type, messages }) => {
  return (
    <Fragment>
      <div
        className="col-md-6 col-lg-6 col-sm-12 col-xs-12 dropleft"
        style={{ paddingRight: 0 }}
      >
        <a
          className={`btn btn-${type}`}
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className={`${icon}`}></i>
        </a>
        <div
          className="dropdown-menu"
          aria-labelledby="dropdownMenuLink"
          style={{ width: "95%" }}
        >
          {messages.map((message) => (
            <span
              key={message}
              className="dropdown-item"
              onClick={() => alert(`Send feedback:\n${message}`)}
            >
              {message}
            </span>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default FeedbackButton;
