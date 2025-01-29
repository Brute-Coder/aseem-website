"use client";

import * as React from "react";
import { LeadForm } from "./lead-form";

export default function Dialogs() {
    const [isMounted, setIsMounted] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <LeadForm />
        </>
    );
}
