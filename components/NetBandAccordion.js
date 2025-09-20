"use client";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const NetBandAccordion = ({
  items,
  column = "left",
  eventKey = "faq",
  activeKey,
}) => {
  // Filter items based on column (left/right)
  const filteredItems = items.filter(item => item.key === column);
  
  const defaultActiveKey = activeKey ? activeKey : eventKey + filteredItems[0]?.id;
  const [active, setActive] = useState(defaultActiveKey);

  return (
    <Accordion defaultActiveKey={defaultActiveKey}>
      {filteredItems.map((item) => (
        <div
          className="accordion-item wow fadeInUp"
          key={item.id}
        >
          <h4 className="accordion-header">
            <Accordion.Toggle
              as={"button"}
              eventKey={eventKey + item.id}
              className={`accordion-button ${
                active === eventKey + item.id ? "" : "collapsed"
              }`}
              onClick={() => setActive(eventKey + item.id)}
            >
              {item.title}
            </Accordion.Toggle>
          </h4>
          <Accordion.Collapse
            className="accordion-collapse"
            eventKey={eventKey + item.id}
          >
            <div className="accordion-body">
              {item.content.split('\n').map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};

export default NetBandAccordion;