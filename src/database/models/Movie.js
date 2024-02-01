module.exports=(sequelize,DataTypes) => {
    const alias = "Movie"
    const cols = {
id : {
   type: DataTypes.INTEGER,
   primaryKey: true,
   allowNull: false, 
   autoIncrement: true,

},
title:{
   type: DataTypes.STRING,
   allowNull :false,

},
rating:{
   type: DataTypes.DECIMAL.UNSIGNED,
   allowNull: false
},
awards:{
   type: DataTypes.INTEGER.UNSIGNED,
   allowNull: false,
   DefaultValue:0,
},
release_date: {
   type:DataTypes.DATE,
   allowNull: false,
},
length:{
   type: DataTypes.INTEGER.UNSIGNED,
   DefaultValue:null,
},
genre_Id:{
   type : DataTypes.INTEGER.UNSIGNED,
   DefaultValue:null,
}

    }
    const config ={
tableName : "movies",
timesTamps: true,
//underscored: true,
    }
    const Movie = sequelize.define (alias, cols, config)
    return Movie
}