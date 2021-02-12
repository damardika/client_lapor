import React, { Component } from "react";
import { Button } from "react-bootstrap";
import history from "./../history";
import "./Home.css";
import Chatbox from "../components/Chatbox";
export default class Home extends Component {
  render() {
    return (
      <div>
      <header>
        <div className="overlay" />
        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
          <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
            
              <h1 className="display-3">PENGADUAN</h1>
             
            </div>
          </div>
        </div>
      </header>
      <section className="my-5">
        <div className="container">
          <div className="row">
         
            <div className="col-md-8 mx-auto">
            
              
               <p> {""}Dibentuk untuk merealisasikan kebijakan “no wrong door policy”
                yang menjamin hak masyarakat agar pengaduan dari manapun dan
                jenis apapun akan disalurkan kepada penyelenggara pelayanan
                publik yang berwenang menanganinya.</p>{""}
                <p>
                {" "}
                bertujuan agar Penyelenggara dapat mengelola pengaduan dari
                masyarakat secara sederhana, cepat, tepat, tuntas, dan
                terkoordinasi dengan baik Penyelenggara memberikan akses untuk
                partisipasi masyarakat dalam menyampaikan pengaduan dan
                Meningkatkan kualitas pelayanan publik.{" "}
                
               
              </p>
              
              <Button
              variant="btn btn-success"
              onClick={() => history.push("/DataMasuk")}
              
            >
              CEK DATA MASUK
            </Button>
           
            </div>
            <div>
          <Chatbox /><img src="image/gamabar1.png" alt="gamabar1" height="270px" width="auto" padding="150px" align="right" />
        </div>
          </div>
        </div>
      </section>
      
    </div>
    
    );
  }
}
