<template>
  <div class="container">
    <div class="row">
      <h1 class="display-1 col-12">Projects</h1>
      <p class="col-12">
        Nothing amazing but its all mine and I am proud of them... most of the
        time...
      </p>
    </div>

    <button @click="log(getMqAsNumber())">Tester Button</button>

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
        <p class="text-left col-lg-7 col-12 align-middle">
          {{ item.description }}
        </p>
        <div class="col-lg-4 offset-1 col-11">
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
      <div class="row">
        <div
          class="img-column"
          v-for="(column, i) in getColumn(item.images, getMqAsNumber())"
          :key="i"
        >
          <img
            v-for="(image, i) in column"
            :key="i"
            :src="image.fields.file.url + '?fm=jpg&fl=progressive'"
            class
            @click="imageURL = image.fields.file.url"
            style="cursor: pointer"
            v-b-modal.imgModal
          />
        </div>
      </div>
    </rk-timeline>

    <p class="h2 heading">Photography</p>
    <rk-timeline
      v-for="(project, i) in photos"
      :key="i + 'photots'"
      :title="project.title"
      :description="project.description"
    >
      <div class="row">
        <div
          class="img-column"
          v-for="(column, i) in getColumn(project.images, getMqAsNumber())"
          :key="i"
        >
          <img
            v-for="(image, i) in column"
            :key="i"
            :src="image.fields.file.url + '?fm=jpg&fl=progressive'"
            class
            @click="imageURL = image.fields.file.url"
            style="cursor: pointer"
            v-b-modal.imgModal
          />
        </div>
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
  },
  methods: {
    //List we want to filter and the amount of columns we want
    getColumn: function(list, amount) {
      var returnArray = new Array(amount);
      for (let i = 0; i < amount; i++) {
        returnArray[i] = list.filter((item, index) => index % amount == i);
      }
      return returnArray;
    },
    /*     log: function(info) {
      // eslint-disable-next-line prettier/prettier
      console.log(info);
    }, */
    getMqAsNumber: function() {
      return this.$mq == "desktop" ? 4 : 2;
    }
  }
};
</script>

<style lang="scss" scoped>
.img-row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

.img-column {
  flex: 25%;
  max-width: 25%;
  padding: 0 10px;

  img {
    margin-top: 20px;
    vertical-align: middle;
    width: 100%;
  }
}

@media (max-width: 990px) {
  .img-column {
    flex: 50%;
    max-width: 50%;
  }
}

.--p-relative {
  position: relative;
  padding: 5px;
}

.img {
  height: auto;
  width: 100%;
}

.responsiveImg {
  max-width: 100%;
  object-fit: contain;
}

.text-left {
  text-align: left;
}

.flexImg {
  display: flex;
  flex: 20%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: baseline;
}
</style>
