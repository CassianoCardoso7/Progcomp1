function calcular(){
   let soma = 0
   let acaoSocial = document.getElementById("acaoSocial").value
   soma = soma + Number(acaoSocial)
   let homenagem = document.getElementById("homenagem").value
   soma = soma + Number(homenagem)
   let leite = document.getElementById("leite").value
   soma = soma + Number(2 * Number(leite))
   let kit = Number(document.getElementById("kit").value)
   let pontoskit = 0
   let equipe = document.getElementById("equipe").value
   if(equipe) == ("laranja"){
      if(Number(kit) >= 97){
         pontosKit = 5000 + ((kit - 97) * 30)
      }
      else if (kit >= 78){
         pontosKit = 4000 + ((kit - 78) * 30)
      }
      else if (kit >= 49) {
         pontosKit = 2500 + ((kit - 19) *30)
      }
      else if (kit >=19) {
         pontoskit = 1000 + ((kit - 19)* 30)
      }
   }
   soma = soma + Number(30 * Number(kit))
   let suplemento = document.getElementById("suplemento").value
   soma = soma + Number(15 * Number(suplemento))
   document.getElementById("soma").innerHTML = soma.toFixed(2)

}
