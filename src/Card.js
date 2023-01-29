import React from "react";
// import code from './assets/code1.jpg'
// import code2 from './assets/code2.jpg'



function Card(n) {
    return (
        <>
            

            <div className="col-auto">

                <div className="card-flex">
                    <div className="card-design desc" style={{backgroundColor:n.j[0]}}>
                        <img src={n.img} />
                        <h2>{n.title}</h2>
                        <p>{n.desc}</p>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Card