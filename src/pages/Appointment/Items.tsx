// import { useDispatch, useSelector } from "react-redux";
import AppointmentCardLayout from "../../layouts/AppointmentCardLayout";
import { ItemType } from "../../types/appointment";
// import { ProductType } from "../../types/product";
// import { getSingleStoreAction } from "../../store/features/product/productSlice";
import { itemList } from "../../constants/dummyData";

const Items = () => {
  // const product = useSelector((state: { product: ProductType }) => state.product);
  // const dispatch = useDispatch();

  return (
    <div className="w-full lg:w-[782px] flex flex-wrap flex-col lg:flex-row h-full gap-4 lg:gap-x-4 lg:gap-y-6 ">
      {itemList.map((item: ItemType, index) => (
        <AppointmentCardLayout
          style="w-full lg:w-[250px] h-15 lg:h-16 px-[22px] py-[18px]"
          disabled={false}
          key={index}
        >
          <p>{item.name}</p>
        </AppointmentCardLayout>
      ))}
      
      {/* // 步驟按鈕們 */}
      {/* <button onClick={() => dispatch(getSingleStoreAction(product))}>
        Get Users
      </button>
      {product.price}
      {product.title} */}
    </div>
  );
};

export default Items;
