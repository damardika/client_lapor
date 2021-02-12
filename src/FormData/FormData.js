import React, { Component } from "react";
import './FormData.css'

export default class Login extends Component {
    render() {
        return (
            <form className="Data">
              

                <div className="form-group">
                    <label>Nama </label>
                    <input type="Nama" className="form-control" placeholder="Masukan Nama" />
                </div>
                <div className="form-group">
                    <label>No Telp </label>
                    <input type="No Telp" className="form-control" placeholder="Masukan Nomor" />
                </div>
                <div className="form-group">
                    <label>Email </label>
                    <input type="Email" className="form-control" placeholder="Masukan Email" />
                </div>
                <div className="form-group">
                    <label>Jenis Kejadian </label>
                    <input type="JenisKejadian" className="form-control" placeholder="Masukan Jenis Kejadian" />
                </div>
                <div>
                <label for="IsiData" className='textlabel'>Deskripsi Pelaporan : </label><br/>
               <textarea className="text-area-style" rows="4" cols="50"> </textarea>
               
                </div>
          
                
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
               
               
               
            </form>
        );
    }
}
