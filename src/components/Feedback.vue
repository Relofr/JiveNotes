<template>
  <div>
    <iframe
      width="100%"
      height="100%"
      src="https://forms.office.com/Pages/ResponsePage.aspx?id=sOXEhKAmrE22hjAddnE1aWZ9a0te-IJNlQeIy70O-txUOFc1U1QzQTJWWDRLNEJHU0NGNUZQSFQ0Ny4u&embed=true"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      style="border: none; width:100%; height:100vh"
      allowfullscreen
      webkitallowfullscreen
      mozallowfullscreen
      msallowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  data: () => ({
    test: ""
  }),
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style>
.form-content,
.form-content-container {
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  background: red !important;
}
</style>
