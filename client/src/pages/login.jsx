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

const Login =() => {
  return (
   <div className = "flex item-center w-full justify-center">
     <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Signup">Signup</TabsTrigger>
        <TabsTrigger value="Login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="Signup">
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
              <Input type ="text" placeholder="eg.John" required ="true"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Email</Label>
              <Input type ="email" placeholder="eg.John123@gmail.com" required ="true"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input type ="email" placeholder="eg.John123" required ="true"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Signup</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Login">
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
              <Input type="email" placeholder="eg.John123@gmail.com" required="true"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input type="password" placeholder="eg.John123" required="true" />
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