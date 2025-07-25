import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AtSign } from "lucide-react";

export default function CopyEmailButton() {
    const [copied, setCopied] = useState(false);

    const email = "enzo@labrau.com.br";

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // feedback por 2s
        });
    };

    return (
        <Button variant="outline" onClick={handleCopy}>
            <AtSign /> {copied ? "Copiado!" : "Copiar Email"}
        </Button>
    );
}
