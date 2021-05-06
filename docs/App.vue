<template lang="pug">
  #app
    az-navbar
      az-navbar-item
        az-icon(name="hamburger")
      .divider(style="flex: 0 0 auto; display:flex;")
      az-navbar-heading Microsoft Azure
      az-navbar-item(right)
      az-navbar-item(right)
        az-icon(name="terminal")
      az-navbar-item(right)
        az-icon(name="filter")
      az-navbar-item(right)
        az-icon(name="notification")
      az-navbar-item(right)
        az-icon(name="setting")
      az-navbar-item(right)
        az-icon(name="question")
      az-navbar-item(right)
        az-icon(name="smile")
    az-container
      az-breadcrumb
        az-breadcrumb-section(link) 홈
        az-breadcrumb-divider(icon="chevron")
        az-breadcrumb-section 생성
      az-heading(h3) Azure 서비스
      az-input(placeholder="기본 Input")
    az-symbol-container
</template>

<script>
export default {
  name: 'App',
  methods: {
    pad(num, size) {
      const s = `000000000${num}`;
      return s.substr(s.length - size);
    },
  },
};
</script>

<style lang="scss">
@font-face {
    font-family: SegoeUI;
    src:
        local("Segoe UI Light"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff2) format("woff2"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff) format("woff"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.ttf) format("truetype");
    font-weight: 100;
}

@font-face {
    font-family: SegoeUI;
    src:
        local("Segoe UI Semilight"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff2) format("woff2"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff) format("woff"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.ttf) format("truetype");
    font-weight: 200;
}

@font-face {
    font-family: SegoeUI;
    src:
        local("Segoe UI"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2) format("woff2"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff) format("woff"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf) format("truetype");
    font-weight: 400;
}

@font-face {
    font-family: SegoeUI;
    src:
        local("Segoe UI Bold"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff2) format("woff2"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff) format("woff"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf) format("truetype");
    font-weight: 700;
}

@font-face {
    font-family: SegoeUI;
    src:
        local("Segoe UI Semibold"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff2) format("woff2"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff) format("woff"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.ttf) format("truetype");
    font-weight: 600;
}

html, body {
  height: 100%;
}

body {
  font-family: SegoeUI,'Malgun Gothic',-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  font-weight: 400;
  margin: 0;
  padding: 0;
}

input, textarea {
  font-family: SegoeUI,'Malgun Gothic',-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
}

a:hover {
  color: #004578 !important;
  text-decoration: underline;
  cursor: pointer;
}
</style>
