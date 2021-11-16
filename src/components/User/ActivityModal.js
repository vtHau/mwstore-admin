import React, { useEffect, useState, useRef } from "react";
import { Modal } from "antd";
import { AlertCircle } from "react-feather";
import InfiniteScroll from "react-infinite-scroll-component";
import { TransverseLoading } from "react-loadingg";
import activityApi from "./../../apis/activityApi";

function ActivityModal(props) {
  const { user, openActivity, toggleActivity } = props;
  const [activities, setActivities] = useState([]);
  const [noMore, setNoMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [pageLoad, setPageLoad] = useState({ page: 1, lastPage: 1 });

  const notiEndRef = useRef(null);

  const scrollToBottom = () => {
    notiEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const fetchActivityMore = () => {
    const { page, lastPage } = pageLoad;

    if (page <= lastPage) {
      setLoading(true);
      activityApi
        .getActivity({ page, user_id: user.id })
        .then((res) => {
          const result = res.data;

          if (page <= result.last_page) {
            setPageLoad({
              page: page + 1,
              lastPage: result.last_page,
            });
          }

          setActivities([...activities, ...result.data]);
          setLoading(false);
          scrollToBottom();
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      setNoMore(false);
    }
  };

  useEffect(() => {
    const { page, lastPage } = pageLoad;

    if (page > lastPage) setNoMore(false);
  }, [pageLoad]);

  useEffect(fetchActivityMore, []);

  return (
    <Modal
      visible={openActivity}
      onOk={toggleActivity}
      onCancel={toggleActivity}
      footer={null}
    >
      {activities.length ? (
        <div className="row">
          <ul className="box-list-noti">
            <h4 className="ml-2">Activity</h4>
            <ul className="noti-list" style={{ width: "100%" }}>
              <InfiniteScroll
                style={{}}
                dataLength={activities.length}
                next={fetchActivityMore}
                hasMore={noMore}
              >
                {activities.map((activity, key) => (
                  <li key={key}>
                    <div className="media">
                      <AlertCircle />
                      <p className="mb-0">
                        {activity.admin_content} - {activity.time}
                      </p>
                    </div>
                  </li>
                ))}
              </InfiniteScroll>
              <div className="scroll-to" ref={notiEndRef} />
            </ul>

            <li className="txt-dark text-center">
              <div
                className="text-center load-more-hover"
                onClick={noMore ? fetchActivityMore : null}
              >
                {noMore ? "Load more activity" : "Full activity"}
              </div>
              {loading && <TransverseLoading size="small" />}
            </li>
          </ul>
        </div>
      ) : (
        <p className="text-center">No activity</p>
      )}
    </Modal>
  );
}

export default ActivityModal;
