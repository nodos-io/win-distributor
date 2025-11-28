"use client";

import { useMemo, useState } from "react";
import { Accordion } from "react-bootstrap";

const buildColumns = (items = []) => {
  const left = [];
  const right = [];
  items.forEach((item) => {
    if (item.key === "right") {
      right.push(item);
    } else {
      left.push(item);
    }
  });
  return { left, right };
};

const FaqAccordion = ({ items = [] }) => {
  const { left, right } = useMemo(() => buildColumns(items), [items]);
  const [active, setActive] = useState({ left: null, right: null });

  const renderAccordion = (list, side) => (
    <Accordion
      activeKey={active[side]}
      onSelect={(key) =>
        setActive((prev) => ({
          ...prev,
          [side]: prev[side] === key ? null : key,
        }))
      }
    >
      {list.map((item) => {
        const itemKey = `${side}-${item.id}`;
        return (
          <div className="accordion-item wow fadeInUp" key={itemKey}>
            <h4 className="accordion-header">
              <Accordion.Toggle
                as={"button"}
                eventKey={itemKey}
                className={`accordion-button ${
                  active[side] === itemKey ? "" : "collapsed"
                }`}
              >
                {item.title}
              </Accordion.Toggle>
            </h4>
            <Accordion.Collapse
              className="accordion-collapse"
              eventKey={itemKey}
            >
              <div className="accordion-body">
                {item.content.split("\n").map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </Accordion.Collapse>
          </div>
        );
      })}
    </Accordion>
  );

  return (
    <div className="row">
      <div className="col-lg-6 mt-lg-0">
        <div className="faq-content style-2 style-color">
          <div className="faq-accordion">{renderAccordion(left, "left")}</div>
        </div>
      </div>
      <div className="col-lg-6 mt-lg-0">
        <div className="faq-content style-2 style-color">
          <div className="faq-accordion">{renderAccordion(right, "right")}</div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
