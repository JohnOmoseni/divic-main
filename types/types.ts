import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { MouseEventHandler } from "react";

export type ButtonProps = {
	title: string;
	className?: string;
	btnType?: "button" | "submit";
	onClick?: () => void;
};

// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
