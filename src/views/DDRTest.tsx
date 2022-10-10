import { useEffect, useState, useRef, useMemo } from "react";
import useDRR from "../utils/useDRR";

const useEffectTestNoDrr = (form: any) => {
  useEffect(() => {
    console.log("CHANGED NO-DRR!");
  }, [form]);
};

const useEffectTestWithDrr = (form: any) => {
  useEffect(() => {
    console.log("CHANGED DRR!");
  }, []);
};

const useMemoTestNoDrr = (form: any) => {
  const thisMemo = useMemo(() => {
    return `${JSON.stringify(form)} ${Math.random()}`;
  }, [form]);
  return thisMemo;
};

const useMemoTestWithDrr = (form: any) => {
  const thisMemo = useMemo(() => {
    return `${JSON.stringify(form)} ${Math.random()}`;
  }, [useDRR(form)]);
  return thisMemo;
};

let obj = {
  item: "test",
  data: {
    secondLevel: "one",
  },
};

const DDRTest = () => {
  const [count, setCount] = useState(0);
  // let obj = useRef<any>({ item: "one" });
  // useEffectTestNoDrr(obj.current);
  // useEffectTestWithDrr(obj.current);
  // const memo1 = useMemoTestNoDrr(obj.current);
  // const memo2 = useMemoTestWithDrr(obj.current);
  useEffectTestNoDrr(obj);
  useEffectTestWithDrr(obj);
  const memo1 = useMemoTestNoDrr(obj);
  const memo2 = useMemoTestWithDrr(obj);
  return (
    <div>
      <div>DDRTest</div>
      <div>{count}</div>
      <div>No DRR {memo1}</div>
      <div>With DRR {memo2}</div>
      <p>
        <button
          onClick={() => {
            obj = {
              item: "test",
              data: {
                secondLevel: "one",
              },
            };
            setCount((c) => c + 1);
          }}
        >
          change obj - one
        </button>
        <button
          onClick={() => {
            obj = {
              item: "test",
              data: {
                secondLevel: "two",
              },
            };
            setCount((c) => c + 1);
          }}
        >
          change obj - two
        </button>
      </p>
    </div>
  );
};

export default DDRTest;
