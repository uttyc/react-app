import React, { Component } from "react";
import Entries from "../Entries";
import { v4 as uuid } from "uuid";
import rp from "request-promise";
class Eksisozluk extends Component {
  state = {
    entries: [
      {
        id: uuid(),
        content: "Ekşi Content1",
      },
      {
        id: uuid(),
        content: "Ekşi Content2",
      },
      {
        id: uuid(),
        content: "Ekşi Content3",
      },
    ],
  };

  render() {
    //https://eksisozluk.com/ogrenildiginde-ufku-iki-katina-cikaran-seyler--2593151

    rp(
      "https://eksisozluk.com/ogrenildiginde-ufku-iki-katina-cikaran-seyler--2593151",
      {
        mode: 'no-cors',
      }
    )
      .then(function (html) {
        //success!
        console.log("success");
        console.log(html);
      })
      .catch(function (err) {
        //handle error
        console.log(err);
      });

    return (
      <div className="container" style={headerStyle}>
        <h2>Öğrenildiğinde ufku 2 katına çıkaran şeyler</h2>
        <Entries entries={this.state.entries} />
      </div>
    );
  }
}

const headerStyle = {
  textAlign: "center",
};
export default Eksisozluk;
