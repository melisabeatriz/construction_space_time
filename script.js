const show = (elementId) => {
  document.getElementById(elementId).style.opacity = 1;
  document.getElementById(elementId).style.zIndex = 50;
};

const hide = (elementId) => {
  document.getElementById(elementId).style.opacity = 0;
  document.getElementById(elementId).style.zIndex = 0;
};

const addClassname = (elementId, className) => {
  document.getElementById(elementId).classList.add(className);
};

const removeClassname = (elementId, className) => {
  document.getElementById(elementId).classList.remove(className);
};

const showFilter1 = () => {
  show("hue-filter-1");
  show("blur-filter");
};

const hideFilter1 = () => {
  hide("hue-filter-1");
  hide("blur-filter");
};

const showFilter2 = () => {
  show("hue-filter-2");
  show("blur-filter");
};

const hideFilter2 = () => {
  hide("hue-filter-2");
  hide("blur-filter");
};

const showFilter3 = () => {
  show("hue-filter-3");
  show("blur-filter");
};

const hideFilter3 = () => {
  hide("hue-filter-3");
  hide("blur-filter");
};

const showFilter4 = () => {
  show("invert-filter");
  document.getElementById("prism-1").style.zIndex = 51;
};

const hideFilter4 = () => {
  hide("invert-filter");
  document.getElementById("prism-1").style.zIndex = 2;
};

const showFilter5 = () => {
  show("grayscale-filter");
  document.getElementById("roof-2").style.zIndex = 51;
};

const hideFilter5 = () => {
  hide("grayscale-filter");
  document.getElementById("roof-2").style.zIndex = 40;
};

const addFloor3Class = () => {
  addClassname("floor-3", "floor-3-hover");
};

const removeFloor3Class = () => {
  removeClassname("floor-3", "floor-3-hover");
};

const addMiniwall1Class = () => {
  addClassname("mini-wall-1", "wall-hover");
};

const removeMiniwall1Class = () => {
  removeClassname("mini-wall-1", "wall-hover");
};

const addWall3Class = () => {
  addClassname("wall-3", "wall-hover");
};

const removeWall3Class = () => {
  removeClassname("wall-3", "wall-hover");
};
