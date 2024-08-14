// src/apiSlice.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import firestoreBaseQuery from "../../firestoreBaseQuery.ts";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../main.tsx";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: firestoreBaseQuery,
  endpoints: (builder) => ({
    getUser: builder.query<any, string>({
      query: (userId) => ({ url: `users/${userId}`, method: "GET" }),
      async transformResponse(response: any) {
        if (response.referrals) {
          const referralPromises = response.referrals.map(async (ref: any) => {
            const docSnap = await getDoc(ref);
            return docSnap.data();
          });

          response.referrals = await Promise.all(referralPromises);
        }
        return response;
      },
    }),

    getUserOnSnapshot: builder.query<any, string>({
      queryFn: (userId) => {
        return new Promise((resolve) => {
          const userDocRef = doc(db, "users", userId.toString());

          const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
              resolve({ data: docSnapshot.data() });
            } else {
              resolve({ error: { message: "User not found" } });
            }
          });

          // Возвращаем функцию отписки, чтобы можно было отписаться от обновлений при необходимости
          return () => unsubscribe();
        });
      },
    }),

    getLeaderboard: builder.query<any, void>({
      queryFn: async () => {
        try {
          const leaderboardRef = collection(db, "leaderboard");
          const leaderboardSnapshot = await getDocs(leaderboardRef);
          const leaderboardData = leaderboardSnapshot.docs.map((doc) =>
            doc.data(),
          );
          return { data: leaderboardData };
        } catch (error) {
          return { error };
        }
      },
    }),

    getTasks: builder.query<any, void>({
      queryFn: async () => {
        try {
          const tasksRef = collection(db, "tasks");
          const tasksSnapshot = await getDocs(tasksRef);
          const tasksData = tasksSnapshot.docs.map((doc) => doc.data());
          return { data: tasksData };
        } catch (error) {
          return { error };
        }
      },
    }),

    addUser: builder.mutation<any, Partial<any>>({
      query: (user) => ({
        url: "users",
        method: "POST",
        data: user,
      }),
    }),
    updateUser: builder.mutation<any, { userId: string; data: Partial<any> }>({
      query: ({ userId, data }) => ({
        url: `users/${userId}`,
        method: "PUT",
        data,
      }),
    }),
    // Add other endpoints as needed
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  useGetUserQuery,
  useGetUserOnSnapshotQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useGetLeaderboardQuery,
  useGetTasksQuery,
} = apiSlice;
