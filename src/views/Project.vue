<template>
  <div class="box">
    <h1 class="display2">Projects</h1>

    <!-- 
    ---   TODO: Move these into a seperate vue template and load the templates instead.
    ---   TODO: Create modal vue template that opens to view images larger.
    -->

    <el-dialog :visible.sync="imageModalVisible">
      <el-image 
        :src="imageURL" 
        alt="Image not loaded" 
        fit="contain">
      </el-image>
    </el-dialog>

    <p class="heading">Web Design</p>
    <div v-for="(item, i) in web" :key="i + 'a'" class="--p-relative">
      <div class="timeline-line"></div>
      <div class="timeline-dot web-dot"></div>
      <span class="flex-sub-header">
        <h3 class="sub-heading">{{item.title}} </h3>
        <span style="margin: 0px 5px;"> - </span>
        <a :href="item.url">{{item.title}}</a>
      </span>
      <p class="text-left">{{item.description}}</p>
      <el-image 
        :src="item.thumbnail.fields.file.url + '?fm=jpg&fl=progressive'" 
        :alt="item.thumbnail.fields.title" class="web"
        fit="contain" 
        style="pointer: clicker"
        @click="
          imageModalVisible = true; 
          imageURL = item.thumbnail.fields.file.url"
        ></el-image>
      <br/>
    </div>

    <p class="heading">Graphic Design</p>
    <div v-for="(item, i) in design" :key="i + 'b'" class="--p-relative">
      <div class="timeline-line"></div>
      <div class="timeline-dot design-dot"></div>
      <h3 class="sub-heading">{{item.title}}</h3>
      <p class="text-left">{{item.description}}</p>
      <div class="flexImg"> 
        <el-image 
          v-for="(item, i) in item.images" 
          :key="i" 
          :src="item.fields.file.url + '?fm=jpg&fl=progressive'" 
          class="testImg"
           @click="
          imageModalVisible = true; 
          imageURL = item.fields.file.url"
          style="pointer: clicker"
          fit="contain"
        ></el-image>
      </div>
      <br/>
    </div>
    
    <p class="heading">Photography</p>
    <div v-for="(item, i) in photos" :key="i + 'c'" class="--p-relative">
      <div class="timeline-line"></div>
      <div class="timeline-dot"></div>
      <h3 class="sub-heading">{{item.title}}</h3>
      <p class="text-left">{{item.description}}</p>
      <div class="flexImg">
        <el-image 
          v-for="(item, i) in item.images" 
          :key="i" 
          :src="item.fields.file.url + '?fm=jpg&fl=progressive'" 
          class="testImg"
           @click="
          imageModalVisible = true; 
          imageURL = item.fields.file.url"
          style="pointer: clicker"
          fit="contain"
        ></el-image>
      </div>
    </div>
    <br/>
  </div>
</template>

<script>
import { type } from 'os';
export default {
  data() {
    return {
      design: undefined,
      web: undefined,
      photos: undefined,
      imageModalVisible: false,
      imageURL: ''
    }
  },
  beforeMount() {
    var r = this.$CLIENT.getEntries().then(function(response) {
      var r = response;
      var list = response.items.map(f => f.fields);
      var photos = list.filter(type => type.projectType == "Photography");
      var graphicDesign = list.filter(e => e.projectType == "Graphic Design");
      var web = list.filter(e => e.projectType == undefined);
      return {photos, graphicDesign, web}
    });

    r.then(r => this.$data.design = r.graphicDesign);
    r.then(r => this.$data.web = r.web);
    r.then(r => this.$data.photos = r.photos);
  }
}

</script>

<style lang="scss" scoped>
  .--p-relative {
    position: relative;
    padding: 5px;
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
    left: -20px;
    height: 85%;
    top: 28px;
    border: 2px solid #e4e4e4;
  }

  .timeline-dot {
    border-radius: 50%;
    position: absolute;
    border: 5px solid $--color-primary;
    left: -30px;
    top: 5px;
    height: 15px;
    width: 15px;
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





