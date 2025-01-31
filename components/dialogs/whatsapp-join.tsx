import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useDialog } from "@/hooks/useDialog";
import { Button } from "@/components/ui/button";

export default function ThanksDialog() {
    const { onClose, isOpen, type, data } = useDialog();
    const whatsappLink = data?.whatsappLink;
    const name = data?.name
    const open = type === "join-modal" && isOpen;

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1> Thank You! {name ?? ""}</h1>
                    <p> We Have Received Your Payment</p>
                    <p>Click The Button Below And Join The Exclusive Whatsapp Group</p>
                    <a href={whatsappLink}>
                        <Button className="bg-green-400 hover:bg-green-500">
                            Join WhatsApp !
                        </Button>
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
}
