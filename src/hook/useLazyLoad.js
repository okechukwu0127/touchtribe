import { useEffect, useReducer, useCallback } from "react";
import debounce from "lodash/debounce";

const INTERSECTION_THRESHOLD = 5;
const LOAD_DELAY_MS = 500;

const reducer = (state, action) => {
  switch (action.type) {
    case "set": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "onGrabData": {
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload.data],
        currentPage: state.currentPage + 1,
      };
    }
    default:
      return state;
  }
};

const useLazyLoad = ({ triggerRef, onGrabData, options }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    currentPage: 1,
    data: [],
  });

    const handleEntryDangle = async (entry) => {
      
        const { boundingClientRect, intersectionRect } = entry;
    const boundingRect = boundingClientRect;
    const intersectionRect2 = intersectionRect;

    if (
      !state.loading &&
      entry.isIntersecting &&
      intersectionRect2.bottom - boundingRect.bottom <= INTERSECTION_THRESHOLD
    ) {
      dispatch({ type: "set", payload: { loading: true } });
      const data = await onGrabData(state.currentPage);
      dispatch({ type: "onGrabData", payload: { data } });
    }
  };
  const handleEntry = debounce(handleEntryDangle, LOAD_DELAY_MS);

  const onIntersect = useCallback(
    (entries) => {
      handleEntry(entries[0]);
    },
    [handleEntry]
  );

  useEffect(() => {
    if (triggerRef.current) {
      const container = triggerRef.current;
      const observer = new IntersectionObserver(onIntersect, options);

      observer.observe(container);

      return () => {
        observer.disconnect();
      };
    }
  }, [triggerRef, onIntersect, options]);

  return state;
};

export default useLazyLoad;
