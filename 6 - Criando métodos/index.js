let robo = {
    nucleos: 4,
    driver: "Chrome",
    agentes: ["itajai", "balneário", "navegantes"],
    ativo: true
}
console.log(robo.nucleos)
console.log(robo.driver)
console.log(robo.agentes[1])
console.log(robo.ativo)

if (robo.ativo == true) {
    console.log("o robo será executado em produção")
}
