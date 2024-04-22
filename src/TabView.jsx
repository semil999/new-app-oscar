import React from "react";

const TabView = () => {
  let ary = [
    {
      title: "Home",
      desc: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sed veniam, esse minima sunt adipisci.",
    },
    {
      title: "Profile",
      desc: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sed veniam, esse minima sunt adipisci.",
    },
    {
      title: "Contact",
      desc: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sed veniam, esse minima sunt adipisci.",
    },
    {
      title: "Disable",
      desc: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sed veniam, esse minima sunt adipisci.",
    },
  ];
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {ary?.map((x, i) => {
            return (
              <button
                className={`nav-link ${i == 0 ? "active" : ""}`}
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target={`#nav-tab${i}`}
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                {x?.title}
              </button>
            );
          })}
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {ary?.map((x, i) => {
          return (
            <div
              className={`tab-pane fade ${i == 0 ? "active show" : ""}`}
              id={`nav-tab${i}`}
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabIndex="0"
            >
              {x?.desc}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TabView;
