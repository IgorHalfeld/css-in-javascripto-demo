const StyleSheet = {
  sheet: null,
  init() {
    const styleEl = document.createElement('style');
    document.head.appendChild(styleEl);
    this.sheet = styleEl.sheet;
  },
  create(selector, styleString) {
    const rule = `${selector} { ${styleString} }`;
    const index = this.sheet.cssRules.length;
    this.sheet.insertRule(rule, index);
  },
};
