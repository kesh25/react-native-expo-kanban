import { useState } from "react";
import { Dimensions } from "react-native";
import { Gesture } from "react-native-gesture-handler";
import { runOnJS, useSharedValue, withSpring } from "react-native-reanimated";
export const useDragGesture = ({ paginate, toColumnIndex, onDragEndSuccess, onDrop, }) => {
    const SCREEN_WIDTH = Dimensions.get("screen").width;
    const [dragItem, setDragCard] = useState();
    const dragX = useSharedValue(0);
    const dragY = useSharedValue(0);
    const drop = () => {
        onDrop();
        const isBeingDragged = dragItem !== undefined;
        if (isBeingDragged) {
            if (dragItem.columnIndex !== toColumnIndex) {
                onDragEndSuccess({
                    fromColumnIndex: dragItem.columnIndex,
                    toColumnIndex,
                    itemId: dragItem.id,
                });
            }
            setDragCard(undefined);
        }
    };
    const pan = Gesture.Pan()
        .manualActivation(true)
        .onTouchesMove((_, stateManager) => {
        if (dragItem?.id) {
            stateManager.activate();
        }
    })
        .onChange((event) => {
        dragX.value = event.translationX;
        dragY.value = event.translationY;
        if (event.absoluteX > SCREEN_WIDTH - 50) {
            runOnJS(paginate)("right");
        }
        if (event.absoluteX < 50) {
            runOnJS(paginate)("left");
        }
    })
        .onEnd(() => {
        dragX.value = withSpring(0, { duration: 1000 });
        dragY.value = withSpring(0, { duration: 1000 });
    })
        .onFinalize(() => {
        runOnJS(drop)();
    });
    return { pan, dragItem, setDragCard, dragX, dragY };
};
