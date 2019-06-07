<template>
  <div class="row timeline my-2 text-left">
    <div class="timeline-tail"></div>
    <div class="timeline-head"></div>

    <div class="col-auto offset-1">
      <p v-if="date" class="date">{{ date }}</p>
      <p v-if="title" class="h5 font-weight-bold">{{ title }}</p>
      <p v-if="description">{{ description }}</p>
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
    date: String,
    title: String,
    description: String
  }
};
</script>

<style lang="scss" scoped>
.timeline {
  position: relative;
  max-width: 850px;
}

.timeline-tail {
  position: absolute;
  left: 35px;
  height: 100%;
  min-height: 50px;
  top: px;
  border: 2px solid #e4e4e4;
}

.timeline-head {
  border-radius: 50%;
  position: absolute;
  background: $primary-color;
  border: 5px solid white;
  left: 25px;
  top: 0px;
  height: 25px;
  width: 25px;
}

.date {
  margin: 0px;
  font-size: 0.8rem;
}
</style>
