import styles from "./Tasks.module.css";
import { useTranslation } from "react-i18next";
import {
  useGetTasksQuery,
  useGetUserQuery,
} from "../../Stores/slices/apiSlice.ts";
import LoadSpinning from "../../SharedUI/LoadSpinning/LoadSpinning.tsx";
import { useAppState } from "../../Stores/AppStateContext.tsx";
import CoinIcon from "../../images/default-coin-small.webp";
import TelegramIcon from "../../images/telegram-icon.webp";
import XIcon from "../../images/x-icon.webp";
import X2Icon from "../../images/x2-icon.webp";
import { userApi } from "../../main.tsx";

const ICON_MAP: { [key: string]: string } = {
  telegram: TelegramIcon,
  instagram: X2Icon,
  twitter: XIcon,
};

const Tasks = () => {
  const { t } = useTranslation();
  const { state } = useAppState();

  const { data, refetch } = useGetUserQuery(state.user?.id, {
    skip: !state.user?.id,
  });

  const { data: allTasks, isLoading } = useGetTasksQuery(state.user?.id, {
    skip: !state.user?.id,
  });

  if (isLoading) {
    return (
      <div className={"suspense"}>
        <LoadSpinning />
      </div>
    );
  }

  return (
    <div className={styles["tasks"]}>
      <h1 className={"page-title"}>{t("Tasks.Title")}</h1>
      <p className={styles["subtitle"]}>{t("Tasks.Subtitle")}</p>
      {allTasks.map((task) => {
        const filteredTask =
          data.tasks &&
          data.tasks.filter((userTask) => userTask.id === task.id)[0];

        return (
          <button
            onClick={() => {
              window.open(task.target, "_blank");
              setTimeout(() => {
                userApi
                  .completeUserTask(state.user.id, task.id, task.reward)
                  .then(() => {
                    refetch();
                  });
              }, 4000);
            }}
            disabled={filteredTask ? filteredTask.completed : false}
            key={task.id}
            className={styles["task"]}
          >
            <img src={ICON_MAP[task.type]} alt={""} height={40} />
            <div>
              <p>{task.description}</p>
              {data.tasks && filteredTask?.completed ? (
                <div className={styles["completed"]}>Выполнено!</div>
              ) : (
                <div className={styles["reward"]}>
                  <img src={CoinIcon} alt={""} width={20} height={20} />
                  <p>+{task.reward.toLocaleString()}</p>
                </div>
              )}
            </div>
          </button>
        );
      })}
      {/*<p className={styles["no-task"]}>{t("Tasks.NoTasks")}</p>*/}
    </div>
  );
};

export default Tasks;
