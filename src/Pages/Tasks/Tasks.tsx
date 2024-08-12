import styles from "./Tasks.module.css";
import { useTranslation } from "react-i18next";

const Tasks = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["tasks"]}>
      <h1 className={"page-title"}>{t("Tasks.Title")}</h1>
      <p className={styles["subtitle"]}>{t("Tasks.Subtitle")}</p>
      <p className={styles["no-task"]}>{t("Tasks.NoTasks")}</p>
    </div>
  );
};

export default Tasks;
