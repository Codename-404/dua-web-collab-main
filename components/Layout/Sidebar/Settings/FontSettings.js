import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DoprDown from "../../../Utils/DropDown";
import { ScriptDropdown } from "../../../../dataStore/feature/GlobalDataSlicer";
import { useGlobalContext } from "../../../../controller/Context/appContext";

const FontSettings = () => {
  const scriptDrop = useSelector((state) => state.globalData.arabicScriptDrop);
  const dispatch = useDispatch();
  const { arabicFontSize, translationFontSize, arabicScript, arabicFont, applySettings, settingsActions } = useGlobalContext();

  console.log(`Setting Trans Font ${translationFontSize}`);

  const MAX = 40;
  // const [translationFontSize, setTranslationFontSize] = useState(16);
  // const [arabicScript, setSelectedScript] = useState("KGFQ");
  // const [arabicFont, setSelectedFont] = useState("KGFQ");
  const [fontDropdown, setFontDropdown] = useState(false);
  // const [arabicFontSize, setArabicFont] = useState(15);
  const getBackgroundSize = (font) => {
    return {
      backgroundSize: `${(font * 100) / MAX}% 100%`,
    };
  };
  return (
    <div className="px-4 pb-1  animate-scale-down">
      <div className="flex flex-col items-start">
        <p className="text-title mt-4 mb-3 text-sm ">Translation Font Size</p>

        <div className="mb-2 gap-3 w-full grid grid-cols-[86%,10%] place-items-center">
          <input
            type="range"
            min="0"
            max={MAX}
            onChange={(e) => applySettings(settingsActions.CHANGE_TRANSLATION_FONT_SIZE, e.target.value)}
            style={getBackgroundSize(translationFontSize)}
            value={translationFontSize}
          />
          <div>{translationFontSize}</div>
        </div>
      </div>

      <div className="flex items-start flex-col">
        <div className="mt-4 w-[96%]">
          <p className="text-title text-sm  mb-3 ">Select Arabic Script</p>
          <DoprDown selected={arabicScript} dropDown={scriptDrop} setDropDown={() => dispatch(ScriptDropdown(!scriptDrop))}>
            <div className="cursor-pointer font-Inter text-[15px] flex flex-col px-2">
              <div
                className="hover:bg-[#F8F8F9] px-4 py-2 "
                onClick={(e) => applySettings(settingsActions.CHANGE_ARABIC_SCRIPT, e.target.innerText, dispatch(ScriptDropdown(!scriptDrop)))}>
                KGFQ
              </div>
              <div
                className="hover:bg-[#F8F8F9] px-4 py-2 "
                onClick={(e) => applySettings(settingsActions.CHANGE_ARABIC_SCRIPT, e.target.innerText, dispatch(ScriptDropdown(!scriptDrop)))}>
                Noor e Huda
              </div>
              <div
                className="hover:bg-[#F8F8F9] px-4 py-2 "
                onClick={(e) => applySettings(settingsActions.CHANGE_ARABIC_SCRIPT, e.target.innerText, dispatch(ScriptDropdown(!scriptDrop)))}>
                Noor E Hedayet
              </div>
            </div>
          </DoprDown>
        </div>
        <div className="mt-4 w-[96%]">
          <p className="text-title text-sm  mb-3">Arabic Font</p>
          <DoprDown selected={arabicFont} dropDown={fontDropdown} setDropDown={setFontDropdown}>
            <div className="cursor-pointer font-Inter text-[15px] flex flex-col px-2">
              <div
                className="hover:bg-[#F8F8F9] px-4 py-2 "
                onClick={(e) => applySettings(settingsActions.CHANGE_ARABIC_FONT, e.target.innerText, setFontDropdown(!fontDropdown))}>
                KGFQ
              </div>
              <div
                className="hover:bg-[#F8F8F9] px-4 py-2 "
                onClick={(e) => applySettings(settingsActions.CHANGE_ARABIC_FONT, e.target.innerText, setFontDropdown(!fontDropdown))}>
                Noor e Huda
              </div>
              <div
                className="hover:bg-[#F8F8F9] px-4 py-2 "
                onClick={(e) => applySettings(settingsActions.CHANGE_ARABIC_FONT, e.target.innerText, setFontDropdown(!fontDropdown))}>
                Noor E Hedayet
              </div>
            </div>
          </DoprDown>
        </div>
      </div>

      <div className="my-4 flex items-start flex-col">
        <p className="text-title text-sm  mb-3">Arabic Font Size</p>
        <div className="mb-2 gap-3 w-full grid grid-cols-[86%,10%] place-items-center">
          <input
            className=""
            type="range"
            min="0"
            max={MAX}
            onChange={(e) => applySettings(settingsActions.CHANGE_ARABIC_FONT_SIZE, e.target.value)}
            style={getBackgroundSize(arabicFontSize)}
            value={arabicFontSize}
          />
          <div>{arabicFontSize}</div>
        </div>
      </div>
    </div>
  );
};

export default FontSettings;
