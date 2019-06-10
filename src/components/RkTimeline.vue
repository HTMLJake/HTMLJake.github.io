<template>
  <div class="row position-relative timeline my-2 text-left">
    <div class="timeline-tail"></div>
    <div class="timeline-head"></div>

    <div class="col-auto offset-1">
      <p v-if="title" class="h5 font-weight-bold mb-0">{{ title }}</p>
      <p v-if="subHeading" class="sub-heading text-primary font-weight-bold">
        {{ subHeading }}
      </p>
      <a
        v-if="link"
        class="sub-heading text-primary font-weight-bold"
        :href="link"
      >
        {{ title }}
      </a>
      <p v-if="description" class="description">{{ description }}</p>
      <slot></slot>
    </div>

    <!-- <div class="row">
        <slot class="offset-1 col-11"></slot>
      </div> -->
  </div>
</template>

<script>
export default {
  name: "RynTimeline",
  props: {
    subHeading: String,
    title: String,
    description: String,
    link: String
  }
};
</script>

<style lang="scss" scoped>
.timeline {
  max-width: 85%;
}

.timeline-tail {
  position: absolute;
  left: 15px;
  height: 95%;
  min-height: 50px;
  top: 5px;
  border: 2px solid #e4e4e4;
}

.timeline-head {
  border-radius: 50%;
  position: absolute;
  background: $primary-color;
  border: 5px solid white;
  left: 5px;
  top: 5px;
  height: 25px;
  width: 25px;
}

.description {
  white-space: pre-wrap;
}

.sub-heading {
  margin: 0px;
}
</style>
