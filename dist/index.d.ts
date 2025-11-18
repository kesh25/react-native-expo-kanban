import React from "react";
import { type ItemType, type KanbanBoardProps } from "./types";
declare const ReactNativeKanbanBoard: <T extends ItemType, K>(props: KanbanBoardProps<T, K>) => React.JSX.Element;
export default ReactNativeKanbanBoard;
