<template>
 <div class="row">
   <div class="container">
     <h2>{{title}}</h2>
     <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Degree</th>
                <th>Email</th>
                <th>Phone</th>    
            </tr>
        </thead>
        <tbody>
            <tr v-for='prof in professors'>
                <td>{{prof.name}}</td>
                <td>{{prof.degree}}</td>
                <td>{{prof.email}}</td>
                <td>{{prof.phone}}</td>
            </tr>
        </tbody>
     </table>
   </div>
  </div>
</template>

<script>
module.exports = {
    props:['titulo'],
    data:function () {
        return {
            greeting:'hello',
            title:'Profesores',
            selected:'',
            selected1:'',
            res:0,
            resp:0,
            professors: [{
                'id': 4056,
                'name': 'Juan Perez ',
                'degree': 'M.Sc.',
                'email': 'juan.perez@univ.ac',
                'phone': '8944556'
            },
            {
                'id': 3110,
                'name': 'Pedro Castro',
                'degree': 'Ph.D',
                'email': 'pedro.castro@univ.ac',
                'phone': '8944550'
            },
            {
                'id': 2856,
                'name': 'Manuel Salas',
                'degree': 'Lic.',
                'email': 'manuel.salas@univ.ac',
                'phone': '8944455'
            },
            {
                'id': 1788,
                'name': 'Oscar Mora',
                'degree': 'M.Sc.',
                'email': 'oscar.mora@univ.ac',
                'phone': '8944675'
            },
            {
                'id': 6547,
                'name': 'Pablo Cortez',
                'degree': 'Lic.',
                'email': 'pablo.cortez@univ.ac',
                'phone': '8944999'
            }
        ]
        }
    }
}
</script>