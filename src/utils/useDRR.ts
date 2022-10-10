import { useState, useRef, useEffect } from "react";
import isEqual from "lodash.isequal";

type DependencyItem = unknown;
type ReRenderTrigger = number;

const useDRR = (dependencyItem: DependencyItem): ReRenderTrigger => {
  const [triggerRender, setTriggerRender] = useState<ReRenderTrigger>(0);
  const dependencyItemRef = useRef<DependencyItem>(dependencyItem);
  useEffect(() => {
    if (isEqual(dependencyItem, dependencyItemRef.current)) return;
    dependencyItemRef.current = dependencyItem;
    setTriggerRender((t) => t + 1);
  });
  return triggerRender;
};

export default useDRR;
