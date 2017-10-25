export default function flattenColors(palette) {
  return  Object.keys(palette).reduce((a, key) => {
    const value = palette[key];
    if (Array.isArray(value)) {
      a[key] = value[5];
      value.forEach((val, i) => {
        a[key + i] = val;
      });
    } else {
      a[key] = value;
    }
    return a;
  }, {});
}
