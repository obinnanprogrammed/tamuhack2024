/*
const componentContext = require.context('.', false, /\.js$/);
const Screens = {};

componentContext.keys().forEach((key) => {
  if(key === './index.js') return;
  const componentName = key.replace(/\.\/(.*?)\.js/, '$1');
  Screens[componentName] = componentContext(key).default;
});

export default Screens; */
export { default as Chat } from './Chat';
export { default as CreateAccount } from './CreateAccount';
export { default as Home } from './Homepage';
export { default as Login } from './Login';
export { default as Messages } from './Messages';
export { default as Profile } from './Profile';
export { default as RecCompany } from './RecCompany';
export { default as RecInternship } from './RecInternship';
export { default as RecSkill } from './RecSkill';
export { default as RecHome } from './RecHomepage';
export { default as Settings } from './Settings';
export { default as StudentORecruiter } from './StudentORecruiter';
export { default as StuExp } from './StuExp';
export { default as StuGrad } from './StuGrad';
export { default as StuInterests } from './StuInterests';
export { default as StuPic } from './StuPic';
export { default as StuSkill } from './StuSkill';
export { default as StuUni } from './StuUni';
export { default as Welcome } from './Welcome';