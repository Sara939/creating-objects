////////////////////////////////// class work:
// var manager= {
//     firstname: "sara",
//     lastname: "likaount",
//     age: 30,
//     paychek: 10000
// };

// var emploey= {
//     fullname: "sara likaount",
//     dateofbirth: "8/1/92",
//     email: "saralkaount@gmail.com",
//     addras: "shtammper 3, netanya"
// };

// var fruit= {
//     name: "smith",
//     color: "green",
//     kind: "apple"
// };

// document.write(fruit.name);
// document.write("<br>");
// document.write(fruit.color);
// document.write("<br>");
// document.write(fruit.kind);

// var oueclass = {
//     classnum: 1,
//     studentnum: 4,
//     studentsname: ["sara", "shlomo", "eldad", "yoni"]
// };

// // document.write(oueclass.studentsname);
// // document.write(oueclass.studentsname[0]);
// // document.write(oueclass.studentsname[1]);
// // document.write(oueclass.studentsname[2]);
// // document.write(oueclass.studentsname[3]);

// for(i=0; i<oueclass.studentsname.length; i++){
//     document.write(oueclass.studentsname[i]+"<br>");
// }

// var kinergarden= {
//     name: "suzi",
//     numofkids: 6,
//     kidsnames: ["shlomo", "wldad", "yoni", "sara", "lior", "shimon"]
// }

// for(i=0; i<kinergarden["kidsnames"].length; i++){
// document.write(kinergarden["kidsnames"][i]+"<br>");
// }

// var newkey= prompt("enter a key");
// document.write(kinergarden[newkey]);

// var  classroom={};
// classroom.classnum= +prompt("ener class num");
// classroom.studentsnumber= +prompt("enter num of sudent");
// classroom.agenum= +prompt("enter your age");

// console.log(classroom);

// var teacher={};
// mykey= prompt("choose a key");
// myname= prompt("write your name");
// teacher[mykey]=[myname];
// console.log(teacher);

// var manager= {};////////////////////////////////////////////
// // ln= prompt("lastname");
// // ag= prompt("age");
// // pc= prompt("paycheck");
// // manager[prompt("enter a key")]= prompt("first name");
// // manager[prompt("enter a key")]= ln;
// // manager[prompt("enter a key")]= ag;
// // manager[prompt("enter a key")]= pc;

// console.log(manager);

// var user = {};
// for (i = 0; i < 4; i++) {
//     choosenkey = prompt("key");
//     choosenvalue = prompt("value");
//     user[choosenkey] = choosenvalue;
//     document.write("<div>" + user[choosenkey] + "</div>");
// }


// var suzuki= {
//     var carsarray= [];
//     for(i=0; i<4; i++){
//     company: prompt("your car company"),
//     color: prompt("cars color"),
//     smk: prompt("smk"),
//     year: prompt("year")  
//     document.write("<div>" + suzuki.company + "</div>");
//    }
//    carsarray.push(suzuki);
// }
//     console.log(carsarray);

// 17://///////////////////////

// function cats() {
//     var allcats = [];
//     for (i = 0; i < 2; i++) {
//         var onecat = {
//             name: prompt("name"),
//             year: +prompt("year"),
//             somekind: prompt("kind"),
//             wight: +prompt("wight")
//         }
//         allcats.push(onecat);
//         document.write("<h1>" + onecat.name + "</h1>" + "<h1>" + onecat.year + "</h1>" + "<h1>" + onecat.somekind + "</h1>")
//     }
//     console.log(allcats);

// }
// cats();

// 18:

// var usernum=+prompt("num");
// function usernumofob(){
//     for(i=0; i<usernum; i++){
//     var dogs={
//         name:prompt("name"),
//         age:+prompt("age"),
//         kind:prompt("kind of dog"),
//         ownername:prompt("owners name")
//     }
//     document.write("<p>"+dogs.name+"</p>"+"<p>"+dogs.age+"</p>"+"<p>"+dogs.kind+"</p>"+"<p>"+dogs.ownername+"</p>")
//     }
// }
// usernumofob();

// 19:

