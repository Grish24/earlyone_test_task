import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { UserInfoState } from "../../state";
import { Skeleton, Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Meta } = Card;

const Profile = () => {
  const userList = useRecoilValue(UserInfoState);
  const { name, education, imageUrl } = userList;
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Card style={{ width: 400 }}>
      <Skeleton loading={loading} avatar active>
        <Meta
          avatar={
            imageUrl ? (
              <img width="150" src={imageUrl} alt="" />
            ) : (
              <Avatar shape="square" size={150} icon={<UserOutlined />} />
            )
          }
          title={name}
          description={education}
        />
      </Skeleton>
    </Card>
  );
};

export default Profile;
