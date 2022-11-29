<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader/> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent==='active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent==='manage-goals'"></manage-goals> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>

    <!--  <badge-list></badge-list>
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></UserInfo>
    <CourseGoal #default="slotProps">
        <h2>{{slotProps.item}}</h2>
        <p>{{slotProps['anotherProp']}}</p>
    </CourseGoal> -->
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
// import UserInfo from "./components/UserInfo.vue";
// import BadgeList from "./components/BadgeList.vue";
// import CourseGoal from "./components/CourseGoal.vue";
import ActiveGoals from "./components/ActiveGoal.vue";
import ManageGoals from "./components/ManageGoal.vue";

export default {
  components: {
    "the-header": TheHeader,
    // UserInfo,
    // BadgeList,
    // CourseGoal,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
