import React from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import links from "@/data/social-links";
import tradewiseIcon from "@/utils/tradewiseIcon";
import getActiveSlotByMasterClassId from "@/utils/functions";

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
    const { isOpen, onClose, type, onOpen } = useDialog();
    const [userIp, setUserIp] = React.useState<string>("");
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
        console.log("testing .com")
        const { email, name, phone } = data;


        try {
            const activeSlot = await getActiveSlotByMasterClassId(links.masterclassid)
            await axios
                .post(`${process.env.NEXT_PUBLIC_BASE_API}leads`, {
                    email,
                    name,
                    phone,
                    source: source || "aseem_website",
                    comment: comment || "og-lead",
                    masterclassId: links.masterclassid,
                    masterclassSlotId: activeSlot.id,
                })
                .then(async () => {
                    const options = {
                        name: data.name,
                        phone: data.phone,
                        email: data.email,
                        userIp: userIp,
                        comment: comment,
                        bootcampId: links.bootcampid
                    };
                    await axios.post(`${process.env.NEXT_PUBLIC_BASE_API}payments/create-order`, options).then(async (res) => {
                        const { gatewayOrderId, amount } = res.data.data;

                        const options = {
                            prefill: {
                                name: data.name,
                                email: data.email,
                                contact: "+91" + String(data.phone),
                            },
                            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
                            amount: Number(amount),
                            currency: "INR",
                            name: `Algo Trading`,
                            description: "Master Algo Trading With Chatgpt With Aseem Singhal.",
                            image: tradewiseIcon,
                            handler: async function () {
                                reset()
                                onClose()
                                onOpen("join-modal", { whatsappLink: activeSlot.whatsappGroupLink, name: name })
                            },
                            order_id: gatewayOrderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                            theme: {
                                color: "#000",
                            },
                        };
                        onClose();
                        reset();
                        try {
                            // @ts-expect-error  razorpay will invok it's iframe
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
                console.error(err)
            });
    }, []);


    const open = type === "lead-form" && isOpen;

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Please Enter Your Details</DialogTitle>
                    <DialogDescription>Fill out this form to receive more information about  our Courses.</DialogDescription>
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
                    <DialogFooter>
                        <div className="w-full grid place-items-center">
                            <Button type="submit" disabled={isSubmitting} className="bg-blue-500 hover:bg-blue-600 px-8 py-4 font-bold">
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </Button>
                        </div>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
