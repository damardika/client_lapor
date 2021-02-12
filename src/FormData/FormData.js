import React, { Component } from "react";
import './FormData.css'

export default class Login extends Component {
    render() {
        return (
            <div className="data">
           
            <div>
            <form>
            <label>Masukan Nama</label>
            <input type="text" id="fname" name="firstname" placeholder="Masukan nama.." />
            <label>No telfon</label>
            <input type="text" id="Notelp" name="NoTelfon" placeholder="Masukan nomor telfon.." />
            
        
        
            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Masukan email" />
            <label>Jenis Kejadian</label>
            <input type="text" id="Kejadian" name="kejadian" placeholder="Masukan kejadian.." />

        
        
            <label>Subject Kejadian</label>
            <textarea id="subject" name="subject" placeholder="Masukan Kejadian.."></textarea>
            <input type="submit" value="Submit" />
            </form>
            </div>
            </div>
        );
    }
}
