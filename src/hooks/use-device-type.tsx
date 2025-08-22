import { useEffect, useState } from "react";

type DeviceType = "pc" | "tablet" | "mobile";

const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>("pc");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/tablet|ipad|android(?!.*mobile)/.test(userAgent)) {
      setDeviceType("tablet");
    } else if (/mobile|iphone|ipod|android.*mobile/.test(userAgent)) {
      setDeviceType("mobile");
    } else {
      setDeviceType("pc");
    }
  }, []); // 이펙트는 컴포넌트가 처음 마운트될 때 한 번만 실행됩니다.

  return deviceType;
};

export default useDeviceType;
