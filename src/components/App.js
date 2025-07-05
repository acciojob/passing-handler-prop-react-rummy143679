import React, { useState } from "react";
import '../styles/App.css';
import Selection from './Selection';
import ColourSelector from './ColourSelector';

const colourConfig = [{
  key: 'blue',
  label: 'Blue',
  className: 'btn-blue',
  background: 'rgb(34, 193, 195)'
}, {
  key: 'orange',
  label: 'Orange',
  className: 'btn-orange',
  background: 'rgb(221, 112, 18)'
}, {
  key: 'green',
  label: 'Green',
  className: 'btn-green',
  background: 'rgb(44, 209, 88)'
}
]

const title = 'Select the gradient and then the Box to change the color';

const App = () => {
  let [nextBackground, selectNextBackground] = useState({ background: "" })
  const applyColor = (updateSelectionStyle) => {
    updateSelectionStyle(nextBackground)
  }

  return (
    <div id="master">
      <h5 className="heading">{title}</h5>
      <div className="colour-selector">
        {colourConfig.map((config, index) => (
          <ColourSelector key={config.key} config={config} selectNextBackground={selectNextBackground} />
        ))}
      </div>

      <div className='holder' id="children-wrapper">
        {
          ["selection1", "selection2", "selection3"].map((item, key) => (
            <Selection key={key} applyColor={applyColor} boxTitle={item} nextBackground={nextBackground} />
          ))
        }
      </div>
    </div >
  )
}


export default App;
