---
title: Asynchronous behaviour of setState 
date: "2017-01-19T23:46:37.121Z"
layout: post
path: "/set-state/"
---

### setState()


setState() is asynchronous. When using asynchronous API’s to update state, we need to be more careful because we can’t predict the result if we do not understand how it works.

setState() does not immediately mutate this.state but creates a pending state transition. Accessing this.state after calling this method can potentially return the existing value.
There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains.

setState have two params, first one is nextState, it can be an object or a function and second one is a callback which is called after completion of the state update, but react does not recommend such logic in callback, use componentDidUpdate instead.
```
setState(nextState, callback)
```
The first argument can be an object (containing zero or more keys to update) or a function (of state and props) that returns an object containing keys to update.
### nextState
```
function(state, props) => newState
```
If we want to get new state based on previouse state we use prevState param in setState
```
this.setState((prevState, props) => {
return {myInteger: prevState.myInteger + props.step};
});
```
Not like (this approach is wrong)
```
this.setState({
myInteger: this.state.myInteger + props.step
});
```
https://jsfiddle.net/aseemnishad/5efvwcx3/6/

### callback
optional callback function that will be executed once setState is completed and the component is re-rendered
```
this.setState((prevState, props) => {
return {myInteger: prevState.myInteger + props.step};
},()=>console.log('Updated!');
```
It will print Updated! in console after the setState is completed.