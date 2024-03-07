
function converteValor(num: number, valorI: string, valorF:string): any {
  if (!isNaN(num)) {
    if (valorI === valorF) {
      console.log(`${ num }${ valorI } é igual a ${ num }${ valorF }`);
      return;
    };

// CONVERSÃO PARA METROS
    let metros: number =  0;
    switch(valorI){
      case 'm':
        metros = num;
        break;
      case 'km':
        metros = num * 1000;
        break;
      case 'cm':
        metros = num / 100;
        break;
      case 'mm':
        metros = num / 1000;
        break;
    };

    let resultado
    switch(valorF) {
      case 'm':
        resultado = metros;
        break;
      case 'km':
        resultado = metros / 1000;
        break;
      case 'cm':
        resultado = metros  * 100;
        break;
      case 'mm':
        resultado = metros * 1000;
        break;
    }
    console.log(`${ num }${ valorI } equivale a ${ resultado }${ valorF }`)
  } else {
    console.log(`${ num } não é uma valor valido`);
  };
};

converteValor(10, 'km', 'm');