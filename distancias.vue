<template>
    <div class="container">
        <h3>{{title}}</h3>
        <div class="row">
            <span>De: </span>
            <select v-model="selected">
                <option disabled value="">Seleccione un elemento</option>
                <option>Metros</option>
                <option>Kilometros</option>
                <option>Centimetros</option>
                <option>Millas</option>
                <option>Yardas</option>
                <option>Pies</option>
                <option>Pulgadas</option>
            </select>
            <span>A: </span>
            <select v-model="selected1">
                <option disabled value="">Seleccione un elemento</option>
                <option>Metros</option>
                <option>Kilometros</option>
                <option>Centimetros</option>
                <option>Millas</option>
                <option>Yardas</option>
                <option>Pies</option>
                <option>Pulgadas</option>
            </select>
        <div>
        <div class="container row" >
        <input v-model="res" placeholder="edíteme">
        <button v-on:click="convertir()">Convertir</button>
        </div>
        <span>Resultado: {{resp}}</span>
    </div>
</template>

<script>
module.exports = {
    props:['titulo'],
    data:function () {
        return {
            greeting:'hello',
            title:'Distancias',
            selected:'',
            selected1:'',
            res:0,
            resp:0
        }
    },
    methods: {
        convertir: function () {
            // Metros
            if(this.selected == 'Metros' & this.selected1 == 'Kilometros'){
               this.resp = this.res/1000
            }
            if(this.selected == 'Metros' & this.selected1 == 'Centimetros'){
               this.resp = this.res*100
            }
            if(this.selected == 'Metros' & this.selected1 == 'Millas'){
               this.resp = this.res/1609
            }
            if(this.selected == 'Metros' & this.selected1 == 'Yardas'){
               this.resp = this.res*1.094
            }
            if(this.selected == 'Metros' & this.selected1 == 'Pies'){
               this.resp = this.res*3.281
            }
            if(this.selected == 'Metros' & this.selected1 == 'Pulgadas'){
               this.resp = this.res*39.37
            }
            if(this.selected == 'Metros' & this.selected1 == 'Metros'){
               this.resp = this.res 
            }
            //Kilometros
            if(this.selected == 'Kilometros' & this.selected1 == 'Metros'){
               this.resp = this.res*1000
            }
            if(this.selected == 'Kilometros' & this.selected1 == 'Centimetros'){
               this.resp = this.res*100000
            }
             if(this.selected == 'Kilometros' & this.selected1 == 'Millas'){
               this.resp = this.res/1.609
            }
            if(this.selected == 'Kilometros' & this.selected1 == 'Yardas'){
               this.resp = this.res*1094
            }
            if(this.selected == 'Kilometros' & this.selected1 == 'Pies'){
               this.resp = this.res*3281
            }
            if(this.selected == 'Kilometros' & this.selected1 == 'Pulgadas'){
               this.resp = this.res*39370
            }
            if(this.selected == 'Kilometros' & this.selected1 == 'Kilometros'){
               this.resp = this.res 
            }
            //Centimetros
            if(this.selected == 'Centimetros' & this.selected1 == 'Metros'){
               this.resp = this.res/100
            }
            if(this.selected == 'Centimetros' & this.selected1 == 'Kilometros'){
               this.resp = this.res/100000
            }
            if(this.selected == 'Centimetros' & this.selected1 == 'Millas'){
               this.resp = this.res/160934
            }
            if(this.selected == 'Centimetros' & this.selected1 == 'Yardas'){
               this.resp = this.res/91.44
            }
            if(this.selected == 'Centimetros' & this.selected1 == 'Pies'){
               this.resp = this.res/30.48
            }
            if(this.selected == 'Centimetros' & this.selected1 == 'Pulgadas'){
               this.resp = this.res/2.54
            }
            if(this.selected == 'Centimetros' & this.selected1 == 'Centimetros'){
               this.resp = this.res 
            }
            //Millas
            if(this.selected == 'Millas' & this.selected1 == 'Metros'){
               this.resp = this.res*1609
            }
            if(this.selected == 'Millas' & this.selected1 == 'Kilometros'){
               this.resp = this.res*1.609
            }
            if(this.selected == 'Millas' & this.selected1 == 'Centimetros'){
               this.resp = this.res*160934
            }
            if(this.selected == 'Millas' & this.selected1 == 'Yardas'){
               this.resp = this.res*1760
            }
            if(this.selected == 'Millas' & this.selected1 == 'Pies'){
               this.resp = this.res*5280
            }
            if(this.selected == 'Millas' & this.selected1 == 'Pulgadas'){
               this.resp = this.res*63360
            }
            if(this.selected == 'Millas' & this.selected1 == 'Millas'){
               this.resp = this.res 
            }
            //Yardas
            if(this.selected == 'Yardas' & this.selected1 == 'Metros'){
               this.resp = this.res/1.094
            }
            if(this.selected == 'Yardas' & this.selected1 == 'Kilometros'){
               this.resp = this.res/1094
            }
            if(this.selected == 'Yardas' & this.selected1 == 'Centimetros'){
               this.resp = this.res*91.44
            }
            if(this.selected == 'Yardas' & this.selected1 == 'Millas'){
               this.resp = this.res/1760
            }
            if(this.selected == 'Yardas' & this.selected1 == 'Pies'){
               this.resp = this.res*3
            }
            if(this.selected == 'Yardas' & this.selected1 == 'Pulgadas'){
               this.resp = this.res*36
            }
            if(this.selected == 'Yardas' & this.selected1 == 'Yardas'){
               this.resp = this.res 
            }
            //Pies
            if(this.selected == 'Pies' & this.selected1 == 'Metros'){
               this.resp = this.res/3.281
            }
            if(this.selected == 'Pies' & this.selected1 == 'Kilometros'){
               this.resp = this.res/3281
            }
            if(this.selected == 'Pies' & this.selected1 == 'Centimetros'){
               this.resp = this.res*30.48
            }
            if(this.selected == 'Pies' & this.selected1 == 'Millas'){
               this.resp = this.res/5280
            }
            if(this.selected == 'Pies' & this.selected1 == 'Yardas'){
               this.resp = this.res/3
            }
            if(this.selected == 'Pies' & this.selected1 == 'Pulgadas'){
               this.resp = this.res*12
            }
            if(this.selected == 'Pies' & this.selected1 == 'Pies'){
               this.resp = this.res 
            }
            //Pulgadas
            if(this.selected == 'Pulgadas' & this.selected1 == 'Metros'){
               this.resp = this.res/39.37
            }
            if(this.selected == 'Pulgadas' & this.selected1 == 'Kilometros'){
               this.resp = this.res/39370
            }
            if(this.selected == 'Pulgadas' & this.selected1 == 'Centimetros'){
               this.resp = this.res*2.54
            }
            if(this.selected == 'Pulgadas' & this.selected1 == 'Millas'){
               this.resp = this.res/63360
            }
            if(this.selected == 'Pulgadas' & this.selected1 == 'Yardas'){
               this.resp = this.res/36
            }
            if(this.selected == 'Pulgadas' & this.selected1 == 'Pies'){
               this.resp = this.res/12
            }
            if(this.selected == 'Pulgadas' & this.selected1 == 'Pulgadas'){
               this.resp = this.res 
            }
        }
    }
}
</script>