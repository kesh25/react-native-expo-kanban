import React, { createRef, useRef } from 'react';
import { Pressable, View } from 'react-native';
export const DataCard = React.memo(({ item, setDragCard, renderItem, itemColumnIndex, isDraggable, disableScroll, isBeingDragged }) => {
    const positionRef = useRef(undefined);
    const onLongPress = () => {
        if (positionRef.current && isDraggable) {
            disableScroll();
            viewRef.current?.measureInWindow((x, y, width) => {
                setDragCard({ props: item, width, x, y: y - 100, columnIndex: itemColumnIndex, id: item.id });
            });
        }
    };
    const onLayout = (event) => {
        event.currentTarget.measure((_x, _y, width, _height, pageX, pageY) => {
            positionRef.current = { x: pageX, y: pageY, width };
        });
    };
    const viewRef = createRef();
    return (<Pressable delayLongPress={200} style={{ opacity: isBeingDragged ? 0 : 1, marginVertical: 2 }} onLongPress={onLongPress} onLayout={onLayout}>
   <View ref={viewRef}>
    {renderItem(item)}
   </View>
  </Pressable>);
});
