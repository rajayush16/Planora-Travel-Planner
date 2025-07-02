"use client";
import React, { useState } from "react";
import {
  CardFooter,
  Button,
  Input,
  Card,
  CardHeader,
  CardBody,
} from "@heroui/react";
import { Architects_Daughter } from "next/font/google";
import Image from "next/image";
import { ADMIN_API_ROUTES } from "@/utils";
import { useAppStore } from "@/store";
import { useRouter } from "next/navigation";
import { apiClient } from "@/lib";

const ArchitectsDaughter = Architects_Daughter({
  weight: "400", 
  style: "normal", 
  subsets: ["latin"],
});

const Login = () => {
  const router = useRouter();
  const { setUserInfo } = useAppStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const response = await apiClient.post(ADMIN_API_ROUTES.LOGIN, {
      email,
      password,
    });
    if (response.data.userInfo) {
      setUserInfo(response.data.userInfo);
      router.push("/admin");
    }
  };

  return (
      <div
        className="h-[100vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: 'url("/home/home-bg.png")',
        }}
      >
        <div className="absolute inset-0 bg-opacity-60 backdrop-blur-2xl z-0"></div>
        <Card className="shadow-2xl bg-white/10 w-[500px] z-10 rounded-3xl border-none p-8 flex flex-col items-center">
          <CardHeader className="flex flex-col gap-2 items-center p-0 mb-2">
            <Image
              src="/logo.png"
              alt="logo"
              height={60}
              width={60}
              className="mb-2"
            />
            <span className="text-xl uppercase font-semibold text-white tracking-wide text-center">
              <span className={ArchitectsDaughter.className}>
                ARKLYTE ADMIN LOGIN
              </span>
            </span>
          </CardHeader>
          <CardBody className="flex flex-col items-center w-full justify-center p-0">
            <div className="flex flex-col gap-3 w-full">
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full bg-pink-100 !border-none !outline-none !focus:outline-none !focus:border-none text-pink-500 placeholder-pink-400 py-3 px-4 focus:bg-pink-50 focus:ring-4 focus:ring-pink-300/60 focus:shadow-lg transition-all duration-200 shadow-none"
                color="danger"
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-full bg-pink-100 !border-none !outline-none !focus:outline-none !focus:border-none text-pink-500 placeholder-pink-400 py-3 px-4 focus:bg-pink-50 focus:ring-4 focus:ring-pink-300/60 focus:shadow-lg transition-all duration-200 shadow-none"
                color="danger"
              />
            </div>
          </CardBody>
          <CardFooter className="flex flex-col gap-2 items-center justify-center p-0 mt-4 w-full">
            <Button
              color="danger"
              variant="shadow"
              onClick={handleLogin}
              className="w-[90%] capitalize rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold py-3 shadow-lg transition-all duration-200"
              size="lg"
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
};

export default Login;