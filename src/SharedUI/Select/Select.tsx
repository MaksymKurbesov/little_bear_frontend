import styles from "./Select.module.css";
import ArrowIcon from "../../icons/arrow.svg";
import { useState } from "react";
import RuFlag from "../../icons/ru.svg";
import EnFlag from "../../icons/en.svg";
import { useTranslation } from "react-i18next";
import { userApi } from "../../main.tsx";
import { useAppState } from "../../Stores/AppStateContext.tsx";
import { getSelectOptionByLanguage } from "../../utils/helpers.ts";

const options = [
  {
    value: "ru",
    label: (
      <div className={styles["language-option"]}>
        <img src={RuFlag} width={20} alt={""} />
        Русский
      </div>
    ),
  },
  {
    value: "en",
    label: (
      <div className={styles["language-option"]}>
        <img src={EnFlag} width={20} alt={""} />
        English
      </div>
    ),
  },
];

const Select = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useAppState();
  const languageOption = state.user.settings
    ? state.user.settings.language
    : "en";
  const [selectedOption, setSelectedOption] = useState(
    getSelectOptionByLanguage(languageOption, options),
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = async (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    i18n.changeLanguage(option.value);
    console.log("last version");
    await userApi.updateUser(state.user.id.toString(), {
      settings: {
        language: option.value,
      },
    });
  };

  return (
    <div className={styles["select"]} onClick={toggleDropdown}>
      <p>{t("Settings.Select language")}</p>
      <span>{selectedOption && selectedOption.label}</span>
      <img
        className={styles["arrow-icon"]}
        src={ArrowIcon}
        alt={""}
        width={25}
      />
      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.option}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
