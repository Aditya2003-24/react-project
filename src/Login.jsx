import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [frmdata, setFrmdata] = useState({
    username: "",
    password: "",
  });
  let [signdata, setSign] = useState("");

  let Loginnav = useNavigate();

  //     function logindata(e){

  //      e.preventDefault()
  //      console.log(frmdata);
  //      let z = localStorage.getItem("userdaata");
  //      z=JSON.parse(z);
  //      if(z.username==frmdata.username && z.password==frmdata.password)
  //      {
  //         alert("data save successfuly")
  //         Loginnav("/home")
  //      }
  //      else{
  //         alert("please enter valid details")
  //      }

  //  }

  function loginfinal(e) {
    e.preventDefault();
    if (
      signdata.username != frmdata.username ||
      signdata.password != frmdata.password
    ) {
      alert("user not found");
    } else {
      alert("data save successfulu");
      Loginnav("/");
    }
  }

  function inpchange(e) {
    const { name, value } = e.target;
    setFrmdata({ ...frmdata, [name]: value });
  }

  useEffect(() => {
    let signdataa = JSON.parse(localStorage.getItem("userdaata"));
    setSign(signdataa);
  }, []);
  return (
    <div className="log">
      <form action="" onSubmit={loginfinal} className="orm">
        <label htmlFor="" className="use">Username</label>
        <input type="text" name="username" onChange={inpchange} className="rnam" />
        <label htmlFor="" className="leb">Password</label>
        <input type="text" name="password" onChange={inpchange} className="egna" />

        <input type="submit" className="tim"/>
      </form>
    </div>
  );
};

export default Login;
