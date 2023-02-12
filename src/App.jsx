import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setLoad((load) => {
        if (load > 98) {
          clearInterval(int);
        }
        return load + 1;
      });
    }, 30);

    return () => {
      clearInterval(int);
    };
  }, []);

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
  //scale es una función que se está utilizando para escalar un número dado de un rango de entrada a un rango de salida.
  //Es una función matemática simple que toma cinco argumentos: num, in_min, in_max, out_min y out_max.

  //num es el número que se desea escalar. in_min y in_max especifican el rango de entrada, es decir, el rango de valores que num puede tomar.
  //out_min y out_max especifican el rango de salida, es decir, el rango de valores que se desea que num tenga después de ser escalado.

  return (
    <div>
      <body>
        <section
          className="bg"
          style={{
            filter: `blur(${scale(load, 0, 100, 20, 0)}px)`,
            opacity: scale(load, 10, 0, 30, 0),
          }}
        />
        <div className="loading-text">{`${load}%`}</div>
      </body>
    </div>
  );
};

export default App;
