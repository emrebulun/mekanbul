var mongoose = require("mongoose");

var saatSema = new mongoose.Schema(
    {
    gunler: { type: String, required: true },
    acilis: { type: String, required: false },
    kapanis: String,
    kapali: { type: Boolean, required: false },
    }
);

var yorumSema = new mongoose.Schema(
    {
    yorumYapan: { type: String, required: true },
    puan: { type: Number, default: 0, min: 0, max: 5 },
    yerumMetni: { type: String, required: true },
    tarih: { type: Date, default: Date.now },
    }
);

var mekanSema = new mongoose.Schema(
  {
    ad: { type: String, required: true },
    adres: String,
    puan: { type: Number, default: 0, min: 0, max: 5 },
    imkanlar: [String],
    kordinatlar: { type: [Number], index: "2dsphere" },
    saatler: [saatSema],
    yorumlar: [yorumSema],
  }
);

mongoose.model("mekan",mekanSema,"mekanlar") 