const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

//phase devlopment server for npm run dev
//phase production build for npm run build
//phase production server for npm run build

module.exports =(phase)=> {

  if(phase === PHASE_DEVELOPMENT_SERVER){
    return {
      env:{
        mongo_username:'tanvir',
        mongo_password:'tanvir',
        mongo_cluster:'cluster0',
        mongo_database:'vlog2'
      }
    }
  }

  return{
  env:{
    mongo_username:'tanvir',
    mongo_password:'tanvir',
    mongo_cluster:'cluster0',
    mongo_database:'vlog'
  }
}
}