import React, { useEffect, useState, useRef } from "react";
import activityApi from "./../../apis/activityApi";
import { AlertCircle } from "react-feather";
import InfiniteScroll from "react-infinite-scroll-component";
import { TransverseLoading } from "react-loadingg";

function Notification() {
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
        .getActivity({ page })
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
    <ul className="notification-dropdown onhover-show-div p-0">
      <li>Notification</li>
      <ul className="noti-list">
        <InfiniteScroll
          dataLength={activities.length}
          next={fetchActivityMore}
          hasMore={noMore}
        >
          {activities.map((activity, key) => (
            <li key={key}>
              <div className="media">
                <AlertCircle />
                <p className="mb-0">{activity.admin_content}</p>
              </div>
            </li>
          ))}
        </InfiniteScroll>
        <div className="scroll-to" ref={notiEndRef} />
      </ul>

      <li className="txt-dark text-center">
        <div
          className="text-center"
          onClick={noMore ? fetchActivityMore : null}
        >
          {noMore ? "Load more noti" : "Full item noti"}
          {loading && <TransverseLoading size="small" />}
        </div>
      </li>
    </ul>
  );
}

export default Notification;
