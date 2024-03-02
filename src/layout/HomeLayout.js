import {
    Button,
    ConfigProvider,
    Typography,
    theme,
    Layout,
    Menu,
    Badge,
} from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { LuLayoutDashboard, LuScrollText } from "react-icons/lu";
import { PiUsers } from "react-icons/pi";
import { GrUserAdmin } from "react-icons/gr";
import { RiAdminLine } from "react-icons/ri";
import { SiAwsorganizations } from "react-icons/si";
import { TbTags } from "react-icons/tb";
import { MdOutlineAssessment } from "react-icons/md";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const HomeLayout = ({ children }) => {
    const [primary, setPrimary] = useState("#FFFFFF");
    const [collapsed, setCollapsed] = useState(false);

    const [relatedColors, setRelatedColors] = useState({
        mainColor: primary,
        lighter: generateRelatedColorsWithTextContrast(primary).lighter,
        darker: generateRelatedColorsWithTextContrast(primary).darker,
        textContrastColor:
            generateRelatedColorsWithTextContrast(primary).textContrastColor,
        complementary: generateRelatedColorsWithTextContrast(primary).complementary,
    });

    const navigate = useNavigate();
    function generateRelatedColorsWithTextContrast(baseColor) {
        const hexToRgb = (hex) => {
            const bigint = parseInt(hex.slice(1), 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
            return [r, g, b];
        };

        const rgbToHex = (rgb) => {
            return `#${((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2])
                .toString(16)
                .slice(1)}`;
        };

        const adjustColorBrightness = (color, factor) => {
            const rgb = hexToRgb(color);
            const adjustedRgb = rgb.map((channel) =>
                Math.min(Math.max(Math.round(channel * factor), 0), 255)
            );
            return rgbToHex(adjustedRgb);
        };

        const calculateContrastRatio = (color1, color2) => {
            const luminance1 = calculateLuminance(hexToRgb(color1));
            const luminance2 = calculateLuminance(hexToRgb(color2));
            const contrast =
                (Math.max(luminance1, luminance2) + 0.05) /
                (Math.min(luminance1, luminance2) + 0.05);
            return contrast;
        };

        const calculateLuminance = (rgb) => {
            const [r, g, b] = rgb.map((channel) => {
                const channelValue = channel / 255;
                return channelValue <= 0.03928
                    ? channelValue / 12.92
                    : Math.pow((channelValue + 0.055) / 1.055, 2.4);
            });
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        };

        const baseRgb = hexToRgb(baseColor);

        const mainColor = baseColor;
        const lighter = adjustColorBrightness(mainColor, 1.2);
        const containerBackground = adjustColorBrightness(mainColor, 7.5);
        const darker = adjustColorBrightness(mainColor, 0.7);

        const baseLuminance = calculateLuminance(baseRgb);
        let textContrastColor;
        let linkHoverColor;
        let logoPrim;
        let logoSec;

        if (baseLuminance > 0.2) {
            textContrastColor = "black";
            logoPrim = "black";
            logoSec = "#0866C5";
            linkHoverColor = "#7E7E7E";
        } else if (baseLuminance < 0.2) {
            textContrastColor = "white";
            linkHoverColor = "#ABABAB";
            logoPrim = "white";
            logoSec = "#aeb0f5";
        } else {
            textContrastColor =
                calculateContrastRatio(mainColor, lighter) >
                    calculateContrastRatio(mainColor, darker)
                    ? lighter
                    : darker;
        }

        const complementary = rgbToHex([
            225 - baseRgb[0],
            225 - baseRgb[1],
            225 - baseRgb[2],
        ]);

        return {
            mainColor,
            lighter,
            containerBackground,
            darker,
            textContrastColor,
            complementary,
            linkHoverColor,
            logoPrim,
            logoSec,
        };
    }

    useEffect(() => {
        setRelatedColors(generateRelatedColorsWithTextContrast(primary));
    }, [primary]);


    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: primary,
                    colorBgBase: primary === "#FFFFFF" ? "#ebebf2" : relatedColors.darker,
                    colorBgContainer: primary,
                    colorLink: primary === "#FFFFFF" ? "black" : "white",
                    colorLinkHover: relatedColors.linkHoverColor,
                    colorText: primary === "#FFFFFF" ? "black" : "white",
                    colorSuccessText: "red",
                    colorTextLabel: primary === "#FFFFFF" ? "black" : "white",
                    colorTextBase: primary === "#FFFFFF" ? "black" : "white",
                    colorTextSecondary: primary === "#FFFFFF" ? "black" : "white",
                    colorTextHeading: primary === "#FFFFFF" ? "black" : "white",
                    colorTextTertiary: primary === "#FFFFFF" ? "black" : "white",
                    colorTextDescription: primary === "#FFFFFF" ? "black" : "white",
                    colorIcon: primary === "#FFFFFF" ? "black" : "white",
                    colorIconHover: relatedColors.textContrastColor,
                    colorPrimaryHover: primary === "#FFFFFF" ? "#58ad89" : "white",
                },
            }}
        >

            <Layout>
                <Header className="flex items-center justify-between w-full h-16" style={{ padding: "0 40px 0 0", background: primary }}>
                    <div className="flex items-center justify-center p-4">
                        <img src="../assets/logo.png" alt="smart hire" width={160} height={50} />
                    </div>
                </Header>
                <Content
                    style={{
                        padding: 24,
                        minHeight: "90.1vh",
                        background: primary === "#FFFFFF" ? "#ebebf2" : relatedColors.lighter,
                    }}
                >
                    <div className="">{children}</div>
                </Content>
            </Layout>














            {/* <div>
              <div
                  style={{ backgroundColor: primary }}
                  className="fixed top-0 z-50 flex items-center justify-between w-full shadow-lg"
              >
                  <div className="flex items-center justify-between w-full p-6 px-10">
                      <div onClick={() => navigate("/")} className="w-32 cursor-pointer">
                          <Logo
                              primary={relatedColors.logoPrim}
                              secondary={relatedColors.logoSec}
                          />
                      </div>
                      <div className="flex items-center">
                          <Button size="large"type="link">Home</Button>
                          <Dropdown
                              menu={{
                                  items,
                              }}
                              dropdownRender={(menu) => (
                                  <div
                                      style={{
                                          backgroundColor: token.colorBgElevated,
                                          borderRadius: "0 0 6px 6px",
                                          boxShadow: token.boxShadowSecondary,
                                          marginTop: 36,
                                          // width: "100%",
                                      }}
                                  >
                                      {menu}
                                  </div>
                              )}
                          >
                              <a onClick={(e) => e.preventDefault()}>
                                  <Space>
                                      <Button size="large"type="link">Categories</Button>
                                  </Space>
                              </a>
                          </Dropdown>
                          <Button size="large"type="link">Contact</Button>
                      </div>
                      <div className="flex items-center">
                          <Text
                              style={{ color: relatedColors.textContrastColor }}
                              className="mr-2"
                          >
                              Theme:
                          </Text>
                          <ColorPicker
                              value={primary}
                              onChangeComplete={(color) => setPrimary(color.toHexString())}
                          />
                      </div>
                  </div>
              </div>
              <div className="pt-3 mt-24">{children}</div>
          </div> */}
        </ConfigProvider >
    );
};

export default HomeLayout;