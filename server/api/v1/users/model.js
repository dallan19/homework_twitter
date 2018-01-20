const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  firstname: {
    type: String,
    required: true,
    max: [32, 'El nombre debe tener máximo 32 carácteres']
  },
  lastname: {
    type: String,
    required: true,
    max: [32, 'El apellido debe tener máximo 32 carácteres']
  },
  email:{
    type:String,
    required:true,
    validate: {
                validator: function(v) {
                  return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
                },
                message: '{VALUE} no es un correo electronico válido!'
              }
    
  },
  active: { type: Boolean, default: true, select: false, }
},{
    timestamps: true
});
    
module.exports = mongoose.model('user', schema);
