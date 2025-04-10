import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useEffect, useState } from "react";

const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;

    if (type === "signup") {
      setSignupInput((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else if (type === "login") {
      setLoginInput((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
   <div className = "flex item-center w-full justify-center">
     <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signup">Signup</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Signup Here</CardTitle>
            <CardDescription>
              Create new account and signup.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input type ="text" placeholder="eg.John" required ="true"
              name="name"
              value={signupInput.name}
              onChange={(e) => changeInputHandler(e, "signup")}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Email</Label>
              <Input type ="email" placeholder="eg.John123@gmail.com" required ="true"
              name="email"
              value={signupInput.email}
              onChange={(e) => changeInputHandler(e, "signup")}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input type ="email" placeholder="eg.John123" required ="true"
               name="password"
               value={signupInput.password}
               onChange={(e) => changeInputHandler(e, "signup")}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Signup</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>login Here</CardTitle>
            <CardDescription>
              Login with your password here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Email</Label>
              <Input type="email" placeholder="eg.John123@gmail.com" required="true"
              name="email"
              value={loginInput.email}
              onChange={(e) => changeInputHandler(e, "login")}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input type="password" placeholder="eg.John123" required="true"
               name="password"
               value={loginInput.password}
               onChange={(e) => changeInputHandler(e, "login")} />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
   </div>
  )
}
export default Login;