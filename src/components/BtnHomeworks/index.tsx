/** Component BtnHomeworks
 * Componente para mostar las tareas por cada modulo
 * ---------------------------------------------------------------------------------------
 * [date]       [author]        [task]          [description]
 * 28/09/22     Jose Garcia                     File cration
 */

 import React from "react";
 import "./styles.css"

interface btnHomeworksProps {
    homeworks?: any[]; 
}

const BtnHomework = ({ homeworks }: btnHomeworksProps) => {
    return(
        <div className="card-demo cardDemo">
            <div className="card cardStyles" >
                <div className="card__header">
                    <h3 style={{ color: "#FFF", textAlign: "center"}}>Tareas</h3>
                </div>
                <div className="card__body">
                    <a href="" target="_blank">
                        <button className="button button--primary button--block" style={{marginBottom: "10px"}}>Tarea 1</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BtnHomework;