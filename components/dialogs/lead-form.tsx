import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDialog } from "@/hooks/useDialog";
import axios from "axios";
// import { base64Image } from "@/lib/utils";

export const leadFormSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z
        .string()
        .min(10, { message: "Phone number should be 10 digits" })
        .max(10, { message: "Phone number should be 10 digits" })
        .refine((value) => /^\d+$/.test(value), {
            message: "Phone number should contain only numbers",
        })
        .refine((value) => /^(6|7|8|9)\d{9}$/.test(value), {
            message: "Phone number should be a valid Indian number",
        }),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

export function LeadForm() {
    const { isOpen, onClose, type, data, onOpen } = useDialog();
    const dialogData = data?.dialogData;
    const [paymentSuccessful, setPaymentSuccessful] = React.useState(false);
    const [userIp, setUserIp] = React.useState<string>("");
    const [isAccepted, setIsAccepted] = React.useState<boolean>(true);
    const [redirData, setRedirData] = React.useState({ rName: "", rPhone: "" });
    const router = useRouter();
    const pathname = usePathname();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<LeadFormData>({
        resolver: zodResolver(leadFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    });

    const searchParams = useSearchParams();
    const source = searchParams.get("source");
    const comment = searchParams.get("comment");


    const onSubmit = async (data: LeadFormData) => {
        const { email, name, phone } = data;
        setRedirData({ rName: name, rPhone: phone });

        try {
            await axios
                .post(`${process.env.NEXT_PUBLIC_BASE_API}leads`, {
                    email,
                    name,
                    phone,
                    source: source || "direct",
                    comment: comment || "defaultComment",
                    masterclassId: dialogData.masterClassId,
                    masterclassSlotId: dialogData.activeSlotId,
                })
                .then(async () => {
                    const options = {
                        masterClassId: dialogData?.masterClassId || "",
                        name: data.name,
                        phone: data.phone,
                        email: data.email,
                        paymentMethodType: source === "google" ? "paidMasterClass" : "paidBootcamp",
                        userIp: userIp,
                        comment: comment,
                        token:
                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbW91bnQiOjQ5fQ.CxV6Wx22zOtz70T6JXG79RZVCpx5ygSqUTgSf-eNwsA",
                    };
                    await axios.post(`${process.env.NEXT_PUBLIC_BASE_API}payments/create-order`, options).then(async (res) => {
                        const { id, gatewayOrderId, amount } = res.data.data;

                        const options = {
                            prefill: {
                                name: data.name,
                                email: data.email,
                                contact: "+91" + String(data.phone),
                            },
                            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
                            amount: Number(amount),
                            currency: "INR",
                            name: `Healoved`,
                            description: "reverse your diabetes with healoved",
                            // image: base64Image,
                            handler: async function (response: any) {
                                setPaymentSuccessful(true);
                            },
                            order_id: gatewayOrderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                            theme: {
                                color: "#000",
                            },
                        };
                        onClose();
                        reset();
                        try {
                            // @ts-ignore
                            const rzp1 = new window.Razorpay(options);
                            // setIsLoading(false);
                            rzp1.open();
                        } catch (error) {
                            console.log("[error opening rzp: ]", error);
                        }
                    });
                })
                .catch((error) => {
                    console.log("error while submitting leads", error);
                });

            //reset()
            //onClose()
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    React.useEffect(() => {
        axios
            .get("https://api64.ipify.org/")
            .then((res) => {
                setUserIp(res.data);
            })
            .catch((err) => {
                err;
            });
    }, []);

    React.useEffect(() => {
        if (paymentSuccessful) {
            router.push(`${pathname}/thanks-paid?payment=success&name=${redirData.rName}&mobile=${redirData.rPhone}&comment=${comment}&source=${source}`);
        }
    }, [paymentSuccessful, router]);

    const open = type === "lead-form" && isOpen;

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Please Enter Your Details</DialogTitle>
                    <DialogDescription>Fill out this form to receive more information about our services.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input {...register("name")} id="name" placeholder="John Doe" />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input {...register("email")} id="email" placeholder="john@example.com" />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input {...register("phone")} id="phone" placeholder="1234567890" type="number" />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>
                    {dialogData?.pageType === "consultancy" ? (
                        <div className="items-top flex space-x-2">
                            <Checkbox onCheckedChange={(prev) => setIsAccepted(!prev)} />
                            <div className="grid gap-1.5 leading-none">
                                <label
                                    htmlFor="terms1"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    I confirm the following
                                </label>
                                <ul className="text-sm text-muted-foreground">
                                    <li>I am between 18-70 years old</li>
                                    <li>I can read and understand English or Hindi</li>
                                </ul>
                            </div>
                        </div>
                    ) : null}
                    <DialogFooter>
                        <Button type="submit" disabled={isSubmitting || (dialogData?.pageType === "consultancy" && isAccepted)}>
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
