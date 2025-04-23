
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "./ui/sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

// Zod-Schema für Formularvalidierung
const contactSchema = z.object({
  email: z.string().email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein" }),
  message: z.string().min(10, { message: "Ihre Nachricht muss mindestens 10 Zeichen lang sein" })
});

interface EmailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EmailDialog: React.FC<EmailDialogProps> = ({ open, onOpenChange }) => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    console.log("Formular eingereicht:", data);
    toast.success("Ihre Nachricht wurde übermittelt!", {
      description: "Wir melden uns so schnell wie möglich bei Ihnen zurück."
    });
    onOpenChange(false); // Schließe den Dialog nach erfolgreicher Übermittlung
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2 text-turquoise">Schreiben Sie uns Ihre Anfrage</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ihre E-Mail</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ihre Nachricht</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Ihre Anfrage ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-2 mt-2">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Schließen
              </Button>
              <Button type="submit">
                Absenden
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailDialog;
