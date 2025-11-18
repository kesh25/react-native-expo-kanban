import { type SharedValue } from 'react-native-reanimated';
import { type DraggedCardProps, type ItemType } from '../types';
type DragContext<T extends ItemType> = {
    setDragCard: (props: DraggedCardProps<T>) => void;
    dragCard?: T;
    dragCardY?: SharedValue<number>;
    dragCardX?: SharedValue<number>;
    dragOffsetY?: SharedValue<number>;
};
export declare const DragContextValue: import("react").Context<DragContext<ItemType> | undefined>;
export declare const useDragContext: () => DragContext<ItemType> | undefined;
export {};
