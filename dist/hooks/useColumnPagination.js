import { throttle } from "lodash";
import { useSharedValue } from "react-native-reanimated";
export const useColumnPagination = ({ columnsHorizontalScrollRef, constants, }) => {
    const { edgeColumnOff, columnContainerWidth } = constants;
    const currentVisibleColumnIndex = useSharedValue(0);
    const updateCurrentColumnIndex = (columnIndex) => {
        currentVisibleColumnIndex.value = columnIndex;
    };
    const paginate = throttle((to) => {
        switch (to) {
            case "right":
                columnsHorizontalScrollRef.current?.scrollToOffset({
                    offset: edgeColumnOff +
                        currentVisibleColumnIndex.value * columnContainerWidth,
                    animated: true,
                });
                break;
            case "center":
                columnsHorizontalScrollRef.current?.scrollToOffset({
                    offset: edgeColumnOff +
                        (currentVisibleColumnIndex.value - 1) * columnContainerWidth,
                    animated: true,
                });
                break;
            case "left":
                columnsHorizontalScrollRef.current?.scrollToOffset({
                    offset: edgeColumnOff +
                        (currentVisibleColumnIndex.value - 2) * columnContainerWidth,
                    animated: true,
                });
                break;
        }
    }, 1000, { leading: true, trailing: false });
    return { paginate, updateCurrentColumnIndex };
};
