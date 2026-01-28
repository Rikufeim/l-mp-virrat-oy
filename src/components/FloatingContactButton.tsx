import { useState } from "react";
import { MessageCircle, Mail, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingContactButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Contact options menu */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-64 animate-fade-in-up flex flex-col gap-3 items-end">
                    <a
                        href="tel:+358401234567"
                        className="flex items-center justify-between w-full bg-primary text-primary-foreground p-4 rounded-2xl shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
                    >
                        <div className="font-semibold text-base">Soita</div>
                        <Phone className="h-5 w-5" />
                    </a>

                    <a
                        href="mailto:info@lampovirrat.fi"
                        className="flex items-center justify-between w-full bg-primary text-primary-foreground p-4 rounded-2xl shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
                    >
                        <div className="font-semibold text-base">Sähköposti</div>
                        <Mail className="h-5 w-5" />
                    </a>
                </div>
            )}

            {/* Main floating button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="lg"
                className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <MessageCircle className="h-6 w-6" />
                )}
            </Button>
        </div>
    );
}
