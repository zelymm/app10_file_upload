const member = require("./member/join");
const memberSchema = member.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String.
        trim:true,
        unique:1
    },
    password:{
        type:String,
        minlength:4
    }
})

app.use(express.urlencoded({
    extended: ture
}));
app.use(express.json());