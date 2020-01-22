import React from "react";
import { Link } from "react-router-dom";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import "./sidebar.css";
import downArrow from "./chevron-down.svg";

const SidebarSection = ({ title, options, open, onSelect, page }) => (
  <div className="Sidebar-Section">
    <div className="Sidebar-Header" onClick={onSelect}>
      <span className="Sidebar-Header-Text">{title}</span>
      <img className="Sidebar-Arrow" src={downArrow} />
    </div>
    <SlideDown className={"my-dropdown-slidedown"}>
      {open && (
        <div className="Sidebar-Links">
          <ul>
            {options.map(option => (
              <div className="Sidebar-Link-Container">
                <Link
                  className="Sidebar-Link"
                  to={`/${option}`}
                  style={page === option ? { fontWeight: "bold" } : {}}
                >
                  Link {option}
                </Link>
              </div>
            ))}
          </ul>
        </div>
      )}
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
    const { page } = this.props;
    const { openSidebarIdx } = this.state;

    return (
      <div className="Sidebar">
        <SidebarSection
          title="Section 1"
          options={[1, 2, 3]}
          idx={0}
          page={page}
          onSelect={() => this.updateSidebarIdx(0)}
          open={openSidebarIdx === 0}
        ></SidebarSection>
        <SidebarSection
          title="Section 2"
          options={[4, 5, 6]}
          page={page}
          idx={1}
          open={openSidebarIdx === 1}
          onSelect={() => this.updateSidebarIdx(1)}
        ></SidebarSection>
      </div>
    );
  }
}

export default Sidebar;
