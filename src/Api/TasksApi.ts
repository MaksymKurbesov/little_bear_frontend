import {
  collection,
  doc,
  getDoc,
  increment,
  updateDoc,
} from "firebase/firestore";
import { db } from "../main.tsx";

class TasksApi {
  private userCollection = collection(db, "users");

  async completeUserTask(userId: number, taskId: string, reward: number) {
    const userRef = doc(this.userCollection, userId.toString());

    try {
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();

        const userTasks = userData.tasks || [];

        // Ищем задачу в массиве
        const existingTaskIndex = userTasks.findIndex(
          (task: any) => task.id === taskId,
        );

        if (existingTaskIndex > -1) {
          // Обновляем существующую задачу
          userTasks[existingTaskIndex].completed = true;
          userTasks[existingTaskIndex].completionDate =
            new Date().toISOString();
        } else {
          // Добавляем новую задачу в массив
          userTasks.push({
            id: taskId,
            completed: true,
            completionDate: new Date().toISOString(),
          });
        }

        // Обновляем документ пользователя в Firestore
        await updateDoc(userRef, {
          tasks: userTasks,
          points: increment(reward),
        });

        console.log("Task completed successfully.");
      } else {
        console.error("User document not found.");
      }
    } catch (error) {
      console.error("Error completing task:", error);
    }
  }
}

export default TasksApi;
