import Input from "@/components/input/Input";
import Button from "@/components/button/Button";

export default function LoginForm() {
  return (
    <div className="flex h-full items-center justify-center bg-gray-100 max-w-md mx-auto">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">Login</h1>
        <p className="mb-6 text-sm text-gray-500">Please fill in all fields</p>

        <form className="space-y-4">
          <Input label="Username" placeholder="Enter your username" />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            error="Password is required"
          />

          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}
