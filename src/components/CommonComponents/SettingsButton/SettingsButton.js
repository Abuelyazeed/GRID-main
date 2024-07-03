import React from "react";

const SettingsButton = ({ toggleTheme }) => {
  let bigFont = 0;
  let smallFont = 0;
  const collection = document.getElementsByTagName("html")[0];
  function incFont() {
    if (collection.classList.contains("default-font")) {
      collection.classList.toggle("default-font");
    }
    if (collection.classList.contains("small-font")) {
      collection.classList.toggle("small-font");
    }
    collection.classList.add("big-font");
  }

  function decFont() {
    if (collection.classList.contains("big-font"))
      collection.classList.toggle("big-font");

    if (collection.classList.contains("default-font"))
      collection.classList.toggle("default-font");

    collection.classList.add("small-font");
  }

  function defaultFont() {
    if (collection.classList.contains("big-font"))
      collection.classList.toggle("big-font");

    if (collection.classList.contains("small-font"))
      collection.classList.toggle("small-font");

    collection.classList.add("default-font");
  }

  return (
    <div className="container">
      <div className="dropdownbtn">
        <button className="dropbtn">
          <i className="icon-settings"></i>
          <i className="icon-exit-nav"></i>
        </button>
        <div className="dropdownbtn-content">
          <button>
            <i className="icon-a" onClick={incFont}></i>
          </button>
          <button>
            <i className="icon-a-regular" onClick={defaultFont}></i>
          </button>
          <button>
            <i className="icon-a-" onClick={decFont}></i>
          </button>
          <button onClick={toggleTheme} className="night-mode-button">
            <i className="icon-halfcircle"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsButton;
