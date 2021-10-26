import React, { useState } from "react";
import { Button } from "antd";
import couponApi from "../../apis/couponApi";
import response from "../../constants/response";
import toast from "../../helpers/toast";
import * as PATH_URL from "./../../constants/apiUrl";

function SendCouponItem(props) {
  const { user, coupon } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [sendFinish, setSendFinish] = useState(false);

  const handleSendCoupon = () => {
    const data = {
      code: coupon.code,
      user_id: user.id,
    };

    setConfirmLoading(true);
    couponApi
      .sendCoupon(data)
      .then((res) => {
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          setSendFinish(true);
          return toast.success("Success", "Send coupon success");
        }
        return toast.success("Fail", "Send coupon fail");
      })
      .catch((err) => {
        setConfirmLoading(false);
        return toast.success("Fail", "Send coupon fail");
      });
  };

  return (
    <tr>
      <td>
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left">
              <img
                className="rounded-circle border-circle"
                src={PATH_URL.AVATAR_IMAGE + user.image}
                alt={user.name}
              />
            </div>
            <div className="widget-content-left flex2">
              <div className="widget-heading">{user.name}</div>
            </div>
          </div>
        </div>
      </td>
      <td>{user.email}</td>
      <td>
        <Button
          type="primary"
          onClick={handleSendCoupon}
          loading={confirmLoading}
          disabled={sendFinish}
        >
          {sendFinish ? "Done" : "Send"}
        </Button>
      </td>
    </tr>
  );
}

export default SendCouponItem;
