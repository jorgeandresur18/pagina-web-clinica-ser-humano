const ENC = new TextEncoder();

async function getKey(): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    ENC.encode(process.env.ADMIN_SESSION_SECRET!),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function signToken(): Promise<string> {
  const payload = btoa(JSON.stringify({ exp: Date.now() + 86_400_000 }));
  const key = await getKey();
  const sig = await crypto.subtle.sign("HMAC", key, ENC.encode(payload));
  const sigB64 = btoa(String.fromCharCode(...Array.from(new Uint8Array(sig))));
  return `${payload}.${sigB64}`;
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    const [payload, sig] = token.split(".");
    if (!payload || !sig) return false;
    const key = await getKey();
    const sigBytes = Uint8Array.from(atob(sig), (c) => c.charCodeAt(0));
    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      sigBytes,
      ENC.encode(payload)
    );
    if (!valid) return false;
    const { exp } = JSON.parse(atob(payload)) as { exp: number };
    return Date.now() < exp;
  } catch {
    return false;
  }
}