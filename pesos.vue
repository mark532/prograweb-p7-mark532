<template>
    <div class="container">
        <h3>{{title}}</h3>
        <div class="row">
            <span>De: </span>
            <select v-model="selected">
                <option disabled value="">Seleccione un elemento</option>
                <option>Kilos</option>
                <option>Gramos</option>
                <option>Toneladas</option>
                <option>Libras</option>
                <option>Onzas</option>
            </select>
            <span>A: </span>
            <select v-model="selected1">
                <option disabled value="">Seleccione un elemento</option>
                <option>Kilos</option>
                <option>Gramos</option>
                <option>Toneladas</option>
                <option>Libras</option>
                <option>Onzas</option>
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
            title:'Pesos',
            selected:'',
            selected1:'',
            res:0,
            resp:0
        }
    },
    methods: {
        convertir: function () {
            // Kilo
            if(this.selected == 'Kilos' & this.selected1 == 'Gramos'){
               this.resp = this.res*1000
            }
            if(this.selected == 'Kilos' & this.selected1 == 'Toneladas'){
               this.resp = this.res/100
            }
            if(this.selected == 'Kilos' & this.selected1 == 'Libras'){
               this.resp = this.res*2.205
            }
            if(this.selected == 'Kilos' & this.selected1 == 'Onzas'){
               this.resp = this.res*35.274
            }
            if(this.selected == 'Kilos' & this.selected1 == 'Kilos'){
               this.resp = this.res 
            }
            // Gramo
            if(this.selected == 'Gramos' & this.selected1 == 'Kilos'){
               this.resp = this.res/1000
            }
            if(this.selected == 'Gramos' & this.selected1 == 'Toneladas'){
               this.resp = this.res/1e+6
            }
            if(this.selected == 'Gramos' & this.selected1 == 'Libras'){
               this.resp = this.res/454
            }
            if(this.selected == 'Gramos' & this.selected1 == 'Onzas'){
               this.resp = this.res/28.35
            }
            if(this.selected == 'Gramos' & this.selected1 == 'Gramos'){
               this.resp = this.res 
            }
            // Toneladas
            if(this.selected == 'Toneladas' & this.selected1 == 'Kilos'){
               this.resp = this.res*1000
            }
            if(this.selected == 'Toneladas' & this.selected1 == 'Gramos'){
               this.resp = this.res*1e+6
            }
            if(this.selected == 'Toneladas' & this.selected1 == 'Libras'){
               this.resp = this.res*2205
            }
            if(this.selected == 'Toneladas' & this.selected1 == 'Onzas'){
               this.resp = this.res*35274
            }
            if(this.selected == 'Toneladas' & this.selected1 == 'Toneladas'){
               this.resp = this.res 
            }
            // Libras
            if(this.selected == 'Libras' & this.selected1 == 'Kilos'){
               this.resp = this.res/2.205
            }
            if(this.selected == 'Libras' & this.selected1 == 'Gramos'){
               this.resp = this.res*454
            }
            if(this.selected == 'Libras' & this.selected1 == 'Toneladas'){
               this.resp = this.res/2205
            }
            if(this.selected == 'Libras' & this.selected1 == 'Onzas'){
               this.resp = this.res*16
            }
            if(this.selected == 'Libras' & this.selected1 == 'Libras'){
               this.resp = this.res 
            }
            // Onzas
            if(this.selected == 'Onzas' & this.selected1 == 'Kilos'){
               this.resp = this.res/35.274
            }
            if(this.selected == 'Onzas' & this.selected1 == 'Gramos'){
               this.resp = this.res*28.35
            }
            if(this.selected == 'Onzas' & this.selected1 == 'Toneladas'){
               this.resp = this.res/35274
            }
            if(this.selected == 'Onzas' & this.selected1 == 'Libras'){
               this.resp = this.res/16
            }
            if(this.selected == 'Onzas' & this.selected1 == 'Onzas'){
               this.resp = this.res 
            }
            
        }
    }
}
</script>