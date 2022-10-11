import { useRef } from "react";
import isEqual from "lodash.isequal";

type DependencyItem = unknown;
type ReRenderTrigger = number;

const useDRR = (dependencyItem: DependencyItem): ReRenderTrigger => {
  const triggerRender = useRef<ReRenderTrigger>(0);
  const dependencyItemRef = useRef<DependencyItem>(dependencyItem);
  if (!isEqual(dependencyItem, dependencyItemRef.current)) {
    dependencyItemRef.current = dependencyItem;
    triggerRender.current++;
  }
  return triggerRender.current;
};

export default useDRR;
