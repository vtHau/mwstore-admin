import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import useTitle from "../../hooks/useTitle";
import useDownload from "../../hooks/useDownload";
import BrandList from "./../../components/Brand/BrandList";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { Upload, Button } from "antd";
import { UploadOutlined, DownloadOutlined } from "@ant-design/icons";
import * as PATH_URL from "../../constants/apiUrl";
import importApi from "../../apis/importApi";
import toast from "../../helpers/toast";
import response from "../../constants/response";
import { useDispatch } from "react-redux";
import { fetchAllBrand } from "../../actions/action";

const socket = io(PATH_URL.BASE_URL_NODE);

function Message() {
  const dispatch = useDispatch();

  const [confirmLoading, setConfirmLoading] = useState(false);
  useTitle("Message");

  useEffect(() => {
    //Nhận dữ liệu từ server gửi lên thông qua socket với key receive_message
    socket.on("receive_message", (data) => {
      console.log(data);
      //Sau đó nó sẽ setLoad gọi lại hàm useEffect lấy lại dữ liệu
      // setLoad(true);
    });
  }, []);

  return (
    <>
      <Breadcrumb title="Message List" parent="Message" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Message Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <div className="row app-one">
                <div className="col-sm-4 side">
                  <div className="side-one">
                    <div className="row heading">
                      <div className="col-sm-3 col-xs-3 heading-avatar">
                        <div className="heading-avatar-icon">
                          {/* <img src={sessionStorage.getItem("image_user")} /> */}
                        </div>
                      </div>
                      <div className="col-sm-9 col-xs-1 d-flex align-items-center">
                        <span>TrungHau</span>
                      </div>
                    </div>

                    <div className="row searchBox">
                      <div className="col-sm-12 searchBox-inner">
                        <div className="form-group has-feedback">
                          <input
                            id="searchText"
                            type="text"
                            className="form-control"
                            name="searchText"
                            placeholder="Search"
                          />
                          <span className="glyphicon glyphicon-search form-control-feedback"></span>
                        </div>
                      </div>
                    </div>

                    {/* <ListUser listUser={listUser} GetUserID={GetUserID} /> */}
                  </div>
                </div>

                <div className="col-sm-8 conversation">
                  <div className="row heading">
                    {true && (
                      <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                        <div className="heading-avatar-icon">
                          {/* <img src={anotherUser.image} /> */}
                        </div>
                      </div>
                    )}
                    <div className="col-sm-8 col-xs-7 heading-name">
                      <a className="heading-name-meta">Hau ne</a>
                      <span className="heading-online">Online</span>
                    </div>
                  </div>
                  <div className="row message" id="conversation">
                    <div className="row message-previous">
                      <div className="col-sm-12 previous">
                        {/* {conversation &&
                          conversation.map((value) =>
                            value.type === "USER_SEND" ? (
                              <div
                                className="message-main-sender"
                                key={value.id}
                              >
                                <div className="sender">
                                  <span className="message-time pull-right">
                                    Bạn
                                  </span>
                                  <div className="message-text">
                                    {parse(value.message)}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div
                                className="message-main-receiver"
                                key={value.id}
                              >
                                <div className="receiver">
                                  <span className="message-time pull-right">
                                    {value.name}
                                  </span>
                                  <div className="message-text">
                                    {parse(value.message)}
                                  </div>
                                </div>
                              </div>
                            )
                          )} */}

                        <div className="message-main-sender pull-right" key={1}>
                          <div className="sender">
                            <span className="message-time">Bạn</span>
                            <div className="message-text">Trung Hau</div>
                          </div>
                        </div>
                        <div className="message-main-receiver" key={451122}>
                          <div className="receiver">
                            <span className="message-time">Trung hau</span>
                            <div className="message-text">Trung Hau</div>
                          </div>
                        </div>
                        {true && (
                          <div className="wrapper_loading">
                            <div className="lds-ellipsis">
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* {emotion && (
                    <div className="show_icon">
                      <div className="list_icon">
                        <div className="icon" onClick={() => onClickIcon(":(")}>
                          <img
                            className="img_icon"
                            src="https://www.flaticon.com/svg/static/icons/svg/742/742760.svg"
                            alt=""
                          />
                        </div>
                        <div
                          className="icon"
                          onClick={() => onClickIcon("*_*")}
                        >
                          <img
                            className="img_icon"
                            src="https://www.flaticon.com/svg/static/icons/svg/742/742750.svg"
                            alt=""
                          />
                        </div>
                        <div className="icon" onClick={() => onClickIcon(":)")}>
                          <img
                            className="img_icon"
                            src="https://www.flaticon.com/svg/static/icons/svg/742/742920.svg"
                            alt=""
                          />
                        </div>
                        <div
                          className="icon"
                          onClick={() => onClickIcon("T_T")}
                        >
                          <img
                            className="img_icon"
                            src="https://www.flaticon.com/svg/static/icons/svg/742/742822.svg"
                            alt=""
                          />
                        </div>
                        <div
                          className="icon"
                          onClick={() => onClickIcon("-,-")}
                        >
                          <img
                            className="img_icon"
                            src="https://www.flaticon.com/svg/static/icons/svg/742/742787.svg"
                            alt=""
                          />
                        </div>
                        <div className="icon" onClick={() => onClickIcon(":*")}>
                          <img
                            className="img_icon"
                            src="https://www.flaticon.com/svg/static/icons/svg/742/742745.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  )} */}

                  <div className="row reply">
                    <div className="col-sm-1 col-xs-1 reply-emojis">
                      <svg
                        className="a8c37x1j ms05siws hr662l2t b7h9ocf4"
                        height="20px"
                        viewBox="0 0 38 38"
                        width="20px"
                      >
                        <g fillRule="evenodd">
                          <g transform="translate(-893.000000, -701.000000)">
                            <g transform="translate(709.000000, 314.000000)">
                              <g>
                                <path
                                  d="M210.5,405 C209.121,405 208,403.879 208,402.5 C208,401.121 209.121,400 210.5,400 C211.879,400 213,401.121 213,402.5 C213,403.879 211.879,405 210.5,405 M212.572,411.549 C210.428,413.742 206.938,415 203,415 C199.062,415 195.572,413.742 193.428,411.549 C192.849,410.956 192.859,410.007 193.451,409.428 C194.045,408.85 194.993,408.859 195.572,409.451 C197.133,411.047 199.909,412 203,412 C206.091,412 208.867,411.047 210.428,409.451 C211.007,408.859 211.956,408.85 212.549,409.428 C213.141,410.007 213.151,410.956 212.572,411.549 M195.5,400 C196.879,400 198,401.121 198,402.5 C198,403.879 196.879,405 195.5,405 C194.121,405 193,403.879 193,402.5 C193,401.121 194.121,400 195.5,400 M203,387 C192.523,387 184,395.523 184,406 C184,416.477 192.523,425 203,425 C213.477,425 222,416.477 222,406 C222,395.523 213.477,387 203,387"
                                  className="crt8y2ji"
                                  fill="#0084ff"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="col-sm-9 col-xs-9 reply-main">
                      <input
                        className="message-content"
                        type="text"
                        // value={send}
                        // onChange={onChangeSend}
                      />
                    </div>
                    <div className="col-sm-1 col-xs-1 reply-send">
                      <svg
                        className="crt8y2ji"
                        height="20px"
                        width="20px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
                          fillRule="evenodd"
                          fill="#0084ff"
                          stroke="none"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
