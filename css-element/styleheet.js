const StyleSheet = {
  sheet: null,
  init() {
    const styleEl = document.createElement('style');
    document.head.appendChild(styleEl);
    this.sheet = styleEl.sheet;
  },
  create(selector, styleString) {
    const rule = `.${selector} { ${styleString} }`;
    const index = this.sheet.cssRules.length;
    this.sheet.insertRule(rule, index);
  },
};

function getRandomString() {
  const x = 2147483648;
  return (
    Math.floor(Math.random() * x).toString(36) +
    Math.abs(Math.floor(Math.random() * x) ^ Date.now()).toString(36)
  );
}

function CreateElement(name, { attrs, styles }, children) {
  const element = document.createElement(name);
  const classNameWithHash = `${attrs.class}-${getRandomString()}`;
  StyleSheet.init();

  element.classList.add(classNameWithHash);
  StyleSheet.create(classNameWithHash, styles);

  if (typeof children === 'string') {
    element.innerHTML = children;
  } else {
    if (Array.isArray(children)) {
      children.forEach(child => element.appendChild(child));
    } else {
      element.appendChild(children);
    }
  }
  
  document
    .getElementById('app')
    .appendChild(element);
  return element;
}

