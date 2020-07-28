//displayRules is used by react-sizes. These rules are props passed through to components wrapped in the Sizes HOC and govern mounting components based on display size

const displayRules = ({ width }) => ({
  isMobile: width < 450,
});

export default displayRules;
