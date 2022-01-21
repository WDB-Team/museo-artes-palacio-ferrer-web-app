import React, { Component } from 'react'

import './Reservaciones.css';

export default class Reservaciones extends Component {

    onSubmit =async (e)=>{
        e.preventDefault();

        console.log(document.querySelector("#Name"));
        await this.send(document.querySelector("#Name").value,
                        document.querySelector("#Correo").value,
                        document.querySelector("#Des").value,
                        document.querySelector("#Fecha").value,
                        document.querySelector("#Tel").value);
    }

    render() {
        return (
            <div className="Reservaciones">
                
                <form action="" onSubmit={this.onSubmit}>
                    <label htmlFor="Name">
                        <span>Nombre o institución que representa</span>
                        <input type="text" name="Name" id="Name" />
                    </label>
                    <label htmlFor="">
                        <span>Telefono</span>
                        <input type="tel" name="Tel" id="Tel"  />
                    </label>
                    <label htmlFor="">
                        <span>Correo</span>
                        <input type="email" name="Correo" id="Correo" />
                    </label>

                    <label htmlFor=""> 
                        <span>Fecha</span>
                        <input type="date" name="Fecha" id="Fecha" />
                    </label>

                    <label htmlFor=""> 
                        <span>Descripción</span>
                        <textarea name="Des" id="Des" cols="30" rows="10" ></textarea>
                    </label>
                    
                        <button >Enviar Información</button>
                </form>

            </div>
        )
    }

    componentDidMount(){
        document.querySelector("html").scrollTo(0,0);
    }


    async send(name,email,description,date,phone) {
        try {
    
            var data = {
                "full_name":name,
                "email":email,
                "description":description,
                "date":date,
                "phone_number":phone
            }
    
            var init ={
                    method: 'POST',
                    mode: 'cors', 
                    cache: 'no-cache', 
                    /*credentials: 'same-origin',*/
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    redirect: 'follow', 
                    referrerPolicy: 'no-referrer',
                    body: JSON.stringify(data)
            }
    
            var response = await fetch('https://museum-backend-cuba.herokuapp.com/bookings', init);
    
            if(response.ok) {
                var respuesta = await response.json();
                console.log(respuesta);
            }
        } catch (error) {
            console.log(error);
        }
    }
    

}
