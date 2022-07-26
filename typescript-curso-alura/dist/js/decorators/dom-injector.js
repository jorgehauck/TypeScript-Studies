export function domInjector(seletor) {
    return function (target, propertKey) {
        console.log(`Modificando protype ${target.constructor.name} e adicionando getter para a propriedade ${propertKey}`);
        let elemento = null;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertKey, {
            get: getter
        });
    };
}
