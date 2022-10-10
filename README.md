<div align="center">
<h1>useDRR (deep-re-render) 🐟</h1>

<p>It's a React hook that plugs-in in any dependency array so it can provide re renders on deep comparison rather than reference equality</p>
<p>Works on useEffect, useMemo and useCallback.</p>
</div>

---

<br/>

> WARNING: Please _only_ use this if you really need deep comparison on
> an item on the dependency array, or can't find another way around the problem

<br/>

## The Problem

React's hooks that use dependency arrays (such as useEffect, useMemo and useCallback) are triggered when one or more elements of the dependency array change.

However, two problematic situations may occur:

1. The variable changes often and loses its reference in every render.
   In this case, the useEffect/Memo/Callback will trigger on every render, despite the values not being changed.

2. The variable does not lose it's reference, but the deep nested referential values (like complex objects) do not trigger the dependency array.<br/>
   It might happen when using packages such as react-hook-form (useForm).<br/>
   useForm returns a complex object, like:<br/>

```json
{
    register,
    reset,
    formState:{
        errors:{
            ...errors
        }
    }
}
```

    Then, if you need to use this object in a useEffect/Memo/Callback (to send it throught context API, for example, and need to memoize it), when one of the errors change, it will not trigger the useEffect/Memo/Callback

## Usage

```javascript
import useDRR from "deep-re-render";

useEffect(() => {
  //do stuf...
}, [regularItem, useDRR(complexItem)]);

const memo = useMemo(() => {
  //do stuf...
}, [regularItem, useDRR(complexItem)]);

const callBack = useCallback(() => {
  //do stuf...
}, [regularItem, useDRR(complexItem)]);
```

The useDRR hook can be used inside of the dependency array, together with any other regular dependency array item.
