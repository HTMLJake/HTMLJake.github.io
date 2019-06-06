<template>
  <div class="box">
    <span class="display2">Resume</span>

    <div>
      <h2 class="heading">Work History</h2>

      <el-timeline class="left">
        <el-timeline-item
          v-for="(job, index) in work"
          :key="index"
          :timestamp="job.dates"
          :color="'#05c9ff'"
          :placement="'top'"
          :size="'large'"
        >
          <h3>{{ job.jobTitle }}</h3>
          <h4>{{ job.location }}</h4>
          <p>{{ job.description }}</p>
        </el-timeline-item>
      </el-timeline>

      <h2 class="heading">Education</h2>

      <el-timeline class="left">
        <el-timeline-item
          v-for="(job, index) in work"
          :key="index"
          :timestamp="job.dates"
          :color="'#05c9ff'"
          :placement="'top'"
          :size="'large'"
        >
          <h3>{{ job.jobTitle }}</h3>
          <h4>{{ job.location }}</h4>
          <p>{{ job.description }}</p>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.left {
  text-align: left;
}

.el-timeline-item__tail {
  border-color: $--color-primary !important;
}

.centered {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h3,
h4 {
  margin: 0px;
}
</style>

<script>
export default {
  data() {
    return {
      work: [
        {
          jobTitle: "Bing Query Data Labeler",
          dates: "June 2016 - April 2017",
          location: "Bellevue, WA",
          description: "This is when I used to work at Microsoft"
        },
        {
          jobTitle: "Bing Query Data Labeler",
          dates: "June 2016 - April 2017",
          location: "Bellevue, WA",
          description: "This is when I used to work at Microsoft"
        },
        {
          jobTitle: "Bing Query Data Labeler",
          dates: "June 2016 - April 2017",
          location: "Bellevue, WA",
          description: "This is when I used to work at Microsoft"
        },
        {
          jobTitle: "Bing Query Data Labeler",
          dates: "June 2016 - April 2017",
          location: "Bellevue, WA",
          description: "This is when I used to work at Microsoft"
        }
      ]
    };
  },
};
</script>
