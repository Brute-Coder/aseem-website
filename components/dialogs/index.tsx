"use client";

import * as React from "react";
import { LeadForm } from "./lead-form";
import ThanksDialog from "./whatsapp-join"

export default function Dialogs() {
    const [isMounted, setIsMounted] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <LeadForm />
            <ThanksDialog />
        </>
    );
}
