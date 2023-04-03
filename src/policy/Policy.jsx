import UserInfo from "../props.states/Userinfo";


function Policy(){

    const user = { name: 'John Doe', email: 'johndoe@example.com' };

    return (
        <div>

    <h2>welcome Policy page</h2>
        <UserInfo name={user.name} email={user.email} />
        {/* const myElement = <UserInfo name = "Amanda" email= "she@gmail"/> */}

        {/* const tryPropInput = {name:"Janet", email:"abc@gmail.com"} */}

    </div>
    )
}
export default Policy;