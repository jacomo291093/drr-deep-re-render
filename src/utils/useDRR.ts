import { useState, useRef, useEffect } from "react";
import _ from "lodash";

const useDRR = (dependencyItem: any) => {
  const [triggerRender, setTriggerRender] = useState(0);
  const dependencyItemRef = useRef<any>(dependencyItem);
  useEffect(() => {
    if (_.isEqual(dependencyItem, dependencyItemRef.current)) return;
    dependencyItemRef.current = dependencyItem;
    setTriggerRender((t) => t + 1);
  });
  return triggerRender;
};

export default useDRR;
