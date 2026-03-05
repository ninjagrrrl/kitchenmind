import { LoginForm } from "@/components/features/auth/login-form";
import { SocialLoginForm } from "@/components/features/auth/social-login-form";

function LoginPage() {
  return (
    <div>
      <LoginForm />
      <SocialLoginForm />
    </div>
  );
}

export default LoginPage;
