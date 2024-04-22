import React from "react";

const Accordian = () => {
    let ary = [
        {
            title: "Accordion Item #1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores sapiente nihil ipsum hic et minus rem totam, tenetur, laboriosam exercitationem eius, reprehenderit commodi omnis voluptate molestiae quibusdam expedita dolorum?"
        },
        {
            title: "Accordion Item #2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores sapiente nihil ipsum hic et minus rem totam, tenetur, laboriosam exercitationem eius, reprehenderit commodi omnis voluptate molestiae quibusdam expedita dolorum?"
        },
        {
            title: "Accordion Item #3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores sapiente nihil ipsum hic et minus rem totam, tenetur, laboriosam exercitationem eius, reprehenderit commodi omnis voluptate molestiae quibusdam expedita dolorum?"
        },
        {
            title: "Accordion Item #4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores sapiente nihil ipsum hic et minus rem totam, tenetur, laboriosam exercitationem eius, reprehenderit commodi omnis voluptate molestiae quibusdam expedita dolorum?"
        },
    ]
  return (
    <>
      <div>
        <div className="row accordion accordion-flush" id="accordionFlushExample">
          {
            ary?.map((x,i) => {
                return <div className="accordion-item col-6" key={i}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapseOne${i}`}
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    {x?.title}
                  </button>
                </h2>
                <div
                  id={`flush-collapseOne${i}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    {x?.description}
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </>
  );
};

export default Accordian;
