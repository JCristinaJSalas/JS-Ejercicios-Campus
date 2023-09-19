const mundo = ( pais, idioma, continente) => {
  paises = ["Colombia", "Ecuador", "Nicaragua"];

  let esTercerMundista = paises.includes(pais);

  esTercerMundista ? console.log(`El pais ${pais} del continente de ${continente} habla ${idioma} y es Tercer Mundista`) : console.log(`El pais ${pais} del continente de ${continente} habla ${idioma} y no es Tercer Mundista`)
  
  
};

mundo("Ecuador", "Espanol", "America");
