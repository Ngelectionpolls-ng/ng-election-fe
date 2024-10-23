"use client";

import { toast } from "sonner";
import { CiCloudOff } from "react-icons/ci";
import { useAuth } from "@/hooks/useAuthStore";
import { instance } from "@/services/instance";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



const Interceptor = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const { handleLogOut } = useAuth();

    const session = useSession()
    const token = session?.data?.user?.tokens?.accessToken;
    const isLoggedIn = !!token

    const router = useRouter();

    instance.interceptors.request.use((config) => {
        if (isLoggedIn)
            Object.assign(config.headers, {
                Authorization: `Bearer ${token}`,
            });

        return config;
    });

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (
                error.code === "ERR_NETWORK" ||
                error?.response?.statusText === "Network Error"
            ) {
                toast("Looks like you are offline", {
                    icon: <CiCloudOff size={23} className="-mt-4" />,
                    description: "You will need to reconnect to server",
                    position: "bottom-left",
                    duration: Infinity,
                });
                return error;
            }

            if (
                error?.response?.status === 401 &&
                error?.response?.statusText === "Unauthorized"
            ) {
                toast.error(error.response.data.message);
                handleLogOut();
                router.push('/auth/login')
            }
            if (
                error?.response?.status === 401 &&
                error?.config &&
                !error?.config.__isRetryRequest
            ) {
                if (token) {
                    toast.error(error.response.data.message);
                    if (
                        error?.response?.data?.message ===
                        "Authentication failed. Please sign in." ||
                        error?.response?.data?.message === "jwt expired"
                    ) {
                        handleLogOut();
                        router.push('/auth/login')

                    }
                }
            }
            if (error.message.includes("ERR_CONNECTION_REFUSED")) {
                toast.error("Failed to connect to the server: Connection refused");
            }
            if (error.message.includes("ERR_CONNECTION_TIMED_OUT")) {
                toast.error("Failed to connect to the server: Connection refused");
            }
            if (error?.response?.status === 404) {
                error.response.data.message = "Something went wrong, Please try again!";
                toast.error(error.response.data.message);
            }
            return Promise.reject(error);
        }
    );

    return <>{children}</>;
};

export default Interceptor;
