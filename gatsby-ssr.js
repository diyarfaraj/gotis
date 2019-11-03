const React = require("react");
exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents
}) => {
  setPreBodyComponents([
    <script
      key="2"
      type="text/javascript"
      src="https://js.hs-scripts.com/6661655.js"
    />
  ]);
};
