const user = {
    username: "Harry",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
    //console.log("Get user details from database");
        //console.log(`Username: ${this.username}`);
        // return 0;
        // console.log(this);
        
    
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // this will refer to the global object (window in browsers) when used outside of any function or object context. And in strict mode(node environment), it will be undefined '{}'.
