import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { getAdmins, addAdmin, removeAdmin, verifyPasscode, getPasscode, setPasscode } from "./AdminUtils";

interface AdminPageProps {
  currentUserEmail?: string | null;
}

export function AdminPage({ currentUserEmail }: AdminPageProps) {
  const [passcode, setPasscodeInput] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [admins, setAdmins] = useState<string[]>([]);
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [newPasscode, setNewPasscode] = useState("");

  useEffect(() => {
    setAdmins(getAdmins());
  }, []);

  const maskedCurrentCode = useMemo(() => {
    const code = getPasscode();
    if (!code) return "";
    if (code.length <= 2) return "**";
    return `${code[0]}${"*".repeat(Math.max(0, code.length - 2))}${code[code.length - 1]}`;
  }, []);

  const handleVerify = () => {
    if (verifyPasscode(passcode)) {
      setIsVerified(true);
    } else {
      alert("Incorrect passcode");
    }
  };

  const handleAddAdmin = () => {
    if (!newAdminEmail) return;
    addAdmin(newAdminEmail);
    setAdmins(getAdmins());
    setNewAdminEmail("");
  };

  const handleRemoveAdmin = (email: string) => {
    removeAdmin(email);
    setAdmins(getAdmins());
  };

  const handleUpdatePasscode = () => {
    if (!newPasscode.trim()) return;
    setPasscode(newPasscode.trim());
    setNewPasscode("");
    alert("Passcode updated");
  };

  return (
    <div className="space-y-6">
      {!isVerified ? (
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Admin Access</CardTitle>
            <CardDescription>Enter the admin passcode to continue.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Passcode</label>
              <Input
                type="password"
                value={passcode}
                onChange={(e) => setPasscodeInput(e.target.value)}
                placeholder="Enter passcode"
              />
            </div>
            <Button onClick={handleVerify} className="w-full">Verify</Button>
            <p className="text-xs text-muted-foreground">Hint: current code looks like {maskedCurrentCode}</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Admins</CardTitle>
              <CardDescription>Manage the list of admin emails.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="email@example.com"
                  value={newAdminEmail}
                  onChange={(e) => setNewAdminEmail(e.target.value)}
                />
                <Button onClick={handleAddAdmin}>Add</Button>
              </div>
              <Separator />
              <div className="space-y-2">
                {admins.length === 0 && (
                  <p className="text-sm text-muted-foreground">No admins yet.</p>
                )}
                {admins.map((email) => (
                  <div key={email} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant={email === (currentUserEmail || "").toLowerCase() ? "default" : "secondary"}>
                        {email === (currentUserEmail || "").toLowerCase() ? "You" : "Admin"}
                      </Badge>
                      <span className="text-sm">{email}</span>
                    </div>
                    <Button variant="destructive" size="sm" onClick={() => handleRemoveAdmin(email)}>Remove</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Passcode</CardTitle>
              <CardDescription>Rotate the admin passcode.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">New Passcode</label>
                <Input
                  type="text"
                  value={newPasscode}
                  onChange={(e) => setNewPasscode(e.target.value)}
                  placeholder="Enter new passcode"
                />
              </div>
              <Button onClick={handleUpdatePasscode}>Update Passcode</Button>
              <p className="text-xs text-muted-foreground">Only share this with trusted admins.</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}


