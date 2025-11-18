import type Animated from "react-native-reanimated";
import { type AnimatedRef } from "react-native-reanimated";
interface UseColumnPaginationProps {
    columnsHorizontalScrollRef: AnimatedRef<Animated.FlatList<any>>;
    constants: {
        edgeColumnOff: number;
        columnContainerWidth: number;
    };
}
export declare const useColumnPagination: ({ columnsHorizontalScrollRef, constants, }: UseColumnPaginationProps) => {
    paginate: import("lodash").DebouncedFuncLeading<(to: "left" | "right" | "center") => void>;
    updateCurrentColumnIndex: (columnIndex: number) => void;
};
export {};
