<template>
  <div class="container">
    <span class="display-1">Resume</span>

    <div>
      <h2 class="heading">Work History</h2>

      <rk-timeline
        v-for="(job, i) in work"
        :key="i"
        :title="job.jobTitle"
        :subHeading="job.dates"
        :description="job.description"
      >
        <ul>
          <li v-for="(item, i) in job.list" :key="i">
            {{ item }}
          </li>
        </ul>
      </rk-timeline>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left {
  text-align: left;
}

.el-timeline-item__tail {
  border-color: $primary-color !important;
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
import RkTimeline from "@/components/RkTimeline.vue";
export default {
  components: {
    RkTimeline
  },

  data() {
    return {
      work: [
        {
          jobTitle: "Front-End Developer",
          dates: "October 2018 - Present",
          location: "Remote",
          description:
            "Worked on a chrome extension to help people on online dating sites to have more open communication. Created a complete redesign of the app with a focus on user experience to improve growth in users.",
          list: [
            "Increased understanding of working in a full stack environment with meteor and blaze.js.",
            "Improved visual design skills by 30% to create richer and more inviting experience."
          ]
        },
        {
          jobTitle: "Freelance Web and Graphic Designer",
          dates: "April 2018 - October 2018",
          location: "Remote",
          description:
            "Created websites, logos, and graphics. Improved upon my skills using software like Adobe Illustrator and Affinity Designer in creating vector art and designs.",
          list: [
            "Achieved greater skills in designing concepts for web projects with substantial increases in design quality.",
            "Created a sharp personal graphical styling to improve illustration aesthetics and graphic design prowess."
          ]
        },
        {
          jobTitle: "Bing Query Data Labeler",
          dates: "June 2016 - April 2017",
          location: "Bellevue, WA",
          description:
            "Analyzed media queries for relavancy against a given query to improve user experience with the Bing search engine. Also performed various other tasks of relevancy judging with different guidelines.",
          list: [
            "Crafted a system to reduce repeated stress on wrist to help elevate productivity.",
            "Improved 20% in website searching for information and navigation around a web browser."
          ]
        },
        {
          jobTitle: "Battery Boy",
          dates: "June 2015 - August 2015",
          location: "Everett, WA",
          description: `DISCLAIMER: This is not meant to be serious, the rest just feel kinda stiff and I felt like I needed to add some personality to this page. \n\nI worked at Boeing under Dell as a contractor for Apex Systems replacing batteries on the factory floor. Things didn't work out well for me or my health.`,
          list: [
            "Learned how to walk a cart around large planes in an efficient route, but not too efficient because I only have one task for that hour.",
            "Made friends with people in the neighboring hardware department because we both didn't really have much else to do but wait for permision to do more work.",
            "Occationally have more work then employees because its dead most of the time and get stuck replacing laptop power supplies in 3 large cabnets on wheels at once, thanks morning shift..."
          ]
        }
      ]
    };
  }
};
</script>
