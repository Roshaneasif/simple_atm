import PromptSync from "prompt-sync";
const prompt = PromptSync();
let user = {
    name: "Roshane Asif",
    id: 21,
    pin: 9781,
    balance: 5000
};
let choice =0;
let amount;
let userPin = parseInt(prompt("enter you pin: "));
let userId = parseInt(prompt("enter you id: "))
if(userPin === user.pin && userId === user.id)
{
    console.log("press '1' to check balance");
    console.log("press '2' to withdraw money");
    choice = parseInt(prompt("enter your choice"))
    if(choice == 1){
        console.log(`your balance is ${user.balance} Rs only`)
    }
    else if(choice == 2)
    {
         amount = parseInt(prompt("enter withdraw amount "))
        if(amount<=user.balance){
            amount -= user.balance;
            console.log("withdraw successfull");
            
        }
        else{
            console.log('Insufficient funds.');
        }
    }
    else{
        console.log('Invalid choice.');
    }
}
else{
    console.log("invalid id or pin.")
}
