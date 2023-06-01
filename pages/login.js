import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useTheme } from "next-themes";
// import { auth, db } from "@/firebase/client";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaMoon, FaSun } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const uid = user.uid;

      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        router.push("/home");
      } else {
        router.push("/sign-up");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeToggler = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          title="Toggle theme"
          onClick={(e) => {
            e.preventDefault();
            setTheme("light");
          }}
          className="flex items-center justify-center w-10 h-10 text-2xl text-black rounded-full allIL:hidden"
        >
          <FaSun />
        </button>
      );
    } else {
      return (
        <button
          title="Toggle theme"
          onClick={(e) => {
            e.preventDefault();
            setTheme("dark");
          }}
          className="flex items-center justify-center w-10 h-10 text-2xl text-black rounded-full allIL:hidden"
        >
          <FaMoon />
        </button>
      );
    }
  };

  return (
    <>
      <Head>
        <title>Login | NEXTGEN Doctors</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-[100dvh] w-screen relative">
        <section className="relative basis-1/2 allIL:basis-full">
          <Image src={"/Auth/Login.jpg"} fill alt="Login pic" />
        </section>
        <form
          className="overflow-scroll basis-1/2 allIL:w-full allIL:h-full allIL:backdrop-blur-xl allIL:z-10 allIL:absolute allIL:top-0"
          onSubmit={handleSignIn}
        >
          <div className="flex items-center justify-center w-full min-h-[100dvh]">
            <section className="border border-black bg-white w-[90%] max-w-[450px] flex flex-col gap-5 p-5 pb-6 rounded-xl text-black my-10">
              <div className="flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    router.back();
                  }}
                  className="flex items-center gap-2 text-lg"
                >
                  <FaArrowLeft /> back
                </button>

                {renderThemeToggler()}

                <Link
                  href={"/"}
                  className="px-8 py-3 text-white duration-500 bg-black border border-black rounded-full hover:bg-transparent hover:text-black"
                >
                  Home
                </Link>
              </div>

              <h2 className="text-4xl text-center allT:text-2xl">
                Welcome back!
              </h2>

              <label>
                Email
                <input
                  type="email"
                  required
                  placeholder="john.doe@example.com"
                  value={email}
                  className="w-full h-12 pl-3 mt-2 text-base text-black bg-transparent border border-black rounded"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>

              <label>
                Password
                <input
                  type="password"
                  required
                  placeholder="**********"
                  value={password}
                  className="w-full h-12 pl-3 mt-2 text-base text-black bg-transparent border border-black rounded"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>

              {errorMessage && <p className="text-red-600">{errorMessage}</p>}

              <p className="text-center allT:text-xs">
                Don&apos;t have an account?&nbsp;
                <Link className="font-bold" href={"/sign-up"}>
                  Sign-up
                </Link>
              </p>

              <button
                className="py-3 text-white duration-500 bg-black border rounded-full hover:bg-transparent hover:text-black hover:border-black"
                type="submit"
              >
                Continue
              </button>
            </section>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
