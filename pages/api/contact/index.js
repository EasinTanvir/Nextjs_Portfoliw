import {MongoClient} from 'mongodb';

export default async function(req,res){

    let client;

    const connectingString = `mongodb+srv://${process.env.mongo_username}:${process.env.mongo_password}@${process.env.mongo_cluster}.j34xwzp.mongodb.net/${process.env.mongo_database}?retryWrites=true&w=majority`

    try{

         client =await MongoClient.connect(connectingString)
    }catch(error){
        res.status(201).json({message:'connnecting with database failed'})
        return

    }


    if(req.method==='POST'){

        const email = req.body.email;
        const name = req.body.name;
        const message = req.body.message;

        if(!email || !email.includes('@') || !name || !message){
            res.status(200).json({message:'please insert a valid email'})
        }

      const  recValue = {
          email,
          name,
          message

      }

      const db=client.db();

      let final

      try{

          final= await db.collection('message').insertOne(recValue)
      }catch(error){
        client.close()
        res.status(200).json({message:'storing data failed'})       
        return

      }

      recValue.id=final.insertedId;

      client.close()
     

      res.status(200).json({message:'comment submit successfully',comments:recValue})
      
    }

}