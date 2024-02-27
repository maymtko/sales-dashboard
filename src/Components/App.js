import React, { Component } from "react";
import "../Styles/App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Summary/Sidebar";
import Chart1 from "./Summary/Chart1";
import Chart2 from "./Summary/Chart2";
import Chart from "react-apexcharts";
import Header from "./Summary/Header";
import Navbar from "./Summary/Navbar";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar />
          <hr style={{ backgroundColor: "#FFFFFF", height: "1px" }}></hr>
          <Header />
        </div>
        <div>
          <Grid container > 
            <Grid item md={2} lg={2} sm={0}>
              <Sidebar />
            </Grid>
            <Grid item md={10} lg={10} sm={12}>
              <Chart1 />
            </Grid>
          </Grid>
        </div>
        <Grid container justify="center">
          <Grid item md={2} lg={2} sm={0}>
            <div className="d-flex wrapper">
              <div className="bg-white sidebar-wrapper">
                <div className="list-group list-group-flush my-3"></div>
              </div>
            </div>
          </Grid>
          <Grid item md={10} lg={10} sm={12}>
            <h3 className="chart2-title">How is your shipping performance?</h3>
            <Chart2 />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
