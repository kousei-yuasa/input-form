import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [mail, setMail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      // await signInWithEmailAndPassword(auth, mail, pass);
      navigate("/input");
    } catch (error) {
      alert("メールアドレスまたはパスワードが間違っています");
    }
  };

  return (
    <>
      {/* ↓ログインしていればマイページを表示 */}
      <>
        <div className="m-auto flex h-screen flex-col items-center justify-center">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="pr-10">メールアドレス</label>
              <input
                name="email"
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="border-2 border-black"
              />
            </div>
            <div className="my-10">
              <label className="pr-10">パスワード</label>
              <input
                name="password"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="border-2 border-black"
              />
            </div>
            <button>ログイン</button>
          </form>
        </div>
      </>
    </>
  );
};
export default Login;
