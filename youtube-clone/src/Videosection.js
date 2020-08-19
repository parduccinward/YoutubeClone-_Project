import React from "react";
import "./Videosection.css";
import VideoCard from "./VideoCard.js";
function Videosection() {
  return (
    <div className="videoSection">
      <h2>Recommended</h2>
      <div className="videoSection__videos">
        <VideoCard
          title="La Cumbia de Smash EPISODIO #1"
          views="2.3M Views"
          timestamp="6 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #2"
          views="2.1M Views"
          timestamp="6 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #3"
          views="2.9M Views"
          timestamp="5 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #4"
          views="5.5M Views"
          timestamp="5 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #5"
          views="3.7M Views"
          timestamp="5 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #6"
          views="4.2M Views"
          timestamp="4 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #7"
          views="2.1M Views"
          timestamp="4 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #8"
          views="1.9M Views"
          timestamp="3 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #9"
          views="1.1M Views"
          timestamp="1 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #1"
          views="2.3M Views"
          timestamp="6 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #2"
          views="2.1M Views"
          timestamp="6 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #3"
          views="2.9M Views"
          timestamp="5 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #4"
          views="5.5M Views"
          timestamp="5 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #5"
          views="3.7M Views"
          timestamp="5 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #6"
          views="4.2M Views"
          timestamp="4 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #7"
          views="2.1M Views"
          timestamp="4 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #8"
          views="1.9M Views"
          timestamp="3 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #9"
          views="1.1M Views"
          timestamp="1 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #1"
          views="2.3M Views"
          timestamp="6 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #2"
          views="2.1M Views"
          timestamp="6 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #3"
          views="2.9M Views"
          timestamp="5 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #4"
          views="5.5M Views"
          timestamp="5 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #5"
          views="3.7M Views"
          timestamp="5 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #6"
          views="4.2M Views"
          timestamp="4 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #7"
          views="2.1M Views"
          timestamp="4 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #8"
          views="1.9M Views"
          timestamp="3 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
        <VideoCard
          title="La Cumbia de Smash EPISODIO #9"
          views="1.1M Views"
          timestamp="1 days ago"
          channelImage="https://lh3.googleusercontent.com/-WyD7x6Mw7C8/XY0aCQlDotI/AAAAAAAAADU/aoExpDI86sYkAYxinY200Z7IF4OqefD4ACEwYBhgLKtMDAL1Ocqwb6SZM5Iovbfdm5R7z_YVI81S0GxCHohrEVDtb4GJSCbXRFAykxRZYiP6ZPRLTQOsyfX1sfN7S5CQkLKK5M5xJF_pAJOpfWN984jNUicNu7yZpWFtAJfeJ-K19zuGOVy_1--1pciwWAQlndozOu7Bw8WqmRx_eLJRpd2wToSvtHXWCxJo7ZJTNaf3zKPGOxIv-FPlQAuhdaITGyklJJ5_kNz-rRDLoOwmHv7D_dfxxoWBhLoTYZscUOfjEsRPeLC9aOJ4slIsXACZ5dZLJH46u-E3IfQTdWJDBF-a378YUwo9qCDbplm6TB1nTOcZ6gZ-_f85Hz_UcWFCfHheD5zpjlVzDuNXQk4wIKCqvnKn1YrUGiGC8OtfnzRJto51BSweu122O7UJ7XGpWB6ZgblNtXo4OYQ1d3HbYkOnBpY9bx4o9mGGTwp4YbFj0lALBEHEa1BoEYmXVgCV1BQoOrha_0b6GaLEQDwV51vGhllwqfkXBN-UKGGS-w_7uDSt7LDPBdpvQ540CC6xrBoiNjv3ApOcecoJXtY2SeaFzQnoKHMHRxNxF7Ssv_TgcPnSaZmCUtqegevxOQw_YpxJEchL8mfocRjhOWN3YZuVyqXUwo6Xw-QU/"
          channel="Parduccinward"
          image="https://i.ibb.co/5h5CBXn/Thumbnail-V119.jpg"
        />
      </div>
    </div>
  );
}

export default Videosection;
