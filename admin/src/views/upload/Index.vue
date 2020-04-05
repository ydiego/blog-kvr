<template>
  <div>
    <input
      type="file"
      @change="getFile($event)"
      name="file"
      multiple
      id="file"
    />
    <button @click="upload">上传</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      files: []
    };
  },
  methods: {
    getFile(event) {
      var file = event.target.files;
      this.files = [];
      for (var i = 0; i < file.length; i++) {
        //    上传类型判断
        var imgName = file[i].name;
        var idx = imgName.lastIndexOf(".");
        if (idx != -1) {
          var ext = imgName.substr(idx + 1).toUpperCase();
          ext = ext.toLowerCase();
          this.files.push(file[i]);
        }
      }
      console.log(this.files);
    },
    upload() {
      if (this.files.length === 0) {
        this.$message({
          type: "info",
          message: "请选择要上传的文件"
        });
        return;
      }

      var formData = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        formData.append("file", this.files[i]);
      }
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      this.$http.post("/api/uploadfile", formData, config).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
