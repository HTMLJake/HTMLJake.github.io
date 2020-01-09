<template>
  <div class="container">
    <div class="row">
      <h1 class="display-1 col-12">Projects</h1>
    </div>

    <!--
    ---   TODO: Move these into a separate vue template and load the templates instead.
    ---   TODO: Create modal vue template that opens to view images larger. **TRANSFER ALL TO BOOTSTRAP
    -->

    <b-modal id="imgModal" size="lg" centered hide-footer>
      <b-img :src="imageURL" alt="Image not loaded" fluid></b-img>
    </b-modal>

    <div
      v-for="(item, i) in web"
      :key="i + 'web'"
      :title="item.title"
      :link="item.url"
    >
    <div class="spacer"></div>
      <p class="h3"> {{item.title}} </p>
      <div class="display-flex flex-row">
        <p class="text-left align-middle">
          {{ item.description }}
        </p>
          <img
            :src="item.thumbnail && item.thumbnail.fields.file.url + '?fm=jpg&fl=progressive'"
            :alt="item.thumbnail && item.thumbnail.fields.title"
            class="img"
            @click="imageURL = console.log(this)"
          />
      </div>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      all: undefined,
      design: undefined,
      web: undefined,
      photos: undefined,
      imageModalVisible: false,
      imageURL: ""
    };
  },
  beforeMount() {
    var r = this.$CLIENT.getEntries().then((response) => {
      var list = response.items.map(f => f.fields);
      var photos = list.filter(type => type.projectType == "Photography");
      var graphicDesign = list.filter(type => type.projectType == "Graphic Design");
      return { photos, graphicDesign };
    });

    this.$CLIENT.getEntries({'content_type': 'webProjects'})
      .then((entries)=> {
        this.$data.web = entries.items.map((entry) => entry.fields)
      })

    r.then(r => (this.$data.all = r.all))
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
    height: 55px;
    vertical-align: middle;
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
