"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./StarRating.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Import the CSS file

var StarRating = function StarRating(_ref) {
  var rating = _ref.rating;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "Stars",
    style: {
      "--rating": rating
    },
    "aria-label": "Rating of this product is ".concat(rating, " out of 5.")
  });
};
var _default = exports["default"] = StarRating;