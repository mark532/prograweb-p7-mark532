<template>
    <div class="container">
        <h3>{{title}}</h3>
        <div class="row">
            <span>De: </span>
            <select v-model="selected">
                <option disabled value="">Seleccione un elemento</option>
                <option>Celsius</option>
                <option>Kelvin</option>
                <option>Fahrenheit</option>
            </select>
            <span>A: </span>
            <select v-model="selected1">
                <option disabled value="">Seleccione un elemento</option>
                <option>Celsius</option>
                <option>Kelvin</option>
                <option>Fahrenheit</option>
            </select>
        <div>
        <div class="container row" >
        <input v-model.number="res" placeholder="edíteme">
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
            title:'Temperaturas',
            selected:'',
            selected1:'',
            res:0,
            resp:0
        }
    },
    methods: {
        convertir: function () {
            // Celsius
            if(this.selected == 'Celsius' & this.selected1 == 'Kelvin'){
               this.resp = ((this.res)+273.15)
            }
            if(this.selected == 'Celsius' & this.selected1 == 'Fahrenheit'){
               this.resp = (this.res*1.8)+32
            }
            if(this.selected == 'Celsius' & this.selected1 == 'Celsius'){
               this.resp = this.res
            }
            // Kelvin
            if(this.selected == 'Kelvin' & this.selected1 == 'Celsius'){
               this.resp = this.res-273.15
            }
            if(this.selected == 'Kelvin' & this.selected1 == 'Fahrenheit'){
               this.resp = 1.8*(this.res-273.15)+32
            }
            if(this.selected == 'Kelvin' & this.selected1 == 'Kelvin'){
               this.resp = this.res
            }
            // Fahrenheit
            if(this.selected == 'Fahrenheit' & this.selected1 == 'Celsius'){
               this.resp = (this.res-32)/1.8
            }
            if(this.selected == 'Fahrenheit' & this.selected1 == 'Kelvin'){
               this.resp = ((5/9)*(this.res-32))+273.15
            }
            if(this.selected == 'Fahrenheit' & this.selected1 == 'Fahrenheit'){
               this.resp = this.res
            }
            
        }
    }
}
</script>