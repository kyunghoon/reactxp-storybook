import RX = require("reactxp");

const CenterDecorator = (storyFn: any) => (
  <RX.View
    style={{
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    {storyFn()}
  </RX.View>
);

export default CenterDecorator;
