import React from "react";
import { theme } from "antd";

const ContentWrapper = ({ current, children }) => {
  const { token } = theme.useToken();
  const contentStyle = {
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 30,
    marginBottom: 30,
  };
  return <div style={contentStyle}>{children}</div>;
};

export default ContentWrapper;
