import * as elements from './elements';
import * as utils from './utils';

const components = {
  ...elements,
  ...utils,
};

const AzureUIVue = (Vue) => {
  Object.values(components).forEach((Comp) => Vue.component(Comp.name, Comp));
};

console.log('AzureUIVue Loaded');

export default AzureUIVue;
export * from './elements';
export * from './utils';
