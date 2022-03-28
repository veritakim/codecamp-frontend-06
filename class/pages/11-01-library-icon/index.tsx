import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(HeartFilled)`
  color: red;
  font-size: 50px;
`;

export default function LibraryIconPage() {
  return <MyIcon />;
}
