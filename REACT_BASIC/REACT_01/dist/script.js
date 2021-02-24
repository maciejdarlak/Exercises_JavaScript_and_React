function Person(props) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "person" }, /*#__PURE__*/
    React.createElement("h1", null, props.name), /*#__PURE__*/
    React.createElement("p", null, "Your Age: ", props.age)));


}

var app = /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement(Person, { name: "Maciek", age: "43" }), /*#__PURE__*/
React.createElement(Person, { name: "Ala", age: "35" }));



ReactDOM.render(app, document.querySelector("#app"));