import { type DraggedCardProps, type ItemType, type KanbanBoardProps } from "../types";
import { type useColumnPagination } from "./useColumnPagination";
interface UseDragGestureProps<T extends ItemType, K> {
    toColumnIndex: number;
    paginate: ReturnType<typeof useColumnPagination>["paginate"];
    onDragEndSuccess: KanbanBoardProps<T, K>["onDragEnd"];
    onDrop: () => void;
}
export declare const useDragGesture: <T extends ItemType, K>({ paginate, toColumnIndex, onDragEndSuccess, onDrop, }: UseDragGestureProps<T, K>) => {
    pan: import("react-native-gesture-handler/lib/typescript/handlers/gestures/panGesture").PanGesture;
    dragItem: DraggedCardProps<T> | undefined;
    setDragCard: import("react").Dispatch<import("react").SetStateAction<DraggedCardProps<T> | undefined>>;
    dragX: import("react-native-reanimated").SharedValue<number>;
    dragY: import("react-native-reanimated").SharedValue<number>;
};
export {};
