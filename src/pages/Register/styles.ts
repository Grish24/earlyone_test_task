import styled from "styled-components";
import { Form , Upload } from "antd";

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const CustomForm = styled(Form)`
  min-width: 320px;
`;
export const AvatarUpload = styled(Upload)`
  text-align: center;
`;
