import React, { useState } from "react";

export function Home() {
	const [activo, setActivo] = useState("");

	const cambiarColor = item => {
		setActivo(item.target.className);
	};

	return (
		<div className="text-center mt-5">
			<div className="semaforo">
				<div
					className={
						"luzRoja" + (activo === "luzRoja" ? "Activa" : "")
					}
					onClick={cambiarColor}></div>
				<div
					className={
						"luzNaranja" + (activo === "luzNaranja" ? "Activa" : "")
					}
					onClick={cambiarColor}></div>
				<div
					className={
						"luzVerde" + (activo === "luzVerde" ? "Activa" : "")
					}
					onClick={cambiarColor}></div>
			</div>
		</div>
	);
}

//create your first component
/*const TrafficLight = (props) => {
    const[active, setActive] = useState("");

    const cambiarColor = (evento) => {
        setActive[evento.target.className];
    }

	return (
		<div className="text-center mt-5">
			<div className="semaforo">
				<div className={"luzRoja" + (active ==="luzRoja" ? "-active" : "")} onClick={cambiarColor}></div>
				<div className={"luzNaranja" + (active === "luzNaranja" ? "-active" : "")} onClick={cambiarColor}></div>
				<div className={"luzVerde" + (active === "luzVerde" ? "-active" : "")} onClick={cambiarColor}></div>
			</div>
		</div>
	);
}

/*export function Home() {
    
    function cambiarColor(evento) {
        if (evento.target.className === "luzRoja") {
            evento.target.className = "luzRojaActive";
        } else if (evento.target.className === "luzRojaActive") {
            evento.target.className = "luzRoja";
            //cambiando la luz naranja.
        } else if (evento.target.className === "luzNaranja") {
            evento.target.className = "luzNaranjaActive";
        } else if (evento.target.className === "luzNaranjaActive") {
            evento.target.className = "luzNaranja";
            //cambiando la luz verde.
        } else if (evento.target.className === "luzVerde") {
            evento.target.className = "luzVerdeActive";
        } else if (evento.target.className === "luzNaranjaActive") {
            evento.target.className = "luzVerde";
        }
    }

    return (
        <div className="text-center mt-5">
            <div className="semaforo">
                <div className="luzRoja" onClick={cambiarColor}></div>
                <div className="luzNaranja" onClick={cambiarColor}></div>
                <div className="luzVerde" onClick={cambiarColor}></div>
            </div>
        </div>
    );
} */
