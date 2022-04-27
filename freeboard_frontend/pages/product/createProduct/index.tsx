import { WithAuth } from "../../../src/components/commons/hocs/withAuth";
import CreateProductContainer from "../../../src/components/units/product/write/CreateProduct.container";

function createProductPage () {


  return <CreateProductContainer isEdit={false}/>
}

export default WithAuth(createProductPage) 