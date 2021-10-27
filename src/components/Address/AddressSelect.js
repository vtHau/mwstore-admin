import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Select, Input } from "antd";
import toast from "../../helpers/toast";
import response from "../../constants/response";
import feeshipApi from "../../apis/feeshipApi";
import { isEmpty } from "lodash-es";

const { Option } = Select;
const { Search } = Input;

function AddressSelect(props) {
  const { setFeeship } = props;
  const address = useSelector((state) => state.addressReducer.address);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [city, setCity] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState("");
  const [villages, setVillages] = useState([]);
  const [village, setVillage] = useState("");

  useEffect(() => {
    if (!isEmpty(address)) {
      setCity(address[0].city_code);
      const { provinces } = address[0];
      setProvinces(provinces);
      setProvince(provinces[0].province_code);

      const { villages } = provinces[0];
      setVillages(villages);
      setVillage(villages[0].village_code);
    }
  }, [address]);

  const handleChangeCity = (city_code) => {
    const currCity = address.find((city) => city.city_code === city_code);

    setCity(city_code);
    setProvinces(currCity.provinces);
    setProvince(currCity.provinces[0].province_code);
    setVillages(currCity.provinces[0].villages);
    setVillage(currCity.provinces[0].villages[0].village_code);
  };

  const handleChangeProvince = (province_code) => {
    const currProvince = provinces.find(
      (province) => province.province_code === province_code
    );

    setProvince(province_code);
    setVillages(currProvince.villages);
    setVillage(currProvince.villages[0].village_code);
  };

  const handleChangeVillage = (village_code) => {
    setVillage(village_code);
  };

  const handleAdd = (value) => {
    if (value < 100 || value > 1000000) {
      return toast.error("Fail", "Price from 100 into 1000000");
    }

    const feeship = {
      city_code: city,
      province_code: province,
      village_code: village,
      feeship: value,
    };

    setConfirmLoading(true);

    feeshipApi
      .newFeeship(feeship)
      .then((res) => {
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          return toast.success("Success", "Save feeship success");
        }
        return toast.error("Fail", "Save feeship fail");
      })
      .catch((err) => {
        setConfirmLoading(false);
        return toast.error("Fail", "Save feeship fail");
      });
  };

  return (
    <div className="address-section">
      <h3 className="title-address">Địa chỉ nhận hàng</h3>
      <div className="row">
        <div className="col-12 col-md-3 col-lg-3 col-xl-3">
          <p className="choose-address">Tỉnh /Thành phố</p>
          <Select
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
            value={city}
            onChange={handleChangeCity}
          >
            {address.map((city) => (
              <Option key={city.city_code} value={city.city_code}>
                {city.name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="col-12 col-md-3 col-lg-3 col-xl-3">
          <p className="choose-address">Quận /Huyện</p>
          <Select
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
            value={province}
            onChange={handleChangeProvince}
          >
            {provinces.map((province) => (
              <Option
                key={province.province_code}
                value={province.province_code}
              >
                {province.name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="col-12 col-md-3 col-lg-3 col-xl-3">
          <p className="choose-address">Xã /Phường</p>
          <Select
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
            value={village}
            onChange={handleChangeVillage}
          >
            {villages.map((village) => (
              <Option key={village.village_code} value={village.village_code}>
                {village.name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="col-12 col-md-3 col-lg-3 col-xl-3">
          <p className="choose-address">Phí vận chuyển</p>
          <div className="row">
            <Search
              placeholder="Input feeship..."
              allowClear
              type="number"
              minLength="3"
              maxLength="9"
              defaultValue="15000"
              addonBefore="VND"
              min="100"
              max="1000000"
              enterButton="Add"
              loading={confirmLoading}
              onSearch={handleAdd}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressSelect;
