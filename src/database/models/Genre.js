module.exports=(sequelize,DataTypes) => {
    const alias = "Genre"
    const cols = {
id : {
   type: DataTypes.INTEGER,
   primaryKey: true,
   allowNull: false, 
   autoIncrement: true,

},
name:{
   type: DataTypes.STRING,
   DefaultValue:null,
   },

   rating:{
   type: DataTypes.INTEGER.UNSIGNED,
   allowNull: false,
   unique:true,
},
active:{
   type: DataTypes.BOOLEAN,
   allowNull: false
},

}
    const config ={
tableName : "genres",
timesTamps: true,
//underscored: true,
    }
    const Genre = sequelize.define (alias, cols, config)
    return Genre
}