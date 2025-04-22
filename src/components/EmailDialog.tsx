
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

interface EmailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EmailDialog: React.FC<EmailDialogProps> = ({ open, onOpenChange }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="mb-2 text-turquoise">Schreiben Sie uns Ihre Anfrage</DialogTitle>
      </DialogHeader>
      <form className="space-y-4">
        <div>
          <label htmlFor="mail" className="block text-sm mb-1 text-muted-foreground">Ihre E-Mail</label>
          <Input id="mail" type="email" placeholder="your@email.com" autoFocus required />
        </div>
        <div>
          <label htmlFor="msg" className="block text-sm mb-1 text-muted-foreground">Ihre Nachricht</label>
          <Textarea id="msg" placeholder="Ihre Anfrage ..." required rows={5} />
        </div>
        <div className="flex justify-end gap-2 mt-2">
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            Schließen
          </Button>
          <Button type="submit" disabled>
            Absenden
          </Button>
        </div>
        <div className="text-xs text-muted-foreground">Aktuell nur Vorschau – Absenden ist nicht aktiviert.</div>
      </form>
    </DialogContent>
  </Dialog>
);

export default EmailDialog;
