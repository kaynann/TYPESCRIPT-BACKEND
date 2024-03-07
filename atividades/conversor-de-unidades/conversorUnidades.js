function converteValor(num, valorI, valorF) {
    if (!isNaN(num)) {
        if (valorI === valorF) {
            console.log("".concat(num).concat(valorI, " \u00E9 igual a ").concat(num).concat(valorF));
            return;
        }
        ;
        // CONVERSÃO PARA METROS
        var metros = 0;
        switch (valorI) {
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
        }
        ;
        var resultado = void 0;
        switch (valorF) {
            case 'm':
                resultado = metros;
                break;
            case 'km':
                resultado = metros / 1000;
                break;
            case 'cm':
                resultado = metros * 100;
                break;
            case 'mm':
                resultado = metros * 1000;
                break;
        }
        console.log("".concat(num).concat(valorI, " equivale a ").concat(resultado).concat(valorF));
    }
    else {
        console.log("".concat(num, " n\u00E3o \u00E9 uma valor valido"));
    }
    ;
}
;
converteValor(10, 'km', 'm');
