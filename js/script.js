function verificar() {
    let radsex = document.getElementsByName("radsex")
    let cc = document.getElementById("cc").value
    let id = document.getElementById("id").value
    let res = document.getElementById("res")

   

    if (cc=='') {
        res.innerHTML= ("Faltam dados!")
    }

    else if (radsex[0].checked) {

        formulaH = (0.567*cc)+ (0.101*id)- 31.8
        res.innerHTML= (`Percentual de gordura estimado em ${formulaH}`)

    } else if (radsex[1].checked) {

        formulaM = (0.439*cc)+ (0.221*id)-9.4
        res.innerHTML= (`Percentual de gordura estimada em ${formulaM}`)
    }

}



function calcularCC() {
    let cc = document.getElementById("cc").value
    let rescc = document.getElementById("rescc")
    let radsex = document.getElementsByName("radsex")

    if (radsex[0].checked && cc>=94 && cc<102) {

        rescc.innerHTML= ("Elevado")
        rescc.style.color= ("red")
       
    } else if (radsex[0].checked && cc>=102) {

        rescc.innerHTML = ("Muito Elevado")
        rescc.style.color= ("red")

    } else if (radsex[1].checked && cc>=80 && cc<88) {

        rescc.innerHTML= ("Elevado")
        rescc.style.color = ("red")

    } else if (radsex[1].checked && cc>=88) {

        rescc.innerHTML= ("Muito Elevado")
        rescc.style.color = ("red")
    } else {
        rescc.innerHTML= ("Normal")
    }

    
}