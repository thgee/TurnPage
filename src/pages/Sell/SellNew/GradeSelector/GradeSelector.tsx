import React, { useState } from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, ConfigProvider, Dropdown, message, Space } from "antd";
import { useTheme } from "styled-components";

const GradeSelector = ({ setGrade, grade }: IGradeSelectorProps) => {
  const theme = useTheme();

  const items: MenuProps["items"] = [
    {
      label: "최상",
      key: "최상",
    },
    {
      label: "상",
      key: "상",
    },
    {
      label: "중",
      key: "중",
    },
    {
      label: "하",
      key: "하",
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setGrade(e.key);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Dropdown: {
            colorText: theme.color.text.text2,
            fontFamily: theme.fontFamily.light,
            controlItemBgHover: theme.color.bg.bg3,
          },
          Button: {
            colorText:
              grade === "-" ? theme.color.text.text3 : theme.color.text.text2,
            fontFamily: theme.fontFamily.medium,
            colorBgContainer: theme.color.bg.bg2,
            defaultHoverBorderColor: theme.color.bg.bg3,
            defaultHoverColor: theme.color.btn.bg2,
            defaultActiveColor: theme.color.btn.bg2,
            defaultActiveBorderColor: theme.color.bg.bg3,
            defaultBorderColor: theme.color.btn.bg1,
          },
        },
      }}
    >
      <Dropdown menu={menuProps} trigger={["click"]}>
        <Button style={{ height: 36, borderRadius: 10 }}>
          <Space>
            {grade}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </ConfigProvider>
  );
};

export default GradeSelector;

interface IGradeSelectorProps {
  setGrade: React.Dispatch<React.SetStateAction<string>>;
  grade: string;
}
