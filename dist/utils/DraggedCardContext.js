import { createContext, useContext } from 'react';
export const DragContextValue = createContext(undefined);
export const useDragContext = () => useContext(DragContextValue);
