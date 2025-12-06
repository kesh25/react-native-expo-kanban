import React from "react";
import { type DraggedCardProps, type ItemType, type KanbanBoardProps } from "../types";
interface CardItemProps<T extends ItemType, K> {
    item: T;
    isDraggable: boolean;
    itemColumnIndex: number;
    renderItem: KanbanBoardProps<T, K>["renderItem"];
    disableScroll: () => void;
    isBeingDragged: boolean;
    setDragCard: (props: DraggedCardProps<T>) => void;
}
export declare const DataCard: React.MemoExoticComponent<(<_, K>({ item, setDragCard, renderItem, itemColumnIndex, isDraggable, disableScroll, isBeingDragged, }: CardItemProps<any, K>) => React.JSX.Element)>;
export {};
