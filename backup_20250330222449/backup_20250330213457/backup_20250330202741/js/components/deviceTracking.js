app.component('deviceTracking',{props:['config'],template:`<div><h3>Device Tracking</h3><p>Configure device tracking/profiling.</p><div class='step-navigation d-flex justify-content-between'><button class='btn btn-outline-secondary' @click='goBack'>Previous</button><button class='btn btn-primary' @click='goNext'>Next</button></div></div>`,methods:{goBack(){this.$parent.currentStep='radsec'},goNext(){this.$emit('next-step')}}})
