import { settingsActions } from "./reducerActions";

const initialSettings = {
  language: "en",
  showArabic: true,
  showTranslation: true,
  showTransliteration: false,
  showRefference: false,
  translationFontSize: 16,
  arabicFontSize: 15,
  arabicScript: "KGFQ",
  arabicFont: "KGFQ",
};

const settingsReducer = (state, action) => {
  switch (action.type) {
    case settingsActions.CHANGE_LANGUAGE: {
      return { ...state, language: action.payload };
    }
    case settingsActions.TOGGLE_ARABIC: {
      return { ...state, showArabic: action.payload };
    }
    case settingsActions.TOGGLE_TRANSLATION: {
      return { ...state, showTranslation: action.payload };
    }
    case settingsActions.TOGGLE_TRANSLITERATION: {
      return { ...state, showTransliteration: action.payload };
    }
    case settingsActions.TOGGLE_REFFERENCE: {
      return { ...state, showRefference: action.payload };
    }
    case settingsActions.CHANGE_TRANSLATION_FONT_SIZE: {
      return { ...state, translationFontSize: action.payload };
    }
    case settingsActions.CHANGE_ARABIC_FONT_SIZE: {
      return { ...state, arabicFontSize: action.payload };
    }
    case settingsActions.CHANGE_ARABIC_SCRIPT: {
      return { ...state, arabicScript: action.payload };
    }
    case settingsActions.CHANGE_ARABIC_FONT: {
      return { ...state, arabicFont: action.payload };
    }
  }
};

export { initialSettings, settingsReducer, settingsActions };
