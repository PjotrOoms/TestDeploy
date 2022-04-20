import { createRouter, createWebHistory } from "vue-router";
import store from "../store/userStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/feed",
      name: "feed",
      component: () => import("../views/Feed.vue"),
    },
    {
      path: "/patients",
      name: "patients",
      component: () => import("../views/Patients.vue"),
    },
    {
      path: "/excersiseHistory/:id",
      name: "excersiseResults",
      component: () => import("../views/ExerciseHistory.vue"),
    },
    {
      path: "/patient/:id",
      name: "patient",
      component: () => import("../views/Patient.vue"),
    },
    {
      path: "/newPatient",
      name: "patientCreator",
      component: () => import("../views/PatientCreator.vue"),
    },
    {
      path: "/exerciseResults",
      name: "exerciseResults",
      component: () => import("../views/ExerciseResults.vue"),
    },
  ],
});

router.beforeEach(async (to) => {
  if (to.name !== "Register" && !store.getters.isLogedIn)
    return { name: "Register" };
});

export default router;
