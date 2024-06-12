import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    let data = [
      {
        sidebarListLink: "service-details-left-sidebar",
        sidebarListIcon: "flaticon-015-cart",
        sidebarListText: "Ore Minning & quarry industries",
      },
      {
        sidebarListLink: "service-details-left-sidebar1",
        sidebarListIcon: "flaticon-010-tank-1",
        sidebarListText:
          "Comprehensive engineering solutions for plant & machinery",
      },
      {
        sidebarListLink: "service-details-left-sidebar2",
        sidebarListIcon: "flaticon-002-welding",
        sidebarListText:
          "Advanced Vehicle Solutions & Waste Management Equipment",
      },
      {
        sidebarListLink: "service-details-left-sidebar3",
        sidebarListIcon: "flaticon-004-walkie-talkie",
        sidebarListText: "Comprehensive Metal & Mineral Trading and Export",
      },
      {
        sidebarListLink: "service-details-left-sidebar4",
        sidebarListIcon: "flaticon-042-monitor",
        sidebarListText: "Agricultural & Commercial Farming Solutions",
      },
      //   {
      //     sidebarListLink: "service-details-left-sidebar",
      //     sidebarListIcon: "flaticon-050-boxes",
      //     sidebarListText: "Electricity",
      //   },
    ];

    let Datalist = data.map((val, i) => {
      return (
        <li key={i}>
          <a href={val.sidebarListLink}>
            <i className={val.sidebarListIcon} />
            {val.sidebarListText}
          </a>
        </li>
      );
    });

    return (
      <div>
        <div className="sidebar-wrapper">
          <div className="sidebar">
            <h3 className="sidebar-title">Services</h3>
            <ul className="sidebar-list">{Datalist}</ul>
          </div>
          {/* <div className="sidebar">
            <h3 className="sidebar-title">Download brochure</h3>
            <ul className="sidebar-list">
              <li>
                <a href="/">
                  <i className="fa fa-file-pdf-o" />
                  Brochures.PDF
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-file-word-o" />
                  Brochures.DOC
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Sidebar;
