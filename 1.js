//funcrion data
function data(){
    var identitas = {
        'Name':'Abdul Arif Budiman',
        'Age':21,
        'Address':'Paniggahan, Ganting Padang Palak, Kec. Junjung sirih, Kab. Solok, Sumatera Barat',
        'Hobbies':['Badminton','Futsal','Coding','jogging'],
        'Is_married': false,
        'list_School':[{'Name':'SDN 13 Paniggahan',
                        'Year_in': 2004,
                        'Year_out': 2010,
                        'Major': null},
                        {'Name':'SMPN 1 Junjung Sirih',
                        'Year_in': 2010,
                        'Year_out': 2013,
                        'Major': null},
                        {'Name':'SMAN 2 X Koto Singkarak',
                        'Year_in': 2013,
                        'Year_out': 2016,
                        'Major':'IPA'}],
        'Skills':[{'Skill_Name':'Administrasi Perkantoran',
                    'Level':'Advanced'},
                    {'Skill_Name':'Microsoft Office',
                    'Level':'Advanced'}],
        'Interest_in_coding':true,

    }
    return identitas
}
//testing
console.log(data())