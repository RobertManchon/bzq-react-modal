"use strict";

var _react = require("@testing-library/react");

var _App = _interopRequireDefault(require("../../App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders demo', () => {
  (0, _react.render)( /*#__PURE__*/React.createElement(_App.default, null));

  const linkElement = _react.screen.getByText(/Démo bzq-react-modal/i);

  expect(linkElement).toBeInTheDocument();
});