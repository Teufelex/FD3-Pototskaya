const SECTION = "Parfum";
const ITEMS_ARR = [
    {
     name: "Туалетная вода Antonio Banderas Blue Seduction For Men (100мл)", 
     price: 82.09, 
     url: "https://discont.by/wa-data/public/shop/products/21/64/336421/images/60719/60719.650@2x.jpg", 
     count: 288,
     code: 1,
    }, 
    {
     name: "Туалетная вода Jean Jacques Vivier 10th Avenue Nice Blue (100мл)", 
     price: 28.10, 
     url: "https://cdn21vek.by/img/galleries/675/891/preview_b/10thavenueniceblue_jean_jacques_vivier_5bdf0ddb86f08.jpeg", 
     count: 356,
     code: 2,
    }, 
    {
     name: "Туалетная вода Antonio Banderas Blue Seduction For Women (80мл)", 
     price: 81.98, 
     url: "https://cdn21vek.by/img/galleries/577/174/preview/blueseduction_antonio_banderas_04_5af984d822c30.jpeg", 
     count: 504,
     code: 3,
    }, 
    {
     name: "Туалетная вода C-Thru Luminous Emerald (50мл)", 
     price: 27.61, 
     url: "https://cdn21vek.by/img/galleries/6173/647/preview/luminousemerald_cthru_5f69a111df4c9.jpeg", 
     count: 163,
     code: 4,
    }, 
    {
     name: "Туалетная вода Gian Marco Venturi Woman (30мл)", 
     price: 41.49, 
     url: "https://cdn21vek.by/img/galleries/567/51/preview/woman_gian_marco_venturi_02_5aec6d8c064b3.jpeg", 
     count: 354,
     code: 5,
    }, 
    {
     name: "Парфюмерная вода Pergolese Rue Pergolese (100мл)", 
     price: 70.00, 
     url: "https://cdn21vek.by/img/galleries/6361/696/preview/ruepergolese_pergolese_01_601900ae60d21.jpeg", 
     count: 458,
     code: 6,
    }, 
    {
     name: "Парфюмерная вода Avon Incandessence (50мл)", 
     price: 31.90, 
     url: "https://cdn21vek.by/img/galleries/6297/478/preview/incandessence_avon_01_5fd32e21a685c.jpeg", 
     count: 233,
     code: 7,
    }, 
    {
     name: "Туалетная вода Calvin Klein CK IN2U Her (100мл)", 
     price: 112.70, 
     url: "https://cdn21vek.by/img/galleries/567/691/preview/ckin2u_calvin_klein_5aca647875864.jpeg", 
     count: 412,
     code: 8,
    }, 
    {
     name: "Туалетная вода Antonio Banderas The Secret Temptation (100мл)", 
     price: 82.79, 
     url: "https://cdn21vek.by/img/galleries/577/180/preview/thesecrettemptation_antonio_banderas_5af9c687a6578.jpeg", 
     count: 287,
     code: 9,
    }, 
    {
     name: "Парфюмерная вода Cindy C Ca Va For Women (100мл)", 
     price: 69.99, 
     url: "https://cdn21vek.by/img/galleries/1013/682/preview/cavaforwomen_cindy_crawford_5d166b65eb9cf.jpeg", 
     count: 514,
     code: 10,
    }, 
    {
     name: "Туалетная вода Gian Marco Venturi Woman (100мл)", 
     price: 111.46, 
     url: "https://cdn21vek.by/img/galleries/567/53/preview/woman_gian_marco_venturi_5ace13dae1847.jpeg", 
     count: 169,
     code: 11,
    }
];

ReactDOM.render(
    React.createElement(ISShop, {items: ITEMS_ARR, section: SECTION}), 
    document.getElementById("container")
);