// function numfromuser(){
//     var numberoftimes= +prompt("num");
//     for(i=0; i<numberoftimes; i++){
//     var insect={
//         name:prompt("name"),
//         scientificName:prompt("scientific Name"),
//         wingsNum:window.confirm("does he has wings?"),
//         // wingsNum:+prompt("wings Num"),
//         legsNum:+prompt("legsNum")
//     }
//     if(insect.wingsNum == true){
//     document.write("<h3>"+insect.name+"</h3>"+"<h3>"+insect.scientificName+"</h3>"+"<h3>"+insect.legsNum+"</h3>")
//     }
//     }

// }
// numfromuser();

// 20:
// function numuser(){
//     var numberoftimes= +prompt("num");
//     for(i=0; i<numberoftimes; i++){
//     var child={
//         fullname:prompt(" full name"),
//         age:+prompt("age"),
//         inKindergarden:window.confirm("confirm if u go to kindergarden?"),
//     }
//     if(child.age > 4){
//     document.write("<p>"+child.fullname+"</p>"+"<p>"+child.age+"</p>"+"<p>"+child.inKindergarden+"</p>")
//     }
//     }

// }
// numuser();

// 21:
// function compfromuser(){
//     var numberoftimes= +prompt("num");
//     for(i=0; i<numberoftimes; i++){
//     var computer={
//         brand:prompt("brand name"),
//         type:prompt("type"),
//         wigth:+prompt("wigth in kg"),
//         instock:window.confirm("confirm if in stock")
//     }
//     if(computer.instock == true && computer.wigth > 2){
//     document.write("<p>"+computer.brand+"</p>"+"<p>"+computer.type+"</p>"+"<p>"+computer.wigth+"</p>")
//     }
//     }

// }
// compfromuser();

// 22:
// function teachersfun(){
//     var numberoftimes= +prompt("num");
//     for(i=0; i<numberoftimes; i++){
//     var teacher={
//         fulname:prompt("full name"),
//         salary:prompt("salary per hour"),
//         email:prompt("email"),
//         year:+prompt("year in 4 digits")
//     }
//     if(teacher.salary > 100 || teacher.year < 1990){
//     document.write("<span>"+teacher.fulname+"</span>"+" "+"<span>"+teacher.salary+"</span>"+" "+"<span>"+teacher.email+"</span>"+" "+"<span>"+teacher.year+"</span>"+" ")
//     }
//     }

// }
// teachersfun();

// 23:
// function furnitureFun(num){
//     for(i=0; i<num; i++){
//     var furniture= {
//         name: prompt("name"),
//         brand:prompt("brand"),
//         shopstobuy:prompt("shops to buy"),
//         price:+prompt("price")
//     }
//     document.write("<div>"+furniture.name+"</div>"+ "<div>"+furniture.shopstobuy +"</div>")
//     }
// }
// furnitureFun(2);

// 24:

// function apartmentsFun(num){
//     for(i=0; i<num; i++){
//     var apartment= {
//         addras: prompt("addras"),
//         rentPrice:+prompt("renting price"),
//         buyPrice:+prompt("buying price"),
//         buyers:("potantioal buyers"),
//         istivoch:window.confirm("tivoch?")
//     }
//     if(apartment.istivoch == false)
//     document.write("<div>"+apartment.addras+"</div>"+ "<div>"+apartment.buyers +"</div>")
//     }
// }
// apartmentsFun(3);

// 25:
// function countries(){
//     var numberoftimes= +prompt("num");
//     for(i=0; i<numberoftimes; i++){
//     var country= {
//         name: prompt("name"),
//         citizens:+prompt("num of citizens"),
//         cities:prompt("cities"),
//         isbeithabad :window.confirm("do u have beit habad?")
//     }
//     if(country.isbeithabad == true){
//     document.write("<div>"+country.name+"</div>"+ "<div>"+country.cities +"</div>")
//     }
// }

// }
// countries();

// 26:
function moviesfun(){
    var numberoftimes= +prompt("num");
    for(i=0; i<numberoftimes; i++){
    var movie= {
        name: prompt("name"),
        viewsnum:+prompt("viewsnum"),
        year:+prompt("year"),
        picture: document.createElement("img"),
        mypic.src= prompt("link")
    }
    document.write("<div>"+movie.name+"</div>"+ "<div>"+movie.viewsnum+"</div>"+ "<div>"+movie.year+"</div>"+"<div>"+movie.picture+"</div>")
    
}
}

function addpic(){
    var picture= ""
}

moviesfun();


















