import React from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import "./sidebar.css";
import downArrow from "./chevron-down.svg";

const SidebarSection = ({ title, options, open, onSelect }) => (
  <div className="Sidebar-Section">
    <div className="Sidebar-Header" onClick={onSelect}>
      <span className="Sidebar-Header-Text">{title}</span>
      <img className="Sidebar-Arrow" src={downArrow} />
    </div>
    <SlideDown className={"my-dropdown-slidedown"}>
      {open ? (
        <div className="Sidebar-Links">
          <ul>
            {options.map(option => (
              <li>{option}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </SlideDown>
  </div>
);

class Sidebar extends React.Component {
  state = {
    openSidebarIdx: null
  };

  updateSidebarIdx(idx) {
    if (idx === this.state.openSidebarIdx) {
      this.setState({ openSidebarIdx: null });
    } else {
      this.setState({ openSidebarIdx: idx });
    }
  }

  render() {
    const { openSidebarIdx } = this.state;

    return (
      <div className="Sidebar">
        <SidebarSection
          title="Section 1"
          options={[1, 2, 3]}
          idx={0}
          onSelect={() => this.updateSidebarIdx(0)}
          open={openSidebarIdx === 0}
        ></SidebarSection>
        <SidebarSection
          title="Section 2"
          options={[4, 5, 6]}
          idx={1}
          open={openSidebarIdx === 1}
          onSelect={() => this.updateSidebarIdx(1)}
        ></SidebarSection>
      </div>
    );
  }
}

export default Sidebar;
