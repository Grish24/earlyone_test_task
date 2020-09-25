import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { UserInfoState } from "../../state";
import { Form, Input, Button, message } from "antd";
import { UploadFile } from "antd/es/upload/interface";
import { UploadChangeParam } from "antd/lib/upload";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { RegisterWrapper, CustomForm, AvatarUpload } from "./styles";
import helpers from "../../helpers/";
const { getBase64, normFile } = helpers;

function Register() {
  const setUserInfo = useSetRecoilState(UserInfoState);
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const navigate = useNavigate();

  function beforeUpload(file: UploadFile) {
    const isJpgOrPngOrSvg =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/svg+xml";
    if (!isJpgOrPngOrSvg) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPngOrSvg && isLt2M;
  }

  const handleChange = (info: UploadChangeParam) => {
    console.log(info.file);
    const { status, originFileObj } = info.file;
    if (status === "uploading") {
      return setLoading(true);
    }
    if (status === "done" && originFileObj) {
      getBase64(originFileObj, (imageUrl) => {
        if (typeof imageUrl === "string") {
          setImageUrl(imageUrl);
          setLoading(false);
        }
      });
    }
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
    setUserInfo({
      name: values.name,
      education: values.education,
      imageUrl,
    });
    navigate("/profile");
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div>Upload</div>
    </div>
  );
  return (
    <RegisterWrapper>
      <CustomForm
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <AvatarUpload
            name="avatar"
            listType="picture-card"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </AvatarUpload>
        </Form.Item>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="education"
          rules={[{ required: true, message: "Please input your education!" }]}
        >
          <Input placeholder="Education" />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </CustomForm>
    </RegisterWrapper>
  );
}

export default Register;
