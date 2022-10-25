import { useEffect, useState } from "react";
import DuaBottomBar from "./DuaBottomBar";
import DuaTopbar from "./DuaTopbar";
import { useGlobalContext } from "../../../controller/Context/appContext";

const DuaCard = ({ dua }) => {
  const [animation, setAnimation] = useState(false);

  const {
    language,
    showArabic,
    showTranslation,
    showTransliteration,
    showRefference,
    translationFontSize,
    arabicFontSize,
    arabicFont,
    arabicScript,
  } = useGlobalContext();

  console.log(`Dua Trans Font ${translationFontSize}`);

  // const showArabic = JSON.parse(localStorage.getItem("showArabic"));
  // const isTranslation = JSON.parse(localStorage.getItem("showTranslation"));
  // const showTransliteration = JSON.parse(localStorage.getItem("showTransliteration"));
  // const showRefference = JSON.parse(localStorage.getItem("showRefference"));

  useEffect(
    () => {
      return () => {
        setAnimation(true);
      };
    },
    [dua[0].dua_id]
    // showArabic,
    // isTranslation,
    // showTransliteration,
    // showRefference
  );

  return (
    <div id={`${dua[0].dua_id}`} className={`bg-red-100 rounded-2lg my-5 dark:bg-[#223449]`}>
      <div className="p-6">
        <DuaTopbar duaName={language === "en" ? dua[0].dua_name_en : dua[0].dua_name_bn} duaId={dua[0].dua_id} />
        <div className={`flex flex-col justify-start items-start  ${animation && "animate-fade-in-up"}`}>
          {dua.map(function (item, index) {
            return (
              <div className="w-full">
                {/* Body */}
                {language === "en"
                  ? dua[index].top_en
                  : dua[index].top_en !== null && (
                      <p className=" my-5 text-title text-justify font-inter font-normal">
                        {language === "en" ? dua[index].top_en : dua[index].top_bn}
                      </p>
                    )}
                {/* Arabic */}

                {dua[index].dua_arabic !== null && showArabic && (
                  <p
                    className=" my-5 text-title text-right leading-loose  text-3xl"
                    style={{ fontSize: `${arabicFontSize}px`, fontFamily: `${arabicFont}` }}>
                    {dua[index].dua_arabic}
                  </p>
                )}

                {/* transliteration_en */}

                {language === "en"
                  ? dua[index].transliteration_en !== null &&
                    showTransliteration && (
                      <p className={`my-5 text-title text-justify font-normal`} style={{ fontFamily: `${arabicScript}` }}>
                        {dua[index].transliteration_en}
                      </p>
                    )
                  : dua[index].transliteration_bn !== null &&
                    showTransliteration && (
                      <p className={`my-5 text-title text-justify font-normal`} style={{ fontFamily: `${arabicScript}` }}>
                        {dua[index].transliteration_bn}
                      </p>
                    )}

                {/* translation_en */}

                {language === "en"
                  ? dua[index].translation_en !== null &&
                    showTranslation && (
                      <p className=" my-5 text-title text-justify font-inter font-normal" style={{ fontSize: `${translationFontSize}px` }}>
                        {dua[index].translation_en}
                      </p>
                    )
                  : dua[index].translation_bn !== null &&
                    showTranslation && (
                      <p className=" my-5 text-title text-justify font-inter font-normal" style={{ fontSize: `${translationFontSize}px` }}>
                        {dua[index].translation_bn}
                      </p>
                    )}

                {/* Dua Bottom Section */}
                {dua[index].bottom_en !== null && (
                  <p className=" my-5 text-title text-justify font-inter font-normal">
                    {language === "en" ? dua[index].bottom_en : dua[index].bottom_bn}
                  </p>
                )}

                {dua.length > 1 && index !== dua.length - 1 && <div className="bg-devider h-[1px] dark:bg-[#2F4B5F]" />}
              </div>
            );
          })}

          {showRefference && (
            <div>
              <p className="mt-2 ">Reference</p>
              <div className="mt-1 text-sm text-title  w-full text-left">
                {language === "en" ? dua[dua.length - 1].refference_en : dua[dua.length - 1].refference_bn}
              </div>
            </div>
          )}
        </div>
      </div>
      <DuaBottomBar audio={dua[0].audio} />
    </div>
  );
};

export default DuaCard;
