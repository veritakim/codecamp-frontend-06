import { WithAuth } from "../../../src/components/commons/hocs/withAuth";
import PointChargeContainer from "../../../src/components/units/product/pointCharge/PointCharge.container";

function MyPage () {

  return <PointChargeContainer />
}

export default WithAuth(MyPage)