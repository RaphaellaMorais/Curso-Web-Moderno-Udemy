const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

/*contexto lexico é muito importante p uma função, quando ela for declarada,
embora vc esteja chamando ela em outro local, ou passando uma função como parametro p outra função,
sendo executada longe de onde ela foi definida, ela carrega cosigo o contexto no qual ela foi escrita,
 e o fato dela carregar cosigo esse contexto é que permite várias 
 coisas relacionadas a closures*/