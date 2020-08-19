import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow.js";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
        channel="Parduccinward"
        verified
        subs="998K"
        noOfVideos={432}
        description="In this Channel we talk about 'NDEAH' y 'AEA MONGOL' entre otras cosas. Estamos a punto de llegar a 1M de SUBS. asi que suscribete breo"
      />
      <hr />
      <VideoRow
        views="2.3M"
        subs="998K"
        description="Denegado papu"
        timestamp="6 days ago"
        channel="Parduccinward"
        title="La Cumbia de Smash EPISODIO #1"
        image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
      />
      <VideoRow
        views="1.8M"
        subs="998K"
        description="Tan gosu"
        timestamp="5 days ago"
        channel="Parduccinward"
        title="La Cumbia de Smash EPISODIO #2"
        image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
      />
      <VideoRow
        views="1.1M"
        subs="998K"
        description="Toy ASAO"
        timestamp="4 days ago"
        channel="Parduccinward"
        title="La Cumbia de Smash EPISODIO #3"
        image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
      />
      <VideoRow
        views="2.1M"
        subs="998K"
        description="Salgo con coquita?"
        timestamp="4 days ago"
        channel="Parduccinward"
        title="La Cumbia de Smash EPISODIO #4"
        image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
      />
      <VideoRow
        views="917K"
        subs="998K"
        description="Parate Conchatumae!"
        timestamp="3 days ago"
        channel="Parduccinward"
        title="La Cumbia de Smash EPISODIO #5"
        image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
      />
      <VideoRow
        views="653K"
        subs="998K"
        description="Gracias por las moneditas"
        timestamp="2 days ago"
        channel="Parduccinward"
        title="La Cumbia de Smash EPISODIO #6"
        image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
      />
    </div>
  );
}

export default SearchPage;
