import { useState } from "react";

function useLayoutConfig() {
  const [dateFormat, setDateFormat] = useState("en");
  function chooseDateFormat(format) {
    switch (format) {
      case "en":
        setDateFormat("pt");
        console.debug("pt");
        break;
      case "pt":
        setDateFormat("en");
        console.debug("en");
        break;
    }
  };

  return {
    chooseDateFormat
  };
}

export default useLayoutConfig;