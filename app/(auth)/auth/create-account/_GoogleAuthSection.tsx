import Svg from "@/components/common/Svg";
import { Button } from "@/components/ui/button";
import useCreateAccountWithGoogle from "@/hooks/mutations/auth/useCreateAccountWithGoogle";
import { googleIcon } from "@/public/assets/icons";
import { useRouter } from "next/navigation";

function GoogleAuthSection({ role }: any) {
  const router = useRouter();
  const { mutate, isPending } = useCreateAccountWithGoogle();
  const handleGoogleAuth = (role: string) => {
    const payload = {
      role: role,
    };
    console.log(payload);
    mutate(payload, {
      onSuccess: (response) => {
        router.push(response.data);
      },
    });
  };
  return (
    <div className="mt-10">
      <Button
        variant="outline"
        className="rounded-md gap-2 border border-[#E4E4E7]"
        onClick={() => handleGoogleAuth(role)}
      >
        <Svg SvgIcon={googleIcon} />
        Sign-up with Google
      </Button>
      <div className="w-full flex items-center gap-4 my-7">
        <div className="h-px w-full bg-black-500"></div>
        OR
        <div className="h-px w-full bg-black-500"></div>
      </div>
    </div>
  );
}

export default GoogleAuthSection;
