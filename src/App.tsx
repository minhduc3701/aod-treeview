import React from "react";
import "./App.css";
import TreeView from "aod-dependencies/TreeView/TreeView";
import { INodes } from "aod-dependencies/TreeView/FinalTreeInterface";
import { Wrapper } from "./AppStyle";
import { Toggle } from "aod-dependencies/Toggle";
import { initializeIcons } from "aod-dependencies/@uifabric/icons";

initializeIcons();

function App() {
  const [darkMode, setDarkMode] = React.useState<string>("");
  // <TreeViewgetData>
  const getTreeView = async (value: INodes[]) => {
    console.log(value);
  };
  // </TreeViewgetData>

  const onChangeMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    }
    if (darkMode !== "dark") {
      setDarkMode("dark");
    }
  };

  const toppingOptions = [
    {
      label: "Pepperoni",
      id: "pepperoni-id",
      childNodes: [
        {
          label: "Spicy",
          id: "spicy-id",
          childNodes: [],
        },
        {
          label: "Regular",
          id: "regular-id",
          childNodes: [],
        },
      ],
    },
    {
      label: "Chicken",
      id: "chicken-id",
      childNodes: [
        {
          label: "Buffalo",
          id: "buffalo-id",
          childNodes: [
            {
              label: "Mild",
              id: "mild-id",
              childNodes: [],
            },
            {
              label: "Hot",
              id: "hot-id",
              isChecked: true,
              childNodes: [
                {
                  label: "Jalapeño",
                  id: "jalapeno-id",
                  childNodes: [],
                },
                {
                  label: "Cayenne",
                  id: "cayenne-id",
                  childNodes: [],
                },
              ],
            },
          ],
        },
        {
          label: "BBQ",
          id: "bbq-id",
          childNodes: [],
        },
      ],
    },
  ];
  return (
    <div className="App">
      <Wrapper theme={darkMode}>
        <div className="toggle-wrapper">
          <Toggle label="Dark mode" onChange={onChangeMode} />
        </div>
        <TreeView
          childNodes={toppingOptions}
          // <TreeViewDarkMode>
          darkMode={darkMode}
          // </TreeViewDarkMode>
          onGetChecked={getTreeView}
          // multilingual={LanguagesTree}
        />
      </Wrapper>
    </div>
  );
}

export default App;
