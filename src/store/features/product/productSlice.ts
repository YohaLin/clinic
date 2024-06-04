import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  title: "",
  price: "",
  category: "",
  description: "",
  image: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getSingleStoreAction: (state, action) => {
      const { id, title, price, category, description, image } = action.payload;
      if (id) state.id = id;
      if (title) state.title = title;
      if (price) state.price = price;
      if (category) state.category = category;
      if (description) state.description = description;
      if (image) state.image = image;
    },
  },
});

export const { getSingleStoreAction } = productSlice.actions;

export default productSlice.reducer;
