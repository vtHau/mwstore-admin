import React from "react";
import { useSelector } from "react-redux";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User } from "react-feather";

function Tabset_profile() {
  const admin = useSelector((state) => state.adminReducer.admin);

  return (
    <div>
      <Tabs>
        <TabList className="nav nav-tabs tab-coupon">
          <Tab className="nav-link">
            <User className="mr-2" />
            Profile
          </Tab>
        </TabList>

        <TabPanel>
          <div className="tab-pane fade show active">
            <h5 className="f-w-600 f-16">Profile</h5>
            <div className="table-responsive profile-table">
              <table className="table table-responsive">
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{admin.name}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{admin.email}</td>
                  </tr>
                  <tr>
                    <td>Role:</td>
                    <td>{admin.role}</td>
                  </tr>
                  <tr>
                    <td>Description:</td>
                    <td>{admin.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Tabset_profile;
