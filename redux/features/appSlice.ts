import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type StateProp = {
	isLoading: boolean;
	isError: boolean;
	hasAnimated: boolean;
	screenSize: number | null;
};

const initialAppState: StateProp = {
	isLoading: false,
	isError: false,
	hasAnimated: false,
	screenSize: null,
};

const appSlice = createSlice({
	name: "app",
	initialState: initialAppState,
	reducers: {
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},

		setIsError: (state, action: PayloadAction<boolean>) => {
			state.isError = action.payload;
		},
		setHasAnimated: (state, action: PayloadAction<boolean>) => {
			state.hasAnimated = action.payload;
		},

		setScreenSize: (state, action: PayloadAction<number>) => {
			state.screenSize = action.payload;
		},
	},
});

export default appSlice.reducer;
export const { setIsLoading, setIsError, setScreenSize, setHasAnimated } =
	appSlice.actions;
