export class UserService{
    users: { name: string }[] = [
        { name: "srini" },
        { name: "manu" },
        { name: "siri" }
      ]
      addUser(item:string){
          
        
       const flag= this.users.filter(i=>{
           
            return i.name===item
        })
       if(!flag) this.users.push({name:item})

      }
      onRemove(position:any){
          this.users.splice(position,1)
          
      }
}