import { WithAuth } from "../../../src/components/commons/hocs/withAuth";
import PaymentContainer from "../../../src/components/units/product/payment/Payment.container";

function PaymentPage () {


  return <PaymentContainer />
}

export default WithAuth(PaymentPage)