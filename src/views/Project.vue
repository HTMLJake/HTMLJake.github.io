<template>
  <div class="container">
    <div class="row">
      <h1 class="display-1 col-12">Projects</h1>
    </div>

    <!--
    ---   TODO: Move these into a seperate vue template and load the templates instead.
    ---   TODO: Create modal vue template that opens to view images larger. **TRANSFER ALL TO BOOTSTAP
    -->

    <b-modal id="imgModal" size="lg" centered hide-footer>
      <b-img :src="imageURL" alt="Image not loaded" fluid></b-img>
    </b-modal>

    <p class="h2 heading">Web Design</p>
    <rk-timeline
      v-for="(item, i) in web"
      :key="i + 'web'"
      :title="item.title"
      :link="item.url"
    >
      <div class="row">
        <p class="offset-1 text-left col-lg-6 col-10 align-middle">
          {{ item.description }}
        </p>
        <div class="col-lg-4 offset-1 col-8">
          <img
            :src="item.thumbnail.fields.file.url + '?fm=jpg&fl=progressive'"
            :alt="item.thumbnail.fields.title"
            class="img"
            style="cursor: pointer"
            v-b-modal.imgModal
            @click="imageURL = item.thumbnail.fields.file.url"
          />
        </div>
        <br />
      </div>
    </rk-timeline>

    <p class="h2 heading">Graphic Design</p>
    <rk-timeline
      v-for="(item, i) in design"
      :key="i + 'design'"
      :title="item.title"
      :description="item.description"
    >
      <div class="flexImg">
        <img
          v-for="(item, i) in item.images"
          :key="i"
          :src="item.fields.file.url + '?fm=jpg&fl=progressive'"
          class="testImg"
          @click="imageURL = item.fields.file.url"
          style="cursor: pointer"
          v-b-modal.imgModal
        />
      </div>
    </rk-timeline>

    <p class="h2 heading">Photography</p>
    <rk-timeline
      v-for="(item, i) in photos"
      :key="i + 'photots'"
      :title="item.title"
      :description="item.description"
    >
      <div class="flexImg">
        <img
          v-for="(item, i) in item.images"
          :key="i"
          :src="item.fields.file.url + '?fm=jpg&fl=progressive'"
          class="testImg"
          @click="imageURL = item.fields.file.url"
          style="cursor: pointer"
          v-b-modal.imgModal
        />
      </div>
    </rk-timeline>
  </div>
</template>

<script>
import RkTimeline from "@/components/RkTimeline.vue";
export default {
  components: {
    RkTimeline
  },
  data() {
    return {
      design: undefined,
      web: undefined,
      photos: undefined,
      imageModalVisible: false,
      imageURL: ""
    };
  },
  beforeMount() {
    var r = this.$CLIENT.getEntries().then(function(response) {
      var list = response.items.map(f => f.fields);
      var photos = list.filter(type => type.projectType == "Photography");
      var graphicDesign = list.filter(e => e.projectType == "Graphic Design");
      var web = list.filter(e => e.projectType == undefined);
      return { photos, graphicDesign, web };
    });

    r.then(r => (this.$data.design = r.graphicDesign));
    r.then(r => (this.$data.web = r.web));
    r.then(r => (this.$data.photos = r.photos));
  }
};
</script>

<style lang="scss" scoped>
.--p-relative {
  position: relative;
  padding: 5px;
}

.img {
  height: auto;
  width: 100%;
}

.testImg {
  max-height: 150px;
  max-width: 150px;
  padding: 5px;
}

.flex-sub-header {
  display: flex;
  align-items: center;
}

.text-left {
  text-align: left;
}

.flexImg {
  display: flex;
  flex: 33%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: baseline;
}

.timeline-line {
  position: absolute;
  left: 10px;
  height: 105%;
  top: 35px;
  border: 2px solid #e4e4e4;
}

.timeline-dot {
  border-radius: 50%;
  position: absolute;
  background: $primary-color;
  border: 5px solid white;
  top: 35px;
  height: 25px;
  width: 25px;
}

.web-dot {
  border-color: #e22626;
}

.design-dot {
  border-color: #048f22;
}

.sub-heading {
  text-align: left;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0px;
}

.web {
  height: 250px;
}

br {
  height: 18px;
  width: 100%;
}
</style>
