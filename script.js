function lable_create(ele_name,attr_name_1,attr_value_2,content){
    var ele = document.createElement(ele_name);
    ele.setAttribute(attr_name_1,attr_value_2);
    ele.innerHTML = content;
    return ele;
}
function break_create(){
    var br = document.createElement("br");
    return br;
}
function input_create(ele_name,attr_name_1,attr_value_1,id_val_1){
    var input = document.createElement(ele_name);
    input.setAttribute(attr_name_1,attr_value_1);
    input.id = id_val_1;
    return input;
}
var firstname = lable_create("lable","for","firstname","Firstname");
var break_1 = break_create();
var first = input_create("input","type", "text", "first");
var break_2 = break_create();

var Middlename = lable_create("lable","for","middlename","Middlename");
var break_3 = break_create();
var Middle = input_create("input","type", "text", "Middle");
var break_4 = break_create();

var Lastname = lable_create("lable","for","lastname","Lastname");
var break_5 = break_create();
var Last = input_create("input","type", "text", "Last");
var break_6 = break_create();

var lable = lable_create("lable","for","email","Email");
var break_7 = break_create();
var email = input_create("input","type", "email", "Email");
var break_8 = break_create();

var pass = lable_create("lable","for","password","Password");
var break_9 = break_create();
var Password = input_create("input","type", "password", "Password");
var break_10 = break_create();

var phone = lable_create("lable","for","phonenumber","Phonenumber");
var break_11 = break_create();
var Phoneno = input_create("input","type", "tel", "Phoneno");
var break_12 = break_create();

document.body.append(firstname,break_1,first,break_2);
document.body.append(Middlename,break_3,Middle,break_4);
document.body.append(Lastname,break_5,Last,break_6);
document.body.append(lable,break_7,email,break_8);
document.body.append(pass,break_9,Password,break_10);
document.body.append(phone,break_11,Phoneno,break_12);