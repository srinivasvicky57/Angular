export class UserService{
    users: { name: string }[] = [
        { name: "srini" },
        { name: "manu" },
        { name: "siri" }
      ]
      addUser(item:string){
          

        this.users.push({name:item})
      }
      onRemove(position:any){
          this.users.splice(position,1)
          
      }
}