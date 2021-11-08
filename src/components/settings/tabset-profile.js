import React from "react";
import { useSelector } from "react-redux";
import useToggle from "./../../hooks/useToggle";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import ProfileEditModal from "./../../components/Profile/ProfileEditModal";
import { User } from "react-feather";
import { authToken } from "./../../actions/action";

function Tabset_profile() {
  const admin = useSelector((state) => state.adminReducer.admin);
  const [openModal, toggleModal] = useToggle(false);

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
              <div className="btn btn-primary ml-2" onClick={toggleModal}>
                Edit
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
      <ProfileEditModal
        admin={admin}
        openModal={openModal}
        toggleModal={toggleModal}
      />
    </div>
  );
}

export default Tabset_profile;
