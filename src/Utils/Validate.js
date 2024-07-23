export let checkValidate=(email,password)=>{
    // const isnamevalid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const isemailvalid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const ispasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if(!isnamevalid) return "Name is inavlid ";
    if(!isemailvalid) return "Email is inavlid ";
    if(!ispasswordvalid) return "password is inavlid ";

   
    // if all true 
    return null;
};