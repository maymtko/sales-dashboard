import React from "react";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidedata: [
        // {
        // "classname":"list-group-item list-group-item-action",
        // "sidenavtitle":"Hide Menu",
        // "iconlink":"#"
        // },
        {
          classname: "list-group-item list-group-item-action",
          sidenavtitle: "Summary",
          iconlink: "#",
        },
        {
          classname: "list-group-item list-group-item-action",
          sidenavtitle: "Performance Dashboards",
          iconlink: "#",
        },
        {
          classname: "list-group-item list-group-item-action",
          sidenavtitle: "Items and Inventory",
          iconlink: "#",
        },
        {
          classname: "list-group-item list-group-item-action",
          sidenavtitle: "Purchase Orders",
          iconlink: "#",
        },
        {
          classname: "list-group-item list-group-item-action",
          sidenavtitle: "Sales Orders",
          iconlink: "#",
        },
        {
          classname: "list-group-item list-group-item-action",
          sidenavtitle: "Return Merchandise",
          iconlink: "#",
        },
        {
          classname: "list-group-item list-group-item-action",
          sidenavtitle: "Supplier",
          iconlink: "#",
        },
        {
          classname: "list-group-item list-group-item-action",
          sidenavtitle: "Delivery Management",
          iconlink: "#",
        },
      ],
    };
  }
  render() {
    const data = this.state.sidedata;

    return (
      <div className="d-flex wrapper">
        <div className="bg-white sidebar-wrapper">
          <div className="list-group list-group-flush my-3">
            {data.map((record, i) => (
              <a key={i} href={record.iconlink} className={record.classname}>
                {record.sidenavtitle}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
