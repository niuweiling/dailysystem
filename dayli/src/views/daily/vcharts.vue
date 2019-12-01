<template>
	<div>

	</div>
</template>

<script>

    export default {
        name: "vcharts",
        data(){
            this.lineSettings={
                labelMap:{
                    'number':'每日提交量'
                }

            }
            return{
                linedata:{
                    colums:['data','number'],
                    row:[
                        {data:'2019-12-23',number:45},
                        {data:'2019-12-23',number:45},
                        {data:'2019-12-23',number:45},
                        {data:'2019-12-23',number:45},
                        {data:'2019-12-23',number:45},

                 ]
                },
                    lineDatal:{
                    colums:['date','staus','skill'],
                     rows:[
                        {date:'7.22',staus:'100',skill:0},
                        {date:'8.12',staus:'80',skill:50},
                        {date:'8.30',staus:'70',skill:60},
                        {date:'9.22',staus:'90',skill:90},
                        {date:'10.16',staus:'60',skill:70},
                ]
                }
            }
        }
    }
</script>

<style scoped>

</style>